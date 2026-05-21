import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject, OnDestroy, signal, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LearningApiService, LessonDto } from '../../Service/learning-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LanguageService } from '../../Service/language.service';
import { LiveClass, LiveClassService } from '../../Service/live-class-service'; // ✅ নতুন
import { Navbar } from '../../shared/navbar/navbar';

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
  imports: [RouterLink,Navbar],
  templateUrl: './enrolled-course.html',
  styleUrl: './enrolled-course.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnrolledCourse implements OnDestroy {

  private plyrInstance: any = null;
  private readonly route = inject(ActivatedRoute, { optional: true });
  private readonly learningApi = inject(LearningApiService);
  private readonly authService = inject(AuthService);
  private readonly liveClassService = inject(LiveClassService); // ✅ নতুন
  readonly lang = inject(LanguageService);
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

  // ✅ Live class signals
  protected readonly liveClasses = signal<LiveClass[]>([]);
  protected readonly isLoadingLive = signal(false);

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

  // ✅ Active live class আছে কিনা
  protected readonly activeLiveClass = computed(() =>
    this.liveClasses().find(lc => lc.isActive) ?? null
  );

  constructor(private readonly sanitizer: DomSanitizer) {
    void this.loadLessons();
    effect(() => {
      const lesson = this.selectedLesson();
      if (lesson) {
        setTimeout(() => this.initPlyr(), 100);
      }
    });
  }

  ngAfterViewInit() {
    this.initPlyr();
  }

  ngOnDestroy() {
    this.plyrInstance?.destroy();
    clearInterval(this.saveProgressInterval);
  }

  protected selectLesson(lessonId: string): void {
    clearInterval(this.saveProgressInterval);
    this.selectedLessonId.set(lessonId);

    const lesson = this.lessons().find(l => l.id === lessonId);
    if (lesson && !lesson.hasQuiz) return;

    const userId = this.authService.getCurrentUser()?.id ?? '';
    if (!userId || !lesson) return;

    firstValueFrom(this.learningApi.hasAttemptedQuiz(lessonId, String(userId)))
      .then(res => {
        const data = (res as any)?.Data ?? (res as any)?.data ?? res;
        const attempted = data === true || data === 'true';
        this.lessons.update(list =>
          list.map(l => l.id === lessonId ? { ...l, QuizAttempted: attempted } : l)
        );
      })
      .catch(() => {});
  }

  private initPlyr() {
    const videoEl = this.videoPlayer?.nativeElement;
    if (!videoEl) return;

    if (this.plyrInstance) {
      this.plyrInstance.destroy();
      this.plyrInstance = null;
    }

    const PlyrLib = (window as any).Plyr;
    if (!PlyrLib) return;

    this.plyrInstance = new PlyrLib(videoEl, {
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
    });
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
      await this.loadLiveClasses(id); // ✅ live class লোড করো

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

  // ✅ Live class load করো
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

  private async loadCourseMeta(id: string): Promise<CourseMetaView | null> {
    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const responseWithAlternativeShape = response as { Data?: Array<{ id: string; title: string; instructorName: string }> };
      const rawCourses = Array.isArray(response.data)
        ? response.data
        : (Array.isArray(responseWithAlternativeShape.Data) ? responseWithAlternativeShape.Data : []);

      const matchedCourse = rawCourses.find((course) => course.id === id);
      if (!matchedCourse) return null;

      return { title: matchedCourse.title, instructorName: matchedCourse.instructorName };
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
    if (!globalThis.confirm('Delete this comment?')) return;

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

  // ✅ Live class scheduled time format
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
      videoUrl: hasUploadedVideo
        ? this.learningApi.buildDownloadUrl(videoPath)
        : (hasExternalVideo ? videoUrl : ''),
      thumbnailUrl: this.learningApi.buildDownloadUrl(thumbnailPath),
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