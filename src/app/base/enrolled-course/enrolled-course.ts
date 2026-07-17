import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, ElementRef, inject, OnDestroy, signal, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LearningApiService, LessonDto } from '../../Service/learning-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LanguageService } from '../../Service/language.service';
import { ConfirmService } from '../../Service/confirm.service';
import { LiveClass, LiveClassService } from '../../Service/live-class-service';
import { ExamService, ExamView } from '../../Service/exam.service';
import { CourseNotifService } from '../../Service/course-notif.service';
import { Navbar } from '../../shared/navbar/navbar';
import { CourseLive } from '../course-live/course-live';
import { CourseClasswork } from '../course-classwork/course-classwork';
import { CourseRecordings } from '../course-recordings/course-recordings';
import { CourseExams } from '../course-exams/course-exams';
import { CoursePractice } from '../course-practice/course-practice';
import { SafeUrl } from '@angular/platform-browser';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtService } from '../../Service/jwt.service';
import Hls from 'hls.js';


type LessonView = {
  id: string;
  title: string;
  description: string;
  orderIndex: number;
  durationMinutes: number;
  videoUrl: string;
  thumbnailUrl: string;
  hasQuiz: boolean;
  quizAttempted: boolean;
};

type CourseMetaView = {
  title: string;
  instructorName: string;
  isCompleted: boolean;
};

type CourseCommentView = {
  id: string;
  courseId: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: string | null;
  updatedAt: string | null;
};

@Component({
  selector: 'app-enrolled-course',
  imports: [RouterLink, Navbar, CourseLive, CourseClasswork, CourseRecordings, CourseExams, CoursePractice],
  templateUrl: './enrolled-course.html',
  styleUrl: './enrolled-course.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnrolledCourse implements OnDestroy {

  private plyrInstance: any = null;
  private hlsInstance: any = null;  // HLS.js instance
  private playerEl: HTMLVideoElement | null = null;  // Plyr/HLS যে element এ bound
  private initToken = 0;            // প্রতিটা lesson switch এ বাড়ে — stale async init abort করতে
  private readonly route = inject(ActivatedRoute, { optional: true });
  private readonly learningApi = inject(LearningApiService);
  private readonly authService = inject(AuthService);
  private readonly liveClassService = inject(LiveClassService);
  protected readonly courseNotif = inject(CourseNotifService);
  readonly lang = inject(LanguageService);
  private readonly confirmDialog = inject(ConfirmService);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly courseId = signal('');
  protected readonly lessons = signal<LessonView[]>([]);
  protected readonly selectedLessonId = signal('');
  protected readonly courseMeta = signal<CourseMetaView | null>(null);
  protected readonly canComment = computed(() => this.authService.isLoggedIn());
  protected readonly comments = signal<CourseCommentView[]>([]);
  protected readonly isLoadingComments = signal(false);
  protected readonly commentText = signal('');
  protected readonly editingCommentId = signal('');
  protected readonly editingCommentText = signal('');
  protected readonly isSubmittingComment = signal(false);
  protected readonly commentMessage = signal('');
  protected readonly commentError = signal('');

  private readonly http = inject(HttpClient);
  private readonly jwtService = inject(JwtService);

  // ✅ Signed video URL — token সহ, inspect করে copy করলেও কাজ করবে না (5 মিনিট পরে expire)
  protected readonly signedVideoUrl = signal<string>('');

  // ✅ Live class signals
  protected readonly liveClasses = signal<LiveClass[]>([]);
  protected readonly isLoadingLive = signal(false);

  // ✅ Live class recordings (separate "Live Class" section, plays via the same tokenized HLS)
  protected readonly recordings = signal<LiveClass[]>([]);
  protected readonly isLoadingRecordings = signal(false);
  protected readonly watchingRecording = signal<LiveClass | null>(null);
  private recHls: any = null;

  // ✅ Hub view: landing shows 4 cards; each opens a focused section with a Back button
  protected readonly view = signal<'hub' | 'practice' | 'live' | 'record' | 'exam'>('hub');

  protected setView(v: 'hub' | 'practice' | 'live' | 'record' | 'exam'): void {
    // Leaving Record Video → tear down the player (its <video> is removed from the DOM)
    if (this.view() === 'record' && v !== 'record') {
      this.initToken++;
      this.destroyPlyr();
    }
    // Opening a section clears its "new content" badge (marks the items as seen).
    if (v !== 'hub') void this.courseNotif.markSectionSeen(this.courseId(), v);
    this.view.set(v);
  }
  protected backToHub(): void { this.setView('hub'); }

  // ✅ Exam section (legacy inline state — superseded by <app-course-exams>)
  private readonly examService = inject(ExamService);
  protected readonly exams = signal<ExamView[]>([]);
  protected readonly examAnswerNames = signal<Record<string, string>>({});
  protected readonly submittingExamId = signal<string | null>(null);
  protected readonly nowTick = signal<number>(Date.now());
  private examFiles: Record<string, File> = {};
  private examInterval: any;

  /** Always 4 slots (1st/2nd/3rd/Final); null = not created yet (locked). */
  protected readonly examSlots = computed<(ExamView | null)[]>(() => {
    const list = this.exams();
    return [1, 2, 3, 4].map((slot) => list.find((e) => e.slot === slot) ?? null);
  });

  private saveProgressInterval: any;

  protected readonly selectedLesson = computed(() => {
    const currentSelectedId = this.selectedLessonId();
    return this.lessons().find((lesson) => lesson.id === currentSelectedId) ?? null;
  });

  protected readonly selectedVideoUrl = computed(() => this.selectedLesson()?.videoUrl ?? '');
  protected readonly instructorInitial = computed(() => {
    const name = this.courseMeta()?.instructorName ?? '';
    return name.trim().charAt(0).toUpperCase() || 'I';
  });

  protected readonly activeLiveClass = computed(() =>
    this.liveClasses().find(lc => lc.isActive) ?? null
  );

constructor(private readonly sanitizer: DomSanitizer) {
  void this.loadLessons();
  effect(() => {
    const v = this.view();
    const lesson = this.selectedLesson();
    // Player only exists in the Record Video view — set up there (and re-init on entry)
    if (v !== 'record' || !lesson) return;
    // প্রতিটা lesson switch এ: token বাড়াও (stale async abort), আগের player সম্পূর্ণ teardown করো
    const myToken = ++this.initToken;
    this.signedVideoUrl.set('');

    if (this.isYoutube(lesson.videoUrl) || !lesson.videoUrl) {
      // YouTube/খালি — video player তুলে দাও (iframe/placeholder দেখাবে)
      this.destroyPlyr();
      return;
    }
    // uploaded video: persistent player রাখি — switch এ শুধু source swap হবে (setupPlayer এ)

    // signed token নাও, তারপর সরাসরি player setup করো (polling এর উপর নির্ভর করি না)
    const authToken = this.jwtService.getToken();
    const headers = new HttpHeaders(authToken ? { Authorization: `Bearer ${authToken}` } : {});
    const params = new HttpParams().set('path', lesson.videoUrl);
    this.http.get<any>(`${this.learningApi.getBaseUrl()}/files/video-token?${params.toString()}`, { headers })
      .subscribe({
        next: (res) => {
          if (myToken !== this.initToken) return;   // এর মধ্যে অন্য lesson এ switch হয়েছে — বাদ
          const streamParams = new HttpParams()
            .set('path', lesson.videoUrl)
            .set('token', res.token)
            .set('exp', String(res.exp));
          // ✅ HLS (chunk ভাঙা) video হলে playlist endpoint, নাহলে raw stream (fallback)
          const isHlsVideo = (lesson.videoUrl ?? '').toLowerCase().endsWith('.m3u8');
          const endpoint = isHlsVideo ? 'files/hls/playlist' : 'files/stream';
          const url = `${this.learningApi.getBaseUrl()}/${endpoint}?${streamParams.toString()}`;
          this.signedVideoUrl.set(url);
          this.setupPlayer(url, myToken);
        },
        error: () => {
          if (myToken !== this.initToken) return;
          const raw = lesson.videoUrl ?? '';
          this.signedVideoUrl.set(raw);
          this.setupPlayer(raw, myToken);
        }
      });
  });
}

  ngOnDestroy() {
    this.initToken++;   // চলমান কোনো async setup abort করো
    this.destroyPlyr();
    if (this.recHls) { try { this.recHls.destroy(); } catch { } this.recHls = null; }
    clearInterval(this.saveProgressInterval);
    clearInterval(this.examInterval);
  }

  private destroyPlyr(): void {
    const v = this.playerEl ?? this.videoPlayer?.nativeElement ?? null;
    // ⚠️ order গুরুত্বপূর্ণ: Plyr আগে destroy করো। নাহলে HLS destroy blob revoke করার পর
    // Plyr সেই dead blob restore করে net::ERR_FILE_NOT_FOUND দেয়।
    if (this.plyrInstance) {
      try { this.plyrInstance.destroy(); } catch { }
      this.plyrInstance = null;
    }
    if (this.hlsInstance) {
      try { this.hlsInstance.destroy(); } catch { }
      this.hlsInstance = null;
    }
    if (v) {
      try { v.pause(); } catch { }
      v.removeAttribute('src');
      (v as any).srcObject = null;
      try { v.load(); } catch { }
    }
    this.playerEl = null;
  }

  protected selectLesson(lessonId: string): void {
    if (lessonId === this.selectedLessonId()) return; // same lesson click করলে কিছু করার দরকার নেই

    clearInterval(this.saveProgressInterval);
    // destroyPlyr এখানে করি না — effect + setupPlayer persistent player এ source swap করবে
    this.selectedLessonId.set(lessonId);

    const lesson = this.lessons().find(l => l.id === lessonId);
    if (!lesson?.hasQuiz) return;

    const userId = this.authService.getCurrentUser()?.id ?? '';
    if (!userId || !lesson) return;

    firstValueFrom(this.learningApi.hasAttemptedQuiz(lessonId, String(userId)))
      .then(res => {
        const data = (res as any)?.Data ?? (res as any)?.data ?? res;
        const attempted = data === true || data === 'true';
        this.lessons.update(list =>
          list.map(l => l.id === lessonId ? { ...l, quizAttempted: attempted } : l)
        );
      })
      .catch(() => { });
  }

  // signed URL পাওয়ার পর player সেটআপ করে। মূল কৌশল: একটাই persistent Plyr+HLS instance —
  // lesson switch এ destroy/recreate করি না (তাতে Plyr DOM-restructuring conflict + blob error হতো),
  // শুধু hls.loadSource() দিয়ে নতুন source swap করি। token দিয়ে stale switch abort, RAF দিয়ে
  // <video> element render এর জন্য অপেক্ষা করি।
  private setupPlayer(url: string, token: number, attempt = 0): void {
    if (token !== this.initToken || !url) return;   // stale switch / খালি url

    const videoEl = this.videoPlayer?.nativeElement;
    if (!videoEl) {
      // element এখনো DOM এ আসেনি — পরের frame এ আবার চেষ্টা করো (max ~20 frame)
      if (attempt < 20) requestAnimationFrame(() => this.setupPlayer(url, token, attempt + 1));
      return;
    }

    const PlyrLib = (window as any).Plyr;
    if (!PlyrLib) return;

    // video element বদলে গেলে (YouTube ↔ uploaded toggle এর পর Angular নতুন element বানায়) পুরো reset
    if (this.playerEl && this.playerEl !== videoEl) this.destroyPlyr();

    const isHls = url.includes('/hls/playlist');

    if (isHls && Hls.isSupported()) {
      // প্রথমবার: Plyr ও HLS একবারই তৈরি করো এবং persistent রাখো
      if (!this.hlsInstance || this.playerEl !== videoEl) {
        // Plyr official pattern: আগে Plyr, তারপর hls.attachMedia()
        if (!this.plyrInstance) this.plyrInstance = new PlyrLib(videoEl, this.getPlyrConfig());
        const hls = new Hls({
          xhrSetup: (xhr: XMLHttpRequest) => { xhr.withCredentials = false; },
        });
        this.hlsInstance = hls;
        hls.attachMedia(videoEl);
        hls.on(Hls.Events.ERROR, (_evt: any, data: any) => {
          console.error('[HLS]', data.type, data.details, 'fatal:', data.fatal,
            'httpStatus:', data.response?.code);
          if (!data.fatal) return;
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR: hls.startLoad(); break;
            case Hls.ErrorTypes.MEDIA_ERROR: hls.recoverMediaError(); break;
            default:
              try { hls.destroy(); } catch { }
              if (this.hlsInstance === hls) this.hlsInstance = null;
          }
        });
        this.playerEl = videoEl;
      }
      // switch: শুধু source swap — destroy/reattach নেই বলে blob churn/ERR_FILE_NOT_FOUND নেই
      this.hlsInstance.loadSource(url);
    } else {
      // Safari native HLS অথবা raw mp4/non-HLS fallback — HLS.js লাগবে না
      if (this.hlsInstance) { try { this.hlsInstance.destroy(); } catch { } this.hlsInstance = null; }
      if (!this.plyrInstance) this.plyrInstance = new PlyrLib(videoEl, this.getPlyrConfig());
      this.playerEl = videoEl;
      videoEl.src = url;
      try { videoEl.load(); } catch { }
    }
  }

  private getPlyrConfig() {
    return {
      controls: [
        'play-large', 'play', 'progress',
        'current-time', 'duration',
        'mute', 'volume', 'fullscreen',
      ],
      settings: ['speed'],
      speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] },
      keyboard: { focused: true, global: false },
      tooltips: { controls: true, seek: true },
      disableContextMenu: true,
    };
  }

  protected formatDuration(totalMinutes: number): string {
    if (totalMinutes <= 0) return 'N/A';
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours === 0) return `${minutes} min`;
    if (minutes === 0) return `${hours} hr`;
    return `${hours} hr ${minutes} min`;
  }

  private async loadLessons(): Promise<void> {
    if (!this.authService.isLoggedIn()) {
      this.errorMessage.set('Please login first.');
      this.isLoading.set(false);
      return;
    }

    const id = this.route?.snapshot.paramMap.get('id') ??
      this.route?.snapshot.queryParamMap.get('id') ?? '';

    if (!id) {
      this.errorMessage.set('Course ID পাওয়া যায়নি।');
      this.isLoading.set(false);
      return;
    }

    this.courseId.set(id);
    this.isLoading.set(true);
    this.errorMessage.set('');

    try {
      const isEnrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(id));
      if (!isEnrolled) {
        this.errorMessage.set('You are not enrolled in this course yet.');
        this.lessons.set([]);
        return;
      }

      this.courseMeta.set(await this.loadCourseMeta(id));
      await this.loadComments(id);
      // Compute "new content" badges for the 4 hub cards (practice/live/record/exam).
      void this.courseNotif.refreshCourse(id);
      // live / recordings / exams are now self-contained child components

      const response = await firstValueFrom(this.learningApi.getLessonsByCourse(id));
      const anyRes = response as any;
      const rawLessons = Array.isArray(anyRes?.data) ? anyRes.data
        : Array.isArray(anyRes?.Data) ? anyRes.Data : [];

      const orderedLessons = [...rawLessons].sort((a, b) => a.orderIndex - b.orderIndex);
      const mappedLessons = orderedLessons.map((lesson) => this.mapLessonForView(lesson));

      const userId = this.authService.getCurrentUser()?.id ?? '';

      const lessonsWithQuizInfo = await Promise.all(
        mappedLessons.map(async (lesson) => {
          try {
            const quizRes = await firstValueFrom(this.learningApi.getQuizzesByLesson(lesson.id));
            const quizData = (quizRes as any)?.Data ?? (quizRes as any)?.data ?? [];
            const hasQuiz = Array.isArray(quizData) && quizData.length > 0;

            let quizAttempted = false;
            if (hasQuiz && userId) {
              const attemptRes = await firstValueFrom(
                this.learningApi.hasAttemptedQuiz(lesson.id, String(userId))
              );
              const attemptData = (attemptRes as any)?.Data ?? (attemptRes as any)?.data ?? attemptRes;
              quizAttempted = attemptData === true || attemptData === 'true';
            }

            return { ...lesson, hasQuiz, quizAttempted };
          } catch {
            return { ...lesson, hasQuiz: false, quizAttempted: false };
          }
        })
      );

      this.lessons.set(lessonsWithQuizInfo);

      const resumeLessonId = this.route?.snapshot.queryParamMap.get('lessonId') ?? '';
      if (resumeLessonId && lessonsWithQuizInfo.some(l => l.id === resumeLessonId)) {
        this.selectedLessonId.set(resumeLessonId);
      } else {
        this.selectedLessonId.set(lessonsWithQuizInfo[0]?.id ?? '');
      }

    } catch {
      this.errorMessage.set('Lessons লোড করা যায়নি।');
      this.lessons.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  private async loadLiveClasses(courseId: string): Promise<void> {
    this.isLoadingLive.set(true);
    try {
      const response = await firstValueFrom(this.liveClassService.getByCourse(courseId));
      const anyRes = response as any;
      const arr = Array.isArray(anyRes?.data) ? anyRes.data
        : Array.isArray(anyRes?.Data) ? anyRes.Data : [];

      this.liveClasses.set(arr.map((item: any) => ({
        id: item.id ?? item.Id ?? '',
        title: item.title ?? item.Title ?? '',
        description: item.description ?? item.Description ?? '',
        scheduledAt: item.scheduledAt ?? item.ScheduledAt ?? '',
        isActive: Boolean(item.isActive ?? item.IsActive),
        isEnded: Boolean(item.isEnded ?? item.IsEnded),
        roomUrl: item.roomUrl ?? item.RoomUrl ?? '',
      })));
    } catch {
      this.liveClasses.set([]);
    } finally {
      this.isLoadingLive.set(false);
    }
  }

  private async loadRecordings(courseId: string): Promise<void> {
    this.isLoadingRecordings.set(true);
    try {
      const response: any = await firstValueFrom(this.liveClassService.getCourseRecordings(courseId));
      const arr = Array.isArray(response?.data) ? response.data
        : Array.isArray(response?.Data) ? response.Data : [];

      this.recordings.set(arr.map((item: any) => ({
        id: item.id ?? item.Id ?? '',
        title: item.title ?? item.Title ?? '',
        description: item.description ?? item.Description ?? '',
        scheduledAt: item.scheduledAt ?? item.ScheduledAt ?? '',
        isActive: false,
        isEnded: true,
        roomUrl: '',
        recordingPath: item.recordingPath ?? item.RecordingPath ?? '',
        recordingStatus: item.recordingStatus ?? item.RecordingStatus ?? '',
      })));
    } catch {
      this.recordings.set([]);
    } finally {
      this.isLoadingRecordings.set(false);
    }
  }

  // ── Exams ───────────────────────────────────────────────────────
  private async loadExams(courseId: string): Promise<void> {
    try {
      const res: any = await firstValueFrom(this.examService.getCourseExams(courseId));
      const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res?.Data) ? res.Data : [];
      this.exams.set(arr.map((e: any) => ({
        id: e.id ?? e.Id,
        slot: e.slot ?? e.Slot,
        title: e.title ?? e.Title ?? '',
        instruction: e.instruction ?? e.Instruction ?? '',
        deadline: e.deadline ?? e.Deadline,
        durationMinutes: e.durationMinutes ?? e.DurationMinutes ?? 0,
        totalMarks: e.totalMarks ?? e.TotalMarks ?? 0,
        isPublished: e.isPublished ?? e.IsPublished ?? false,
        hasQuestion: e.hasQuestion ?? e.HasQuestion ?? false,
        isClosed: e.isClosed ?? e.IsClosed ?? false,
        submitted: e.submitted ?? e.Submitted ?? false,
        submittedAt: e.submittedAt ?? e.SubmittedAt ?? null,
        marks: e.marks ?? e.Marks ?? null,
        feedback: e.feedback ?? e.Feedback ?? null,
        graded: e.graded ?? e.Graded ?? false,
      })));
      if (!this.examInterval) {
        // Day-level countdown — a 60s tick is plenty; refreshes "N days left" and flips closed.
        this.examInterval = setInterval(() => this.nowTick.set(Date.now()), 60000);
      }
    } catch {
      this.exams.set([]);
    }
  }

  /** Whole days left until the deadline (0 once passed). */
  protected daysLeft(deadline: string): number {
    const ms = new Date(deadline).getTime() - this.nowTick();
    return ms <= 0 ? 0 : Math.ceil(ms / 86400000);
  }

  protected isExamPast(exam: ExamView): boolean {
    return new Date(exam.deadline).getTime() <= this.nowTick();
  }

  /** locked | open | submitted | closed */
  protected examState(exam: ExamView | null): 'locked' | 'open' | 'submitted' | 'closed' {
    if (!exam || !exam.isPublished) return 'locked';
    if (this.isExamPast(exam)) return 'closed';
    return exam.submitted ? 'submitted' : 'open';
  }

  protected onExamFileSelected(examId: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.examFiles[examId] = file;
    this.examAnswerNames.update((m) => ({ ...m, [examId]: file.name }));
  }

  protected async submitExam(exam: ExamView): Promise<void> {
    const file = this.examFiles[exam.id];
    if (!file) return;
    this.submittingExamId.set(exam.id);
    try {
      await firstValueFrom(this.examService.submit(exam.id, file));
      delete this.examFiles[exam.id];
      this.examAnswerNames.update((m) => { const c = { ...m }; delete c[exam.id]; return c; });
      await this.loadExams(this.courseId());
    } catch {
      // server enforces deadline/enrollment; reload to reflect the true state
      await this.loadExams(this.courseId());
    } finally {
      this.submittingExamId.set(null);
    }
  }

  protected viewExamQuestion(exam: ExamView): void {
    this.examService.viewQuestion(exam.id).subscribe({
      next: (blob) => window.open(URL.createObjectURL(blob), '_blank'),
      error: () => {},
    });
  }

  protected viewMyAnswer(exam: ExamView): void {
    this.examService.myAnswer(exam.id).subscribe({
      next: (blob) => window.open(URL.createObjectURL(blob), '_blank'),
      error: () => {},
    });
  }

  /** Open a recording in the modal player and stream it via the tokenized HLS endpoint. */
  protected playRecording(rec: LiveClass): void {
    if (!rec.recordingPath) return;
    this.watchingRecording.set(rec);

    const authToken = this.jwtService.getToken();
    const headers = new HttpHeaders(authToken ? { Authorization: `Bearer ${authToken}` } : {});
    const params = new HttpParams().set('path', rec.recordingPath);
    this.http.get<any>(`${this.learningApi.getBaseUrl()}/files/video-token?${params.toString()}`, { headers })
      .subscribe({
        next: (res) => {
          const streamParams = new HttpParams()
            .set('path', rec.recordingPath!)
            .set('token', res.token)
            .set('exp', String(res.exp));
          const url = `${this.learningApi.getBaseUrl()}/files/hls/playlist?${streamParams.toString()}`;
          this.attachRecordingHls(url);
        },
        error: () => { /* modal stays; user can close */ },
      });
  }

  private attachRecordingHls(url: string, attempt = 0): void {
    const videoEl = this.recordingPlayer?.nativeElement;
    if (!videoEl) {
      if (attempt > 20) return;
      requestAnimationFrame(() => this.attachRecordingHls(url, attempt + 1));
      return;
    }
    if (this.recHls) { try { this.recHls.destroy(); } catch { } this.recHls = null; }

    if (Hls.isSupported()) {
      const hls = new Hls();
      this.recHls = hls;
      hls.loadSource(url);
      hls.attachMedia(videoEl);
      hls.on(Hls.Events.MANIFEST_PARSED, () => { videoEl.play().catch(() => { }); });
    } else if (videoEl.canPlayType('application/vnd.apple.mpegurl')) {
      videoEl.src = url;
      videoEl.play().catch(() => { });
    }
  }

  protected closeRecording(): void {
    if (this.recHls) { try { this.recHls.destroy(); } catch { } this.recHls = null; }
    const v = this.recordingPlayer?.nativeElement;
    if (v) {
      try { v.pause(); } catch { }
      v.removeAttribute('src');
      try { v.load(); } catch { }
    }
    this.watchingRecording.set(null);
  }

  private async loadCourseMeta(id: string): Promise<CourseMetaView | null> {
    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const responseWithAlternativeShape = response as { Data?: Array<{ id: string; title: string; instructorName: string }> };
      const rawCourses = Array.isArray(response.data)
        ? response.data
        : (Array.isArray(responseWithAlternativeShape.Data) ? responseWithAlternativeShape.Data : []);

      const matchedCourse = rawCourses.find((course) => course.id === id);
      if (!matchedCourse) return null;

      return {
        title: matchedCourse.title,
        instructorName: matchedCourse.instructorName,
        isCompleted: (matchedCourse as { isCompleted?: boolean }).isCompleted ?? false,
      };
    } catch {
      return null;
    }
  }

  private normalizeComment(comment: any): CourseCommentView {
    return {
      id: String(comment?.id ?? comment?.Id ?? ''),
      courseId: String(comment?.courseId ?? comment?.CourseId ?? this.courseId() ?? ''),
      userId: String(comment?.userId ?? comment?.UserId ?? ''),
      userName: String(comment?.userName ?? comment?.UserName ?? comment?.fullName ?? comment?.FullName ?? 'User'),
      content: String(comment?.content ?? comment?.Content ?? ''),
      createdAt: comment?.createdAt ?? comment?.CreatedAt ?? null,
      updatedAt: comment?.updatedAt ?? comment?.UpdatedAt ?? null,
    };
  }

  private async loadComments(courseId: string): Promise<void> {
    this.isLoadingComments.set(true);
    this.commentError.set('');

    try {
      const response = await firstValueFrom(this.learningApi.getCourseComments(courseId));
      const payload = response as any;

      let rawComments: any[] = [];

      if (Array.isArray(payload?.data?.comments)) {
        rawComments = payload.data.comments;
      } else if (Array.isArray(payload?.data?.data)) {
        rawComments = payload.data.data;
      } else if (Array.isArray(payload?.data)) {
        rawComments = payload.data;
      } else if (Array.isArray(payload?.Data?.comments)) {
        rawComments = payload.Data.comments;
      } else if (Array.isArray(payload)) {
        rawComments = payload;
      }

      this.comments.set(rawComments.map((comment: any) => this.normalizeComment(comment)));
    } catch {
      this.comments.set([]);
      this.commentError.set('Comments লোড করা যায়নি।');
    } finally {
      this.isLoadingComments.set(false);
    }
  }

  protected beginEditComment(comment: CourseCommentView): void {
    this.editingCommentId.set(comment.id);
    this.editingCommentText.set(comment.content);
    this.commentMessage.set('');
    this.commentError.set('');
  }

  protected cancelEditComment(): void {
    this.editingCommentId.set('');
    this.editingCommentText.set('');
  }

  protected async submitComment(): Promise<void> {
    const userId = this.authService.getCurrentUser()?.id ?? '';
    const currentCourseId = this.courseId();
    const content = this.commentText().trim();

    if (!userId) { this.commentError.set('Comment করতে login করুন।'); return; }
    if (!content) { this.commentError.set('Comment text দিন।'); return; }
    if (!currentCourseId) { this.commentError.set('Course পাওয়া যায়নি।'); return; }

    this.isSubmittingComment.set(true);
    this.commentError.set('');

    try {
      await firstValueFrom(this.learningApi.addCourseComment({
        courseId: currentCourseId,
        userId: String(userId),
        content,
      }));
      this.commentText.set('');
      this.commentMessage.set('Comment added successfully.');
      await this.loadComments(currentCourseId);
    } catch {
      this.commentError.set('Comment add করা যায়নি।');
    } finally {
      this.isSubmittingComment.set(false);
    }
  }

  protected async saveComment(comment: CourseCommentView): Promise<void> {
    const userId = this.authService.getCurrentUser()?.id ?? '';
    const content = this.editingCommentText().trim();

    if (!userId || !content) { this.commentError.set('Comment text দিন।'); return; }

    this.isSubmittingComment.set(true);
    this.commentError.set('');

    try {
      await firstValueFrom(this.learningApi.updateCourseComment(comment.id, { content, userId: String(userId) }));
      this.editingCommentId.set('');
      this.editingCommentText.set('');
      this.commentMessage.set('Comment updated successfully.');
      await this.loadComments(this.courseId());
    } catch {
      this.commentError.set('Comment update করা যায়নি।');
    } finally {
      this.isSubmittingComment.set(false);
    }
  }

  protected async deleteComment(commentId: string): Promise<void> {
    if (!(await this.confirmDialog.confirm({
      title: 'Delete comment?',
      message: 'Your comment will be removed permanently.',
      tone: 'danger',
      confirmText: 'Delete',
    }))) return;

    try {
      await firstValueFrom(this.learningApi.deleteCourseComment(commentId));
      await this.loadComments(this.courseId());
    } catch {
      this.commentError.set('Comment delete করা যায়নি।');
    }
  }

  protected isMyComment(comment: CourseCommentView): boolean {
    const userId = this.authService.getCurrentUser()?.id;
    return userId != null && String(userId) === comment.userId;
  }

  protected formatCommentDate(value: string | null): string {
    if (!value) return 'Just now';
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return 'Just now';
    return parsed.toLocaleString();
  }

  protected formatScheduled(value: string): string {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleString('bn-BD', { dateStyle: 'medium', timeStyle: 'short' });
  }

  private mapLessonForView(lesson: any): LessonView {
    const videoPath = lesson.videoPath ?? lesson.VideoPath ?? null;
    const videoUrl = lesson.videoUrl ?? lesson.VideoUrl ?? null;
    const thumbnailPath = lesson.thumbnailPath ?? lesson.ThumbnailPath ?? null;

    const hasUploadedVideo = typeof videoPath === 'string' && videoPath.length > 0;
    const hasExternalVideo = typeof videoUrl === 'string' &&
      videoUrl.length > 0 &&
      (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') || videoUrl.startsWith('http'));

    return {
      id: lesson.id ?? lesson.Id,
      title: lesson.title ?? lesson.Title,
      description: lesson.description ?? lesson.Description ?? '',
      orderIndex: lesson.orderIndex ?? lesson.OrderIndex ?? 0,
      durationMinutes: lesson.durationMinutes ?? lesson.DurationMinutes ?? 0,
      // ✅ Uploaded video: raw path রাখো — effect() এ signed URL fetch হবে
      // YouTube: external URL যেমন আছে তেমন রাখো
      videoUrl: hasUploadedVideo
        ? videoPath
        : (hasExternalVideo ? videoUrl : ''),
      thumbnailUrl: this.learningApi.buildStreamUrl(thumbnailPath),
      hasQuiz: false,
      quizAttempted: false,
    };
  }

  isYoutube(url: string): boolean {
    return url?.includes('youtube.com') || url?.includes('youtu.be');
  }

  getSafeYoutubeUrl(url: string) {
    const videoId = this.extractVideoId(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }

  extractVideoId(url: string): string {
    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  }

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('recordingPlayer') recordingPlayer?: ElementRef<HTMLVideoElement>;

  async onVideoLoaded(event: Event, lessonId: string): Promise<void> {
    const video = event.target as HTMLVideoElement;
    const userId = this.authService.getCurrentUser()?.id ?? '';
    if (!userId) return;

    clearInterval(this.saveProgressInterval);

    try {
      const resumeAtParam = this.route?.snapshot.queryParamMap.get('resumeAt');
      let resumeSeconds = resumeAtParam ? parseFloat(resumeAtParam) : null;

      if (resumeSeconds === null || isNaN(resumeSeconds)) {
        const res = await firstValueFrom(this.learningApi.getVideoProgress(lessonId, userId));
        const progress = (res as any)?.Data;
        resumeSeconds = progress?.watchedSeconds ?? null;
      }

      if (resumeSeconds !== null && resumeSeconds > 5) {
        const trySetTime = () => {
          if (video.readyState >= 2) {
            video.currentTime = resumeSeconds!;
          } else {
            video.addEventListener('canplay', () => {
              video.currentTime = resumeSeconds!;
            }, { once: true });
          }
        };
        trySetTime();
      }
    } catch { }

    this.saveProgressInterval = setInterval(async () => {
      if (video.paused || video.ended) return;
      const uid = this.authService.getCurrentUser()?.id ?? '';
      if (!uid) return;
      await firstValueFrom(
        this.learningApi.saveVideoProgress(lessonId, {
          userId: uid,
          watchedSeconds: video.currentTime,
          totalSeconds: video.duration || 0,
        })
      ).catch(() => { });
    }, 5000);
  }

  async onVideoEnded(event: Event, lessonId: string): Promise<void> {
    const video = event.target as HTMLVideoElement;
    const userId = this.authService.getCurrentUser()?.id ?? '';
    if (!userId) return;

    await firstValueFrom(
      this.learningApi.saveVideoProgress(lessonId, {
        userId,
        watchedSeconds: video.duration,
        totalSeconds: video.duration,
      })
    ).catch(() => { });

    clearInterval(this.saveProgressInterval);
  }
}
