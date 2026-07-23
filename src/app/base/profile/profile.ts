import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';
import { LearningApiService, StudentProfileDto, StudentProfilePayload, StudentOnboardingPayload } from '../../Service/learning-api.service';
import { BD_DISTRICTS, BD_ALL_UPAZILAS, BD_UPAZILAS } from '../../Service/bd-locations';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { NotificationService } from '../../Service/notification-service';
import { CourseNotifService } from '../../Service/course-notif.service';
import { ProgressService, CourseProgress, ProgressComponent, Performance } from '../../Service/progress.service';
import { Navbar } from '../../shared/navbar/navbar';
import { NotificationBell } from '../../shared/notification-bell/notification-bell';
import { AgendaMenu } from '../../shared/agenda-menu/agenda-menu';
import { MyCourses } from '../../user/my-courses/my-courses';
import { MyClasses } from '../../user/my-classes/my-classes';
import { Assignment } from '../../user/assignment/assignment';
import { Certificates } from '../../user/certificates/certificates';

type ProfileUser = { id?: number; fullName?: string; email?: string; role?: number; };

/** Sections of the student dashboard shell — every sidebar option opens in-place, the sidebar never goes away. */
type StudentTab = 'dashboard' | 'profile' | 'courses' | 'classes' | 'assignments' | 'certificates' | 'wishlist';
const STUDENT_TABS: readonly StudentTab[] = ['dashboard', 'profile', 'courses', 'classes', 'assignments', 'certificates', 'wishlist'];

type EditForm = {
  fullName: string;
  phone: string;
  bio: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  institution: string;
  classOrGrade: string;
  guardianName: string;
  guardianPhone: string;
  facebookLink: string;
  linkedInLink: string;
  // onboarding info (steps 02–04) — editable here too
  board: string;
  sscExamYear: string;
  thana: string;
  district: string;
  motherName: string;
  guardianOccupation: string;
  referralSource: string;
  parentEmail: string;
};

type WishlistItem = {
  courseId: string;
  title: string;
  instructorName: string;
  level: string;
  price: number;
  thumbnailPath: string | null;
  isEnrolled?: boolean;
};

type ContinueItem = {
  courseId: string;
  lessonId: string;
  lessonTitle: string;
  courseTitle: string;
  progressPercent: number;
  watchedSeconds: number;
  isCompleted: boolean;
  lastWatchedAt: string;
};

@Component({
  selector: 'app-profile',
  imports: [RouterLink, DecimalPipe, DatePipe, Navbar, NotificationBell, AgendaMenu, MyCourses, MyClasses, Assignment, Certificates, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly notifsvc = inject(NotificationService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly learningApi = inject(LearningApiService);
  private readonly courseNotif = inject(CourseNotifService);
  private readonly progressService = inject(ProgressService);
  readonly lang = inject(LanguageService);

  // ── Student dashboard shell — sidebar tab state (deep-linkable via ?tab=) ──
  protected readonly activeTab = signal<StudentTab>('dashboard');

  protected readonly user = signal<ProfileUser | null>(null);
  protected readonly userName = computed(() => this.user()?.fullName || 'Student');
  protected readonly userEmail = computed(() => this.user()?.email || 'No email found');
  protected readonly isLoggedIn = computed(() => !!this.user());
  protected readonly isTeacher = computed(() => this.user()?.role === 1);
  protected readonly isAdmin = computed(() => this.user()?.role === 2);
  protected readonly isStudent = computed(() => (this.user()?.role ?? 0) === 0);
  protected readonly userInitial = computed(() => this.userName().charAt(0).toUpperCase());
  protected readonly userRole = computed(() => {
    const r = this.user()?.role;
    return r === 2 ? 'Admin' : r === 1 ? 'Instructor' : 'Student';
  });

  // ── Student profile / edit ───────────────────────────────
  protected readonly profile = signal<StudentProfileDto | null>(null);
  protected readonly isEditing = signal(false);
  protected readonly isSaving = signal(false);
  protected readonly saveError = signal<string | null>(null);
  protected readonly saveSuccess = signal(false);
  protected readonly imagePreview = signal<string | null>(null);
  private selectedImageFile: File | null = null;

  protected editForm: EditForm = this.emptyForm();

  // ── Onboarding-info edit support (same option sets as the signup modal) ──
  protected readonly boardOptions = [
    'Dhaka', 'Barishal', 'Chattogram', 'Cumilla', 'Dinajpur', 'Jashore',
    'Mymensingh', 'Rajshahi', 'Sylhet', 'Madrasah', 'Technical', 'Other',
  ];
  protected readonly sscYearOptions = (() => {
    const current = new Date().getFullYear();
    const years: string[] = [];
    for (let year = current + 4; year >= current - 8; year -= 1) years.push(String(year));
    return years;
  })();
  protected readonly occupationOptions = ['Service', 'Teacher', 'Business', 'Farmer', 'Expatriate', 'Housewife', 'Other'];
  protected readonly referralOptions = ['Facebook', 'YouTube', 'Google Search', 'From Friend', 'Telegram', 'Teacher', 'Other'];
  protected readonly bdDistricts = BD_DISTRICTS;
  /** Thana datalist — narrows to the chosen district's upazilas when it's recognised. */
  protected get thanaList(): string[] {
    return BD_UPAZILAS[this.editForm.district?.trim()] ?? BD_ALL_UPAZILAS;
  }

  // Policy re-confirmation: the two required agreements must be re-ticked on every
  // profile save; the notifications opt-in prefills from the stored value.
  protected agreeInfoCorrect = false;
  protected agreeDataStorage = false;
  protected agreeNotifications = false;

  /** Resolved avatar image (uploaded photo or selected preview). */
  protected readonly avatarUrl = computed(() => {
    const path = this.profile()?.profileImagePath;
    return path ? this.learningApi.buildDownloadUrl(path) : '';
  });

  // ── Teacher profile ──────────────────────────────────────
  protected readonly teacherProfile = signal<any | null>(null);
  protected teacherForm = { bio: '', facebookLink: '', youtubeLink: '' };
  protected readonly teacherCourseCount = computed(() => this.teacherProfile()?.courseCount ?? this.teacherProfile()?.CourseCount ?? 0);

  /** Header avatar — student photo, teacher photo, or '' (initial fallback). */
  protected readonly headerAvatar = computed(() => {
    const path = this.isTeacher() ? this.teacherProfile()?.profileImagePath : this.profile()?.profileImagePath;
    return path ? this.learningApi.buildDownloadUrl(path) : '';
  });

  /** True when the student has filled at least one optional/bio field. */
  protected readonly hasDetails = computed(() => {
    const p = this.profile();
    if (!p) return false;
    return !!(p.phone || p.bio || p.dateOfBirth || p.gender || p.address ||
      p.institution || p.classOrGrade || p.guardianName || p.guardianPhone ||
      p.facebookLink || p.linkedInLink ||
      p.board || p.sscExamYear || p.thana || p.district || p.motherName ||
      p.guardianOccupation || p.parentEmail);
  });

  // ── Total performance (server-computed: quiz + old exam + live exam, leaderboard-consistent blend) ──
  protected readonly perf = signal<Performance | null>(null);
  protected readonly hasPerf = computed(() => {
    const p = this.perf();
    return !!p && (p.quiz.exists || p.oldExam.exists || p.liveExam.exists);
  });
  protected readonly quizWrong = computed(() => {
    const q = this.perf()?.quiz;
    return q ? Math.max(0, Math.round(q.max - q.obtained)) : 0;
  });

  // Results list: filter (all/exam/liveExam) + collapse so a heavy exam-taker
  // doesn't get an endless wall of rows on the dashboard.
  private readonly RESULTS_PREVIEW = 4;
  protected readonly resultFilter = signal<'all' | 'oldExam' | 'liveExam'>('all');
  protected readonly resultsExpanded = signal(false);

  /** All results after the active filter (newest-first order comes from the API). */
  protected readonly filteredResults = computed(() => {
    const f = this.resultFilter();
    const all = this.perf()?.results ?? [];
    return f === 'all' ? all : all.filter((r) => r.kind === f);
  });
  /** What's actually rendered — collapsed to a short preview unless expanded. */
  protected readonly visibleResults = computed(() => {
    const list = this.filteredResults();
    return this.resultsExpanded() ? list : list.slice(0, this.RESULTS_PREVIEW);
  });
  protected readonly hiddenResultCount = computed(() =>
    Math.max(0, this.filteredResults().length - this.RESULTS_PREVIEW),
  );
  /** Counts per filter for the chip labels (only render chips that have rows). */
  protected readonly examResultCount = computed(() => (this.perf()?.results ?? []).filter((r) => r.kind === 'oldExam').length);
  protected readonly liveResultCount = computed(() => (this.perf()?.results ?? []).filter((r) => r.kind === 'liveExam').length);

  protected setResultFilter(f: 'all' | 'oldExam' | 'liveExam'): void {
    this.resultFilter.set(f);
    this.resultsExpanded.set(false);   // reset collapse when switching filters
  }

  // ══════════════ Learning dashboard (Continue learning · Overall progress · Weekly goal) ══════════════
  private readonly WEEKLY_GOAL = 3;
  protected readonly weeklyGoalTarget = this.WEEKLY_GOAL;

  protected readonly videoHistory = signal<any[]>([]);
  protected readonly enrolledCourses = signal<{ id: string; title: string; lessonCount: number }[]>([]);

  /** A course counts as "completed" once every lesson in it is marked done in the watch history. */
  protected readonly completedCourseCount = computed(() => {
    const hist = this.videoHistory();
    return this.enrolledCourses().filter((c) => {
      if (!c.lessonCount) return false;
      const done = hist.filter((h) => h?.courseId === c.id && h?.isCompleted).length;
      return done >= c.lessonCount;
    }).length;
  });

  /** Time-of-day greeting, bilingual (reacts to language toggle). */
  protected readonly greeting = computed(() => {
    const h = new Date().getHours();
    const bn = this.lang.isBangla();
    if (h < 12) return bn ? 'শুভ সকাল' : 'Good morning';
    if (h < 17) return bn ? 'শুভ দুপুর' : 'Good afternoon';
    if (h < 20) return bn ? 'শুভ সন্ধ্যা' : 'Good evening';
    return bn ? 'শুভ রাত্রি' : 'Good evening';
  });

  /** Motivational lines — rotates once per day. */
  private readonly quotes = [
    { en: 'Small steps every day lead to big results.', bn: 'প্রতিদিনের ছোট ছোট চেষ্টাই বড় সাফল্য আনে।' },
    { en: 'Success is the sum of small efforts, repeated daily.', bn: 'প্রতিদিন অল্প অল্প চেষ্টাই সাফল্যের চাবিকাঠি।' },
    { en: "Don't watch the clock; keep going.", bn: 'থেমো না — এগিয়ে চলো।' },
    { en: 'Learning today, leading tomorrow.', bn: 'আজ শিখছো, কাল নেতৃত্ব দেবে।' },
    { en: 'Every expert was once a beginner.', bn: 'প্রত্যেক দক্ষ মানুষ একদিন শিক্ষানবিশ ছিল।' },
    { en: 'Push yourself — no one else will do it for you.', bn: 'নিজেকে এগিয়ে নাও — কেউ তোমার হয়ে করবে না।' },
    { en: 'Every finished lesson is a step closer to your dream.', bn: 'প্রতিটি শেষ করা লেসন স্বপ্নের এক ধাপ কাছে।' },
  ];
  protected readonly motivationalQuote = computed(() => {
    const dayIndex = Math.floor(Date.now() / 86_400_000);
    const q = this.quotes[dayIndex % this.quotes.length];
    return this.lang.isBangla() ? q.bn : q.en;
  });

  /** "Pick up where you left off" — most recent lesson per course, newest first. */
  protected readonly continueLearning = computed<ContinueItem[]>(() => {
    const courseTitle = new Map(this.enrolledCourses().map((c) => [c.id, c.title]));
    const sorted = [...this.videoHistory()].sort(
      (a, b) => new Date(b?.lastWatchedAt ?? 0).getTime() - new Date(a?.lastWatchedAt ?? 0).getTime(),
    );
    const seen = new Set<string>();
    const out: ContinueItem[] = [];
    for (const h of sorted) {
      const cid = h?.courseId;
      if (!cid || seen.has(cid)) continue;
      seen.add(cid);
      out.push({
        courseId: cid,
        lessonId: h.lessonId,
        lessonTitle: h.lessonTitle ?? 'Lesson',
        courseTitle: courseTitle.get(cid) ?? h.courseTitle ?? 'Course',
        progressPercent: Math.round(h.progressPercent ?? 0),
        watchedSeconds: h.watchedSeconds ?? 0,
        isCompleted: !!h.isCompleted,
        lastWatchedAt: h.lastWatchedAt,
      });
      if (out.length >= 4) break;
    }
    return out;
  });
  protected readonly hasContinue = computed(() => this.continueLearning().length > 0);

  // ── Composite progress (server-computed: video + quiz + exams + live exam + attendance) ──
  protected readonly courseProgress = signal<CourseProgress[]>([]);

  protected readonly totalEnrolledLessons = computed(() =>
    this.enrolledCourses().reduce((sum, c) => sum + (c.lessonCount || 0), 0),
  );
  protected readonly completedLessonCount = computed(() => {
    const enrolledIds = new Set(this.enrolledCourses().map((c) => c.id));
    return this.videoHistory().filter((h) => h?.isCompleted && enrolledIds.has(h.courseId)).length;
  });
  /** Overall = mean of per-course composite %; falls back to the old video-only math until loaded. */
  protected readonly overallProgress = computed(() => {
    const list = this.courseProgress();
    if (list.length > 0) {
      return Math.min(100, Math.round(list.reduce((s, c) => s + (c.overallPercent || 0), 0) / list.length));
    }
    const total = this.totalEnrolledLessons();
    if (total <= 0) return 0;
    return Math.min(100, Math.round((this.completedLessonCount() / total) * 100));
  });

  /** Chip icon/label for one progress component (bilingual, follows dashboard's inline pattern). */
  protected compIcon(key: string): string {
    const m: Record<string, string> = { video: '🎬', quiz: '❓', oldExam: '📝', liveExam: '🔴', attendance: '🎥' };
    return m[key] ?? '📌';
  }
  protected compLabel(key: string): string {
    const bn = this.lang.isBangla();
    const m: Record<string, string> = {
      video: bn ? 'ভিডিও' : 'Video',
      quiz: bn ? 'কুইজ' : 'Quiz',
      oldExam: bn ? 'এক্সাম' : 'Exam',
      liveExam: bn ? 'লাইভ এক্সাম' : 'Live Exam',
      attendance: bn ? 'উপস্থিতি' : 'Attendance',
    };
    return m[key] ?? key;
  }
  protected compTitle(comp: ProgressComponent): string {
    return `${this.compLabel(comp.key)}: ${comp.done}/${comp.total} — ${comp.percent}%`;
  }
  protected readonly enrolledCount = computed(() => this.enrolledCourses().length);

  /** Total new (unseen) uploads across all enrolled courses — powers the sidebar "My Courses" badge. */
  protected readonly coursesNewCount = computed(() =>
    this.courseNotif.grandTotal(this.enrolledCourses().map((c) => c.id)),
  );

  /** Weekly goal — distinct lessons touched in the last 7 days vs the target. */
  protected readonly weeklyLessonsWatched = computed(() => {
    const weekAgo = Date.now() - 7 * 86_400_000;
    const ids = new Set<string>();
    for (const h of this.videoHistory()) {
      const t = new Date(h?.lastWatchedAt ?? 0).getTime();
      if (!isNaN(t) && t >= weekAgo && h?.lessonId) ids.add(h.lessonId);
    }
    return ids.size;
  });
  protected readonly weeklyGoalPercent = computed(() =>
    Math.min(100, Math.round((this.weeklyLessonsWatched() / this.WEEKLY_GOAL) * 100)),
  );
  protected readonly weeklyGoalMet = computed(() => this.weeklyLessonsWatched() >= this.WEEKLY_GOAL);

  protected readonly wishlist = signal<WishlistItem[]>([]);
  protected readonly isLoadingWishlist = signal(false);

  /** The student's position on the global leaderboard (null until known / if unranked). */
  protected readonly globalRank = signal<number | null>(null);

  readonly lessonNotifCount = signal(0);
readonly quizNotifCount   = signal(0);
readonly certNotifCount   = signal(0);

  private loadedRole = false;

  constructor() {
    this.authService.currentUser$.pipe(takeUntilDestroyed()).subscribe((currentUser: ProfileUser | null) => {
      this.user.set(currentUser);
      this.loadForRole();
    });
    const currentUser = this.authService.getCurrentUser() as ProfileUser | null;
    if (currentUser) this.user.set(currentUser);
    this.loadForRole();

    // Restore the requested dashboard section on refresh / deep link (e.g. /profile?tab=courses),
    // or the tab requested by a dedicated route like /wishlist (route data).
    const tab = (this.route.snapshot.queryParamMap.get('tab')
      ?? this.route.snapshot.data['defaultTab']) as StudentTab | null;
    if (tab && STUDENT_TABS.includes(tab)) this.activeTab.set(tab);
  }

  /** Switch dashboard section and mirror it in the URL so refresh/back keeps the view. */
  protected setTab(tab: StudentTab): void {
    this.activeTab.set(tab);
    this.router.navigate([], { queryParams: { tab }, queryParamsHandling: 'merge', replaceUrl: true });
  }

  /** Load only the data relevant to the logged-in role (students get progress/wishlist; teachers get their instructor profile; admins need nothing). */
  private loadForRole(): void {
    if (!this.user()?.id || this.loadedRole) return;
    this.loadedRole = true;
    if (this.isStudent()) {
      void this.loadWishlist();
      void this.loadPerformance();
      void this.loadProfile();
      void this.loadLearningDashboard();
      void this.loadGlobalRank();
    } else if (this.isTeacher()) {
      void this.loadTeacherProfile();
    }
  }

  private async loadTeacherProfile(): Promise<void> {
    try {
      const res: any = await firstValueFrom(this.learningApi.getMyInstructorProfile());
      const d = res?.data ?? res?.Data ?? null;
      if (d) this.teacherProfile.set(d);
    } catch { /* ignore */ }
  }

  protected openTeacherEdit(): void {
    const t = this.teacherProfile();
    this.teacherForm = {
      bio: t?.bio ?? '',
      facebookLink: t?.facebookLink ?? '',
      youtubeLink: t?.youtubeLink ?? '',
    };
    this.selectedImageFile = null;
    this.imagePreview.set(null);
    this.saveError.set(null);
    this.saveSuccess.set(false);
    this.isEditing.set(true);
  }

  protected async saveTeacherProfile(): Promise<void> {
    this.isSaving.set(true);
    this.saveError.set(null);
    try {
      await firstValueFrom(this.learningApi.updateInstructorProfile({
        bio: this.teacherForm.bio || undefined,
        facebookLink: this.teacherForm.facebookLink || undefined,
        youtubeLink: this.teacherForm.youtubeLink || undefined,
      }));
      if (this.selectedImageFile) {
        await firstValueFrom(this.learningApi.uploadInstructorProfileImage(this.selectedImageFile));
      }
      await this.loadTeacherProfile();
      this.saveSuccess.set(true);
      this.isEditing.set(false);
    } catch (err: any) {
      this.saveError.set(err?.error?.Message ?? err?.error?.message ?? 'Could not save profile. Please try again.');
    } finally {
      this.isSaving.set(false);
    }
  }

  private emptyForm(): EditForm {
    return {
      fullName: '', phone: '', bio: '', dateOfBirth: '', gender: '', address: '',
      institution: '', classOrGrade: '', guardianName: '', guardianPhone: '',
      facebookLink: '', linkedInLink: '',
      board: '', sscExamYear: '', thana: '', district: '', motherName: '',
      guardianOccupation: '', referralSource: '', parentEmail: '',
    };
  }

  private async loadProfile(): Promise<void> {
    // Student-only endpoint; teachers/admin skip it.
    if (this.isTeacher()) return;
    try {
      const res: any = await firstValueFrom(this.learningApi.getMyStudentProfile());
      const d = res?.data ?? res?.Data ?? null;
      if (d) this.profile.set(d as StudentProfileDto);
    } catch { /* not a student or no profile yet */ }
  }

  protected openEdit(): void {
    const p = this.profile();
    this.editForm = {
      fullName: p?.fullName ?? this.userName(),
      phone: p?.phone ?? p?.mobileNumber ?? '',
      bio: p?.bio ?? '',
      dateOfBirth: p?.dateOfBirth ? p.dateOfBirth.substring(0, 10) : '',
      gender: p?.gender ?? '',
      address: p?.address ?? '',
      institution: p?.institution ?? '',
      classOrGrade: p?.classOrGrade ?? '',
      guardianName: p?.guardianName ?? '',
      guardianPhone: p?.guardianPhone ?? '',
      facebookLink: p?.facebookLink ?? '',
      linkedInLink: p?.linkedInLink ?? '',
      board: p?.board ?? '',
      sscExamYear: p?.sscExamYear ?? '',
      thana: p?.thana ?? '',
      district: p?.district ?? '',
      motherName: p?.motherName ?? '',
      guardianOccupation: p?.guardianOccupation ?? '',
      referralSource: p?.referralSource ?? '',
      parentEmail: p?.parentEmail ?? '',
    };
    // Policy must be re-confirmed on every save; notifications keeps its stored value.
    this.agreeInfoCorrect = false;
    this.agreeDataStorage = false;
    this.agreeNotifications = p?.agreedNotifications ?? false;
    this.selectedImageFile = null;
    this.imagePreview.set(null);
    this.saveError.set(null);
    this.saveSuccess.set(false);
    this.isEditing.set(true);
  }

  protected closeEdit(): void {
    this.isEditing.set(false);
  }

  protected onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      this.saveError.set('Image must be under 5MB.');
      return;
    }
    this.selectedImageFile = file;
    const reader = new FileReader();
    reader.onload = () => this.imagePreview.set(reader.result as string);
    reader.readAsDataURL(file);
  }

  protected async saveProfile(): Promise<void> {
    const name = this.editForm.fullName.trim();
    if (!name) {
      this.saveError.set('Full name is required.');
      return;
    }

    // The onboarding set (steps 02–04) is mandatory — same contract as the signup modal.
    const f = this.editForm;
    const requiredFilled = f.dateOfBirth && f.gender && f.phone.trim() && f.board && f.institution.trim()
      && f.sscExamYear && f.thana.trim() && f.district.trim() && f.guardianName.trim()
      && f.motherName.trim() && f.guardianPhone.trim() && f.guardianOccupation;
    if (!requiredFilled) {
      this.saveError.set(this.lang.t().siFieldRequired);
      return;
    }
    if (f.dateOfBirth > new Date().toISOString().slice(0, 10)) {
      this.saveError.set(this.lang.t().siFieldRequired);
      return;
    }

    // Policy re-confirmation — the two required agreements must be ticked to save.
    if (!this.agreeInfoCorrect || !this.agreeDataStorage) {
      this.saveError.set(this.lang.t().siAgreeRequired);
      return;
    }

    this.isSaving.set(true);
    this.saveError.set(null);
    try {
      // 1) profile-page-only fields (bio, address, class, links) — existing endpoint
      const payload: StudentProfilePayload = {
        fullName: name,
        phone: f.phone || null,
        bio: f.bio || null,
        dateOfBirth: f.dateOfBirth || null,
        gender: f.gender || null,
        address: f.address || null,
        institution: f.institution || null,
        classOrGrade: f.classOrGrade || null,
        guardianName: f.guardianName || null,
        guardianPhone: f.guardianPhone || null,
        facebookLink: f.facebookLink || null,
        linkedInLink: f.linkedInLink || null,
      };
      await firstValueFrom(this.learningApi.updateStudentProfile(payload));

      // 2) onboarding info + re-confirmed agreements — same endpoint the signup modal
      //    uses, so validation & the User-record sync (ParentEmail etc.) stay in one place.
      const onboarding: StudentOnboardingPayload = {
        fullName: name,
        dateOfBirth: f.dateOfBirth,
        gender: f.gender,
        mobileNumber: f.phone.trim(),
        board: f.board,
        institution: f.institution.trim(),
        sscExamYear: f.sscExamYear,
        thana: f.thana.trim(),
        district: f.district.trim(),
        guardianName: f.guardianName.trim(),
        motherName: f.motherName.trim(),
        guardianPhone: f.guardianPhone.trim(),
        parentEmail: f.parentEmail.trim() || null,
        guardianOccupation: f.guardianOccupation,
        referralSource: f.referralSource || null,
        agreedInfoCorrect: this.agreeInfoCorrect,
        agreedDataStorage: this.agreeDataStorage,
        agreedNotifications: this.agreeNotifications,
      };
      await firstValueFrom(this.learningApi.completeStudentOnboarding(onboarding));

      if (this.selectedImageFile) {
        await firstValueFrom(this.learningApi.uploadStudentProfileImage(this.selectedImageFile));
      }

      // keep navbar / header name in sync
      this.authService.updateCurrentUser({ fullName: name });

      await this.loadProfile();
      this.saveSuccess.set(true);
      this.isEditing.set(false);
    } catch (err: any) {
      this.saveError.set(err?.error?.Message ?? err?.error?.message ?? 'Could not save profile. Please try again.');
    } finally {
      this.isSaving.set(false);
    }
  }

  /** Total performance — one server call replaces the old separate quiz + exam fetches
      (and their duplicated client-side percentage math). */
  private async loadPerformance(): Promise<void> {
    try {
      this.perf.set(await firstValueFrom(this.progressService.getMyPerformance()));
    } catch { /* panel shows its empty state */ }
  }
ngOnInit(): void {
  // ✅ Login check করো আগে
  if (this.authService.isLoggedIn()) {
    this.loadNotifCounts();
  }
}

private loadNotifCounts(): void {
  this.notifsvc.getAll().subscribe({
    next: (res) => {
      const raw  = (res as any).data ?? (res as any).Data ?? [];
      const data = Array.isArray(raw) ? raw : [];
      const unread = data.filter((n: any) => !n.isRead);

      this.lessonNotifCount.set(
        unread.filter((n: any) => n.type === 'lesson').length
      );
      this.quizNotifCount.set(
        unread.filter((n: any) => n.type === 'quiz').length
      );
      this.certNotifCount.set(
        unread.filter((n: any) => n.type === 'certificate').length
      );
    },
    error: () => {
      // Error হলে 0 set করো — page crash করবে না
      this.lessonNotifCount.set(0);
      this.quizNotifCount.set(0);
      this.certNotifCount.set(0);
    }
  });
}

  /**
   * Best-effort load for the student learning dashboard (Continue learning / Overall progress / Weekly goal).
   * Pulls video watch-history + the student's enrollments and cross-references course lesson counts.
   * Everything degrades gracefully to empty state if any call fails.
   */
  private async loadLearningDashboard(): Promise<void> {
    const userId = this.authService.getCurrentUser()?.id ?? '';
    if (!userId) return;
    try {
      const [histRes, coursesRes, enrollRes] = await Promise.all([
        firstValueFrom(this.learningApi.getVideoHistory(String(userId))),
        firstValueFrom(this.learningApi.getAllCourses()),
        firstValueFrom(this.learningApi.getMyEnrollments()),
      ]);

      const hist = (histRes as any)?.Data ?? (histRes as any)?.data ?? [];
      this.videoHistory.set(Array.isArray(hist) ? hist : []);

      // getAllCourses → reliable lessonCount per course id.
      const allCoursesRaw = (coursesRes as any)?.data ?? (coursesRes as any)?.Data ?? [];
      const allCourses = Array.isArray(allCoursesRaw) ? allCoursesRaw : [];
      const lessonCountById = new Map<string, number>(allCourses.map((c: any) => [c.id, c.lessonCount ?? 0]));

      // /enrollment/my-enrollments returns the enrolled COURSE objects (id, title, …), not enrollment rows.
      const enrolledRaw = (enrollRes as any)?.Data ?? (enrollRes as any)?.data ?? enrollRes ?? [];
      let enrolled = (Array.isArray(enrolledRaw) ? enrolledRaw : [])
        .map((c: any) => {
          const id = c?.id ?? c?.Id;
          return {
            id,
            title: c?.title ?? c?.Title ?? 'Course',
            lessonCount: lessonCountById.get(id) ?? c?.lessonCount ?? c?.LessonCount ?? 0,
          };
        })
        .filter((c: { id?: string }) => !!c.id);

      // Fallback: if the enrollments call gave nothing usable, derive courses from watch history.
      if (enrolled.length === 0) {
        const seen = new Set<string>();
        for (const h of this.videoHistory()) {
          const id = h?.courseId;
          if (!id || seen.has(id)) continue;
          seen.add(id);
          enrolled.push({ id, title: h?.courseTitle ?? 'Course', lessonCount: lessonCountById.get(id) ?? 0 });
        }
      }
      this.enrolledCourses.set(enrolled);
      // Fan out to compute per-course "new content" badges (also feeds the course cards & hub).
      void this.courseNotif.refreshCourses(enrolled.map((c: { id: string }) => c.id));
    } catch {
      /* dashboard is best-effort — leave empty state */
    }

    // Composite progress (server single-source-of-truth) — separate try so a failure
    // here still leaves the video-only fallback math working.
    try {
      this.courseProgress.set(await firstValueFrom(this.progressService.getMyProgress()));
    } catch {
      /* keep fallback */
    }
  }

  /** Find the student's rank on the global leaderboard (best-effort; badge just hides if absent). */
  private async loadGlobalRank(): Promise<void> {
    const userId = this.authService.getCurrentUser()?.id ?? '';
    if (!userId) return;
    try {
      const res = await firstValueFrom(this.learningApi.getLeaderboard());
      const data = (res as any)?.data ?? (res as any)?.Data ?? [];
      const list = Array.isArray(data) ? data : [];
      const idx = list.findIndex((e: any) => String(e?.userId ?? e?.UserId ?? '') === String(userId));
      this.globalRank.set(idx >= 0 ? idx + 1 : null);
    } catch {
      this.globalRank.set(null);
    }
  }

  async loadWishlist() {
    const userId = this.authService.getCurrentUser()?.id ?? '';
    if (!userId) {
      this.wishlist.set([]);
      return;
    }

    this.isLoadingWishlist.set(true);
    try {
      const res = await firstValueFrom(this.learningApi.getWishlist(userId));
      const response = res as any;
      const data = response?.data ?? response?.Data ?? response ?? [];

      const wishlistItems = Array.isArray(data) ? (data as WishlistItem[]) : [];
      const enrichedItems = await Promise.all(
        wishlistItems.map(async (item) => {
          try {
            const enrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(item.courseId));
            return { ...item, isEnrolled: Boolean(enrolled) };
          } catch {
            return { ...item, isEnrolled: false };
          }
        }),
      );

      this.wishlist.set(enrichedItems);
    } catch (error) {
      console.error('Error loading wishlist:', error);
      this.wishlist.set([]);
    } finally {
      this.isLoadingWishlist.set(false);
    }
  }

getImageUrl(path: string | null): string {
  return this.learningApi.buildDownloadUrl(path ?? '');
}

formatPrice(price: number): string {
  return price === 0 ? 'Free' : `৳${price.toLocaleString()}`;
}

  trackByCourseId(index: number, item: WishlistItem): string | number {
    return item.courseId;
  }

  protected goToHome(): void { this.router.navigateByUrl('/homepage'); }
  protected logout(): void { this.authService.logout(); this.router.navigateByUrl('/login'); }
}
