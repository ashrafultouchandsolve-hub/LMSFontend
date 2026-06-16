import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../Service/auth.service';
import {
  CourseDto,
  LearningApiService,
  LessonDto,
  SaveCoursePayload,
  SaveLessonPayload,
} from '../../Service/learning-api.service';
import { FreeLiveClass, LiveClass, LiveClassService } from '../../Service/live-class-service';
import { ExamService, ExamView, ExamSubmissionView } from '../../Service/exam.service';
import { PracticeService, PracticeMaterial } from '../../Service/practice.service';
import { CommonModule,DatePipe } from '@angular/common';
import { TeacherProfileComponent } from '../teacher-profile/teacher-profile';
import { environment } from '../../../environments/environments';
import { Navbar } from '../../shared/navbar/navbar';
import { LanguageService } from '../../Service/language.service';
import { Category, CategoryService } from '../../Service/category.service';
import { AdminService, AdminTeacher } from '../../Service/admin.service';

type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';
type VideoType = 'YouTube' | 'Vimeo' | 'Direct URL';

type Lesson = {
  id: string;
  courseId: string;
  title: string;
  description: string;
  videoType: VideoType;
  videoUrl: string;
  durationMinutes: number;
  orderIndex: number;
  isPreview: boolean;
  resourceUrl: string;
  thumbnailUrl: string;
};

type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  instructorName: string;
  level: CourseLevel;
  price: number;
  durationMinutes: number;
  thumbnailUrl: string;
  published: boolean;
  students: number;
  averageRating: number;
  totalRatings: number;
  lessonCount: number;
  lessons: Lesson[];
};

@Component({
  selector: 'app-teacher',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule, TeacherProfileComponent, DatePipe, Navbar],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Teacher implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly learningApi = inject(LearningApiService);
  private readonly liveClassService = inject(LiveClassService);
  private readonly categoryService = inject(CategoryService);
  private readonly adminService = inject(AdminService);
  private readonly route = inject(ActivatedRoute);
  protected readonly lang = inject(LanguageService);

  protected readonly searchTerm = signal('');
  protected readonly selectedCourseId = signal<string | null>(null);
  protected readonly showCourseModal = signal(false);
  protected readonly showLessonModal = signal(false);
  protected readonly showLiveModal = signal(false);
  protected readonly editingCourseId = signal<string | null>(null);
  protected readonly editingLessonId = signal<string | null>(null);
  protected readonly isLoadingCourses = signal(false);
  protected readonly isLoadingLessons = signal(false);
  protected readonly isLoadingLiveClasses = signal(false);
  protected readonly isSavingCourse = signal(false);
  protected readonly isSavingLesson = signal(false);
  protected readonly notice = signal('');
  protected readonly noticeType = signal<'success' | 'error'>('success');

  protected readonly selectedCourseThumbnailFile = signal<File | null>(null);
  protected readonly selectedCourseThumbnailPreview = signal('');
  protected readonly selectedLessonThumbnailFile = signal<File | null>(null);
  protected readonly selectedLessonThumbnailPreview = signal('');
  protected readonly selectedLessonVideoFile = signal<File | null>(null);
  protected readonly videoUploadProgress = signal(0);
  protected readonly isUploadingVideo = signal(false);

  protected readonly courses = signal<Course[]>([]);
protected readonly liveClasses    = signal<LiveClass[]>([]);
protected readonly isCreatingLive = signal(false);
protected liveTitle       = '';
protected liveDesc        = '';
protected liveScheduledAt = '';
  protected readonly currentUser = toSignal(this.authService.currentUser$, {
    initialValue: this.authService.getCurrentUser(),
  });

  protected readonly isLoggedIn = computed(() => !!this.currentUser());
  protected readonly userName = computed(() => this.currentUser()?.fullName || 'Guest');
  protected readonly isTeacher = computed(() => this.currentUser()?.role === 1);
  protected readonly userInitial = computed(() => this.userName().charAt(0).toUpperCase());

  // ── Role modes: Admin authors courses; Teacher only runs live classes ──
  protected readonly isAdminMode = computed(() => this.currentUser()?.role === 2);
  protected readonly isLiveTeacherMode = computed(() => this.currentUser()?.role === 1);

  // Category + teacher-appointment data (admin authoring)
  protected readonly categories = signal<Category[]>([]);
  protected readonly approvedTeachers = signal<AdminTeacher[]>([]);
  // Multiple teachers can be assigned to one course (userIds)
  protected readonly selectedTeacherIds = signal<string[]>([]);
  protected readonly teacherDropdownOpen = signal(false);

  /** The approved-teacher objects that are currently selected (for chips). */
  protected readonly selectedTeacherObjs = computed(() => {
    const ids = this.selectedTeacherIds();
    return this.approvedTeachers().filter((t) => ids.includes(t.id));
  });

  protected toggleTeacher(userId: string): void {
    this.selectedTeacherIds.update((ids) =>
      ids.includes(userId) ? ids.filter((x) => x !== userId) : [...ids, userId]
    );
  }
  protected isTeacherSelected(userId: string): boolean {
    return this.selectedTeacherIds().includes(userId);
  }
  protected readonly categoryFilter = signal<string>('');



  protected readonly showStudentsPanel = signal(false);
protected readonly enrolledStudents = signal<any[]>([]);
protected readonly issuingCertificate = signal<string | null>(null); // userId
protected readonly issuedCertificates = signal<string[]>([]); // userId list

  protected readonly filteredCourses = computed(() => {
    const keyword = this.searchTerm().trim().toLowerCase();
    const cat = this.categoryFilter().trim().toLowerCase();
    let list = this.courses();

    if (cat) {
      list = list.filter((course) => course.category.toLowerCase() === cat);
    }
    if (!keyword) {
      return list;
    }

    return list.filter((course) => {
      return (
        course.title.toLowerCase().includes(keyword) ||
        course.category.toLowerCase().includes(keyword) ||
        course.level.toLowerCase().includes(keyword)
      );
    });
  });

  protected readonly selectedCourse = computed(() => {
    const selectedId = this.selectedCourseId();
    if (selectedId === null) {
      return null;
    }

    return this.courses().find((course) => course.id === selectedId) ?? null;
  });

  protected readonly sortedLessons = computed(() => {
    const selected = this.selectedCourse();
    if (!selected) {
      return [];
    }

    return [...selected.lessons].sort((a, b) => a.orderIndex - b.orderIndex);
  });

  protected readonly courseForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    category: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required, Validators.minLength(8)]],
    instructorName: [''],
    level: this.fb.control<CourseLevel>('Beginner'),
    price: [0, [Validators.min(0)]],
    durationMinutes: [0, [Validators.min(0)]],
    thumbnailUrl: [''],
    published: [false],
    teacherUserId: [''],
  });

  protected readonly lessonForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    videoType: this.fb.control<VideoType>('YouTube'),
    videoUrl: [''],
    orderIndex: [1, [Validators.min(1)]],
    durationMinutes: [0, [Validators.min(0)]],
    resourceUrl: [''],
    isPreview: [false],
  });

  protected readonly isCourseEditorOpen = computed(() => this.showCourseModal());
  protected readonly isLessonEditorOpen = computed(() => this.showLessonModal());

  protected readonly courseModalTitle = computed(() =>
    this.editingCourseId() === null ? this.lang.t().tcNewCourse : this.lang.t().tcEditCourse,
  );

  protected readonly lessonModalTitle = computed(() =>
    this.editingLessonId() === null ? this.lang.t().tcAddLesson : this.lang.t().tcEditLesson,
  );

  protected readonly currentCourseName = computed(() => this.selectedCourse()?.title ?? 'Course');

  protected readonly sidebarItems = computed<{ key: 'dashboard' | 'courses' | 'users' | 'enrollments' | 'teacher-profile' | 'live'; label: string; icon: string }[]>(() => {
    // Admin (course manager): only the course list. Teacher: live + courses + profile.
    if (this.isAdminMode()) {
      return [{ key: 'courses', label: this.lang.t().tcSideCourses, icon: '📚' }];
    }
    return [
      { key: 'live', label: this.lang.t().tcSideLive, icon: '🔴' },
      { key: 'courses', label: this.lang.t().tcSideCourses, icon: '📚' },
      { key: 'teacher-profile', label: this.lang.t().tcSideProfile, icon: '👤' },
    ];
  });

  protected readonly activeSidebarKey = signal<'dashboard' | 'courses' | 'users' | 'enrollments' | 'teacher-profile' | 'live'>('courses');

  ngOnInit(): void {
    if (this.isAdminMode()) {
      // Admin authoring: load category from the card the admin came from, then all courses.
      const cat = this.route.snapshot.queryParamMap.get('category') ?? '';
      this.categoryFilter.set(cat);
      void this.loadCategoriesAndTeachers();
      void this.loadAllCoursesAdmin();
    } else {
      void this.loadTeacherCourses();
    }
  }

  private async loadCategoriesAndTeachers(): Promise<void> {
    try {
      const catRes: any = await firstValueFrom(this.categoryService.getAll());
      this.categories.set(catRes?.data ?? catRes?.Data ?? []);
    } catch { this.categories.set([]); }
    try {
      const teachers = await firstValueFrom(this.adminService.getTeachers());
      // only approved/active teachers can be appointed
      this.approvedTeachers.set((teachers ?? []).filter((t) => (t.status ?? '').toLowerCase() !== 'pending' && (t.status ?? '').toLowerCase() !== 'blocked'));
    } catch { this.approvedTeachers.set([]); }
  }

  protected updateSearchTerm(value: string): void {
    this.searchTerm.set(value);
  }

  protected selectSidebar(key: 'dashboard' | 'courses' | 'users' | 'enrollments' | 'teacher-profile' | 'live'): void {
    this.activeSidebarKey.set(key);

    if (key === 'courses') {
      this.closeLessonsView();
    }

    if (key === 'live') {
      void this.loadMyFreeClasses();
    }
  }

  // ── Free public live classes (anyone can join without login) ─────
  protected freeLiveTitle = '';
  protected freeLiveDesc = '';
  protected readonly myFreeClasses = signal<FreeLiveClass[]>([]);
  protected readonly isStartingFree = signal(false);
  protected readonly isLoadingFree = signal(false);
  protected readonly copiedFreeId = signal<string | null>(null);

  private async loadMyFreeClasses(): Promise<void> {
    this.isLoadingFree.set(true);
    try {
      const res: any = await firstValueFrom(this.liveClassService.getMyFree());
      this.myFreeClasses.set(res?.data ?? res?.Data ?? []);
    } catch {
      this.myFreeClasses.set([]);
    } finally {
      this.isLoadingFree.set(false);
    }
  }

  protected async startFreeLive(): Promise<void> {
    const title = this.freeLiveTitle.trim();
    if (!title) {
      this.setNotice('Live class title required.', 'error');
      return;
    }

    this.isStartingFree.set(true);
    try {
      const res: any = await firstValueFrom(
        this.liveClassService.startFree({ title, description: this.freeLiveDesc.trim() }),
      );
      const newId = res?.data?.id ?? res?.Data?.Id ?? null;
      this.freeLiveTitle = '';
      this.freeLiveDesc = '';
      await this.loadMyFreeClasses();
      this.setNotice('Free live class is now LIVE. Share the link or open the room.', 'success');
      if (newId) this.router.navigateByUrl(`/free-live/${newId}`);
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'Free live class start করা যায়নি।'), 'error');
    } finally {
      this.isStartingFree.set(false);
    }
  }

  protected async endFreeLive(id: string): Promise<void> {
    if (!window.confirm('End this free live class?')) return;
    try {
      await firstValueFrom(this.liveClassService.endFree(id));
      await this.loadMyFreeClasses();
      this.setNotice('Free live class ended.', 'success');
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'Free live class end করা যায়নি।'), 'error');
    }
  }

  protected openFreeRoom(id: string): void {
    this.router.navigateByUrl(`/free-live/${id}`);
  }

  protected buildFreeLink(id: string): string {
    return `${window.location.origin}/free-live/${id}`;
  }

  protected async copyFreeLink(id: string): Promise<void> {
    const link = this.buildFreeLink(id);
    try {
      await navigator.clipboard.writeText(link);
      this.copiedFreeId.set(id);
      setTimeout(() => this.copiedFreeId.set(null), 2000);
    } catch {
      this.setNotice(link, 'success');
    }
  }

  protected openNewCourseModal(): void {
    this.clearCourseUploadState();
    this.editingCourseId.set(null);
    this.selectedTeacherIds.set([]);
    this.courseForm.reset({
      title: '',
      category: this.categoryFilter() || '',
      description: '',
      instructorName: '',
      level: 'Beginner',
      price: 0,
      durationMinutes: 0,
      thumbnailUrl: '',
      published: false,
      teacherUserId: '',
    });
    this.showCourseModal.set(true);
  }

  protected openEditCourseModal(courseId: string): void {
    const course = this.courses().find((item) => item.id === courseId);
    if (!course) {
      return;
    }

    this.clearCourseUploadState();
    this.editingCourseId.set(course.id);
    this.selectedTeacherIds.set([]);
    this.courseForm.reset({
      title: course.title,
      category: course.category,
      description: course.description,
      instructorName: course.instructorName,
      level: course.level,
      price: course.price,
      durationMinutes: course.durationMinutes,
      thumbnailUrl: course.thumbnailUrl,
      published: course.published,
      teacherUserId: '',
    });
    this.showCourseModal.set(true);
    // Preselect the course's currently-assigned teachers (by their userId)
    firstValueFrom(this.learningApi.getCourseTeachers(course.id))
      .then((res: any) => {
        const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res?.Data) ? res.Data : [];
        const ids = arr.map((t: any) => t.userId ?? t.UserId).filter((x: any) => !!x);
        this.selectedTeacherIds.set(ids);
      })
      .catch(() => {});
  }

  protected closeCourseModal(): void {
    this.showCourseModal.set(false);
    this.teacherDropdownOpen.set(false);
    this.courseForm.markAsPristine();
    this.clearCourseUploadState();
  }

  protected async saveCourse(): Promise<void> {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }

    if (!this.authService.isLoggedIn()) {
      this.setNotice('আপনি লগইন করেন নি। প্রথমে লগইন করুন।', 'error');
      this.router.navigateByUrl('/login');
      return;
    }

    const editingIdCheck = this.editingCourseId();
    const teacherIds = this.selectedTeacherIds();
    // At least one teacher must be appointed.
    if (teacherIds.length === 0) {
      this.setNotice('Please appoint at least one teacher for this course.', 'error');
      return;
    }

    this.isSavingCourse.set(true);

    try {
      const formValue = this.courseForm.getRawValue();
      const appointedNames = this.approvedTeachers()
        .filter((t) => teacherIds.includes(t.id))
        .map((t) => t.fullName);
      const payload: SaveCoursePayload = {
        title: formValue.title,
        description: formValue.description,
        category: formValue.category,
        instructorName: appointedNames.join(', ') || formValue.instructorName || '',
        level: formValue.level,
        price: Number(formValue.price || 0),
        durationMinutes: Number(formValue.durationMinutes || 0),
        isPublished: formValue.published,
        teacherUserId: teacherIds[0],
        teacherUserIds: teacherIds,
      };

      const editingId = this.editingCourseId();
      let targetCourseId = editingId;

      if (editingId) {
        await firstValueFrom(this.learningApi.updateCourse(editingId, payload));
      } else {
        const createResult = await firstValueFrom(this.learningApi.createCourse(payload));
        targetCourseId = createResult.data;
      }

      const thumbnailFile = this.selectedCourseThumbnailFile();
      if (targetCourseId && thumbnailFile) {
        await firstValueFrom(this.learningApi.uploadCourseThumbnail(targetCourseId, thumbnailFile));
      }

      await this.reloadCourses();
      this.setNotice('কোর্স সফলভাবে সংরক্ষণ হয়েছে।', 'success');
      this.closeCourseModal();
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'কোর্স সংরক্ষণ করা যায়নি।'), 'error');
    } finally {
      this.isSavingCourse.set(false);
    }
  }

  protected async deleteCourse(courseId: string): Promise<void> {
    if (!this.authService.isLoggedIn()) {
      this.setNotice('আপনি লগইন করেন নি। প্রথমে লগইন করুন।', 'error');
      this.router.navigateByUrl('/login');
      return;
    }

    const shouldDelete = window.confirm('আপনি কি নিশ্চিতভাবে এই কোর্সটি ডিলিট করতে চান?');
    if (!shouldDelete) {
      return;
    }

    try {
      await firstValueFrom(this.learningApi.deleteCourse(courseId));
      await this.reloadCourses();
      if (this.selectedCourseId() === courseId) {
        this.selectedCourseId.set(null);
      }
      this.setNotice('কোর্স সফলভাবে মুছে ফেলা হয়েছে।', 'success');
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'কোর্স ডিলিট করা যায়নি।'), 'error');
    }
  }

  protected async openLessons(courseId: string): Promise<void> {
    this.selectedCourseId.set(courseId);
    await this.loadLessons(courseId);
    await this.loadLiveClasses(courseId);
    await this.loadExams(courseId);
    await this.loadPractice(courseId);
  }

  // ── Exams (admin authors; admin + appointed teacher grade) ───────
  private readonly examService = inject(ExamService);
  protected readonly exams = signal<ExamView[]>([]);
  protected readonly examSlots = computed<(ExamView | null)[]>(() => {
    const list = this.exams();
    return [1, 2, 3].map((slot) => list.find((e) => e.slot === slot) ?? null);
  });

  protected readonly showExamModal = signal(false);
  protected examSlotEditing = 1;
  protected examTitle = '';
  protected examInstruction = '';
  protected examDurationDays = 1;   // exam window length in days (starts when the question is uploaded)
  protected examTotalMarks = 0;
  protected readonly isSavingExam = signal(false);
  protected readonly uploadingQuestionSlot = signal<number | null>(null);

  protected readonly showExamSubsModal = signal(false);
  protected readonly examSubs = signal<ExamSubmissionView[]>([]);
  protected readonly examSubsTotalMarks = signal(0);
  private examSubsExamId: string | null = null;
  protected gradeInputs: Record<string, { marks: string; feedback: string }> = {};

  private mapExam = (e: any): ExamView => ({
    id: e.id ?? e.Id,
    slot: e.slot ?? e.Slot,
    title: e.title ?? e.Title ?? '',
    instruction: e.instruction ?? e.Instruction ?? '',
    startDate: e.startDate ?? e.StartDate,
    deadline: e.deadline ?? e.Deadline,
    durationMinutes: e.durationMinutes ?? e.DurationMinutes ?? 0,
    totalMarks: e.totalMarks ?? e.TotalMarks ?? 0,
    isPublished: e.isPublished ?? e.IsPublished ?? false,
    hasQuestion: e.hasQuestion ?? e.HasQuestion ?? false,
    isStarted: e.isStarted ?? e.IsStarted ?? false,
    isClosed: e.isClosed ?? e.IsClosed ?? false,
    submitted: false, graded: false,
  });

  private async loadExams(courseId: string): Promise<void> {
    try {
      const r: any = await firstValueFrom(this.examService.getCourseExams(courseId));
      const a = Array.isArray(r?.data) ? r.data : Array.isArray(r?.Data) ? r.Data : [];
      this.exams.set(a.map(this.mapExam));
    } catch {
      this.exams.set([]);
    }
  }

  private toLocalInput(iso: string): string {
    if (!iso) return '';
    const d = new Date(iso);
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  protected openExamModal(slot: number): void {
    const ex = this.examSlots()[slot - 1];
    this.examSlotEditing = slot;
    this.examTitle = ex?.title ?? '';
    this.examInstruction = ex?.instruction ?? '';
    this.examDurationDays = ex && ex.durationMinutes > 0 ? Math.max(1, Math.round(ex.durationMinutes / 1440)) : 1;
    this.examTotalMarks = ex?.totalMarks ?? 0;
    this.showExamModal.set(true);
  }

  protected closeExamModal(): void {
    this.showExamModal.set(false);
  }

  protected async saveExam(): Promise<void> {
    const course = this.selectedCourse();
    if (!course) return;
    if (!this.examTitle.trim() || !this.examDurationDays || this.examDurationDays < 1) {
      this.setNotice('Exam title and a duration (days) are required.', 'error');
      return;
    }
    this.isSavingExam.set(true);
    try {
      await firstValueFrom(this.examService.createExam({
        courseId: course.id,
        slot: this.examSlotEditing,
        title: this.examTitle.trim(),
        instruction: this.examInstruction.trim(),
        durationMinutes: Number(this.examDurationDays) * 1440,
        totalMarks: Number(this.examTotalMarks || 0),
      }));
      await this.loadExams(course.id);
      this.setNotice('Exam saved.', 'success');
      this.closeExamModal();
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'Exam সেভ করা যায়নি।'), 'error');
    } finally {
      this.isSavingExam.set(false);
    }
  }

  protected async onExamQuestionSelected(slot: number, event: Event): Promise<void> {
    const ex = this.examSlots()[slot - 1];
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (!ex) {
      this.setNotice('Save the exam first, then upload its question.', 'error');
      input.value = '';
      return;
    }
    this.uploadingQuestionSlot.set(slot);
    try {
      await firstValueFrom(this.examService.uploadQuestion(ex.id, file));
      const c = this.selectedCourse();
      if (c) await this.loadExams(c.id);
      this.setNotice('Question uploaded — exam is now live.', 'success');
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'Question আপলোড করা যায়নি।'), 'error');
    } finally {
      this.uploadingQuestionSlot.set(null);
      input.value = '';
    }
  }

  protected async openExamSubs(examId: string): Promise<void> {
    this.examSubsExamId = examId;
    this.showExamSubsModal.set(true);
    try {
      const r: any = await firstValueFrom(this.examService.getSubmissions(examId));
      const a = Array.isArray(r?.data) ? r.data : Array.isArray(r?.Data) ? r.Data : [];
      this.examSubsTotalMarks.set(r?.totalMarks ?? r?.TotalMarks ?? 0);
      const subs: ExamSubmissionView[] = a.map((s: any) => ({
        submissionId: s.submissionId ?? s.SubmissionId,
        userId: s.userId ?? s.UserId,
        studentName: s.studentName ?? s.StudentName ?? 'Student',
        studentEmail: s.studentEmail ?? s.StudentEmail ?? '',
        submittedAt: s.submittedAt ?? s.SubmittedAt,
        marks: s.marks ?? s.Marks ?? null,
        feedback: s.feedback ?? s.Feedback ?? null,
        graded: s.graded ?? s.Graded ?? false,
        gradedByAdmin: s.gradedByAdmin ?? s.GradedByAdmin ?? false,
      }));
      this.examSubs.set(subs);
      this.gradeInputs = {};
      subs.forEach((s) => this.gradeInputs[s.submissionId] = {
        marks: s.marks != null ? String(s.marks) : '',
        feedback: s.feedback ?? '',
      });
    } catch {
      this.examSubs.set([]);
    }
  }

  protected closeExamSubs(): void {
    this.showExamSubsModal.set(false);
  }

  protected downloadSubmission(sub: ExamSubmissionView): void {
    this.examService.submissionFile(sub.submissionId).subscribe({
      next: (blob) => window.open(URL.createObjectURL(blob), '_blank'),
      error: () => {},
    });
  }

  /** Admin / teacher: preview the uploaded question PDF. */
  protected viewExamQuestion(examId: string): void {
    this.examService.viewQuestion(examId).subscribe({
      next: (blob) => window.open(URL.createObjectURL(blob), '_blank'),
      error: () => {},
    });
  }

  // ── Practice materials (admin only) ──────────────────────────────
  private readonly practiceService = inject(PracticeService);
  protected readonly practiceMaterials = signal<PracticeMaterial[]>([]);
  protected readonly isSavingPractice = signal(false);
  protected pmEditingId: string | null = null;
  protected pmTitle = '';
  protected pmDesc = '';
  private pmFile: File | null = null;
  protected pmFileName = '';

  private async loadPractice(courseId: string): Promise<void> {
    try {
      const res: any = await firstValueFrom(this.practiceService.getCourseMaterials(courseId));
      const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res?.Data) ? res.Data : [];
      this.practiceMaterials.set(arr.map((m: any) => ({
        id: m.id ?? m.Id,
        title: m.title ?? m.Title ?? '',
        description: m.description ?? m.Description ?? '',
        hasFile: m.hasFile ?? m.HasFile ?? false,
        fileType: (m.fileType ?? m.FileType ?? 'PDF').toUpperCase(),
        createdAt: m.createdAt ?? m.CreatedAt,
      })));
    } catch {
      this.practiceMaterials.set([]);
    }
  }

  protected onPracticeFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.pmFile = file;
    this.pmFileName = file?.name ?? '';
  }

  protected resetPracticeForm(): void {
    this.pmEditingId = null;
    this.pmTitle = '';
    this.pmDesc = '';
    this.pmFile = null;
    this.pmFileName = '';
  }

  protected editPractice(m: PracticeMaterial): void {
    this.pmEditingId = m.id;
    this.pmTitle = m.title;
    this.pmDesc = m.description;
    this.pmFile = null;
    this.pmFileName = '';
  }

  protected async savePractice(): Promise<void> {
    const course = this.selectedCourse();
    if (!course) return;
    if (!this.pmTitle.trim()) {
      this.setNotice('A field name is required.', 'error');
      return;
    }
    if (!this.pmEditingId && !this.pmFile) {
      this.setNotice('Please choose a PDF or DOC file.', 'error');
      return;
    }
    this.isSavingPractice.set(true);
    try {
      if (this.pmEditingId) {
        await firstValueFrom(this.practiceService.update(this.pmEditingId, this.pmTitle.trim(), this.pmDesc.trim(), this.pmFile));
      } else {
        await firstValueFrom(this.practiceService.create(course.id, this.pmTitle.trim(), this.pmDesc.trim(), this.pmFile!));
      }
      await this.loadPractice(course.id);
      this.resetPracticeForm();
      this.setNotice('Practice material saved.', 'success');
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'Practice material সেভ করা যায়নি।'), 'error');
    } finally {
      this.isSavingPractice.set(false);
    }
  }

  protected async deletePractice(id: string): Promise<void> {
    if (!window.confirm('Delete this practice material?')) return;
    try {
      await firstValueFrom(this.practiceService.delete(id));
      const c = this.selectedCourse();
      if (c) await this.loadPractice(c.id);
      this.setNotice('Practice material deleted.', 'success');
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'Delete করা যায়নি।'), 'error');
    }
  }

  protected viewPractice(id: string): void {
    this.practiceService.viewFile(id).subscribe({
      next: (blob) => window.open(URL.createObjectURL(blob), '_blank'),
      error: () => {},
    });
  }

  protected async gradeSubmission(sub: ExamSubmissionView): Promise<void> {
    const g = this.gradeInputs[sub.submissionId];
    if (!g) return;
    try {
      await firstValueFrom(this.examService.grade(sub.submissionId, Number(g.marks || 0), g.feedback || ''));
      if (this.examSubsExamId) await this.openExamSubs(this.examSubsExamId);
      this.setNotice('Marks saved.', 'success');
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'Marks সেভ করা যায়নি।'), 'error');
    }
  }

  protected closeLessonsView(): void {
    this.selectedCourseId.set(null);
    this.liveClasses.set([]);
    this.closeLiveModal();
  }

  protected openNewLessonModal(): void {
    if (this.selectedCourse() === null) {
      return;
    }

    this.clearLessonUploadState();
    this.editingLessonId.set(null);
    this.lessonForm.reset({
      title: '',
      description: '',
      videoType: 'YouTube',
      videoUrl: '',
      orderIndex: this.sortedLessons().length + 1,
      durationMinutes: 0,
      resourceUrl: '',
      isPreview: false,
    });
    this.showLessonModal.set(true);
  }

  protected openEditLessonModal(lessonId: string): void {
    const lesson = this.sortedLessons().find((item) => item.id === lessonId);
    if (!lesson) {
      return;
    }

    this.clearLessonUploadState();
    this.editingLessonId.set(lesson.id);
    this.lessonForm.reset({
      title: lesson.title,
      description: lesson.description,
      videoType: lesson.videoType,
      videoUrl: lesson.videoUrl,
      orderIndex: lesson.orderIndex,
      durationMinutes: lesson.durationMinutes,
      resourceUrl: lesson.resourceUrl,
      isPreview: lesson.isPreview,
    });
    this.showLessonModal.set(true);
  }

  protected closeLessonModal(): void {
    this.showLessonModal.set(false);
    this.lessonForm.markAsPristine();
    this.clearLessonUploadState();
  }

  protected openLiveModal(): void {
    if (!this.selectedCourse()) {
      return;
    }

    this.liveTitle = '';
    this.liveDesc = '';
    this.liveScheduledAt = '';
    this.showLiveModal.set(true);
  }

  protected closeLiveModal(): void {
    this.showLiveModal.set(false);
    this.liveTitle = '';
    this.liveDesc = '';
    this.liveScheduledAt = '';
  }

  protected async createLiveClass(): Promise<void> {
    const selected = this.selectedCourse();
    if (!selected) {
      return;
    }

    if (!this.liveTitle.trim() || !this.liveScheduledAt.trim()) {
      this.setNotice('Live class title and schedule required.', 'error');
      return;
    }

    const scheduledDate = new Date(this.liveScheduledAt);
    if (Number.isNaN(scheduledDate.getTime())) {
      this.setNotice('Valid schedule date/time select করুন।', 'error');
      return;
    }

    try {
      await firstValueFrom(this.liveClassService.create({
        courseId: selected.id,
        title: this.liveTitle.trim(),
        description: this.liveDesc.trim(),
        scheduledAt: scheduledDate.toISOString(),
      }));

      await this.loadLiveClasses(selected.id);
      this.setNotice('Live class scheduled successfully.', 'success');
      this.closeLiveModal();
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'Live class schedule করা যায়নি।'), 'error');
    }
  }

  protected async startLiveClass(id: string): Promise<void> {
    const selected = this.selectedCourse();
    if (!selected) {
      return;
    }

    try {
      await firstValueFrom(this.liveClassService.start(id));
      await this.loadLiveClasses(selected.id);
      this.setNotice('Live class started.', 'success');
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'Live class start করা যায়নি।'), 'error');
    }
  }

  protected async endLiveClass(id: string): Promise<void> {
    const selected = this.selectedCourse();
    if (!selected) {
      return;
    }

    try {
      await firstValueFrom(this.liveClassService.end(id));
      await this.loadLiveClasses(selected.id);
      this.setNotice('Live class ended.', 'success');
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'Live class end করা যায়নি।'), 'error');
    }
  }

  protected async saveLesson(): Promise<void> {
    const selected = this.selectedCourse();
    if (!selected || this.lessonForm.invalid) {
      this.lessonForm.markAllAsTouched();
      return;
    }

    if (!this.authService.isLoggedIn()) {
      this.setNotice('আপনি লগইন করেন নি। প্রথমে লগইন করুন।', 'error');
      this.router.navigateByUrl('/login');
      return;
    }

    this.isSavingLesson.set(true);

    try {
      const formValue = this.lessonForm.getRawValue();
      const payload: SaveLessonPayload = {
        courseId: selected.id,
        title: formValue.title,
        description: formValue.description,
        orderIndex: Number(formValue.orderIndex || 1),
        videoType: formValue.videoType,
        videoUrl: formValue.videoUrl,
        durationMinutes: Number(formValue.durationMinutes || 0),
        resourceUrl: formValue.resourceUrl,
        isFreePreview: formValue.isPreview,
      };

      const editingId = this.editingLessonId();
      let targetLessonId = editingId;

      if (editingId) {
        await firstValueFrom(this.learningApi.updateLesson(editingId, payload));
      } else {
        const createResult = await firstValueFrom(this.learningApi.createLesson(payload));
        targetLessonId = createResult.data;
      }

      const lessonThumbnailFile = this.selectedLessonThumbnailFile();
      if (targetLessonId && lessonThumbnailFile) {
        await firstValueFrom(this.learningApi.uploadLessonThumbnail(targetLessonId, lessonThumbnailFile));
      }

      const lessonVideoFile = this.selectedLessonVideoFile();
      if (targetLessonId && lessonVideoFile) {
        this.isUploadingVideo.set(true);
        this.videoUploadProgress.set(0);
        try {
          await new Promise<void>((resolve, reject) => {
            this.learningApi.uploadLessonVideoWithProgress(targetLessonId, lessonVideoFile).subscribe({
              next: (event: HttpEvent<any>) => {
                if (event.type === 1) {
                  // HttpProgressEvent has type 1
                  const progressEvent = event as any;
                  if (progressEvent.total) {
                    const progress = Math.round((100 * progressEvent.loaded) / progressEvent.total);
                    this.videoUploadProgress.set(progress);
                  }
                }
              },
              error: (err) => {
                this.isUploadingVideo.set(false);
                reject(err);
              },
              complete: () => {
                this.isUploadingVideo.set(false);
                this.videoUploadProgress.set(100);
                resolve();
              },
            });
          });
        } catch (uploadError) {
          throw uploadError;
        }
      } else if (targetLessonId && formValue.videoUrl.trim()) {
        await firstValueFrom(this.learningApi.setLessonVideoUrl(targetLessonId, formValue.videoUrl.trim()));
      }

      await this.loadLessons(selected.id);
      await this.reloadCourses();
      this.setNotice('লেসন সফলভাবে সংরক্ষণ হয়েছে।', 'success');
      this.closeLessonModal();
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'লেসন সংরক্ষণ করা যায়নি।'), 'error');
    } finally {
      this.isSavingLesson.set(false);
    }
  }

  protected async deleteLesson(lessonId: string): Promise<void> {
    const selected = this.selectedCourse();
    if (!selected) {
      return;
    }

    const shouldDelete = window.confirm('আপনি কি নিশ্চিতভাবে এই লেসনটি ডিলিট করতে চান?');
    if (!shouldDelete) {
      return;
    }

    if (!this.authService.isLoggedIn()) {
      this.setNotice('আপনি লগইন করেন নি। প্রথমে লগইন করুন।', 'error');
      this.router.navigateByUrl('/login');
      return;
    }

    try {
      await firstValueFrom(this.learningApi.deleteLesson(lessonId));
      await this.loadLessons(selected.id);
      await this.reloadCourses();
      this.setNotice('লেসন মুছে ফেলা হয়েছে।', 'success');
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'লেসন ডিলিট করা যায়নি।'), 'error');
    }
  }

  protected onThumbnailSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !file.type.startsWith('image/')) {
      return;
    }

    this.selectedCourseThumbnailFile.set(file);
    this.selectedCourseThumbnailPreview.set(URL.createObjectURL(file));
    input.value = '';
  }

  protected onLessonThumbnailSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !file.type.startsWith('image/')) {
      return;
    }

    this.selectedLessonThumbnailFile.set(file);
    this.selectedLessonThumbnailPreview.set(URL.createObjectURL(file));
    input.value = '';
  }

  protected onLessonVideoFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !file.type.startsWith('video/')) {
      return;
    }

    this.selectedLessonVideoFile.set(file);
    this.lessonForm.patchValue({
      videoType: 'Direct URL',
      videoUrl: file.name,
    });
    input.value = '';
  }

  protected readonly canRenderThumbnail = (value: string): boolean => {
    return value.startsWith('http://') || value.startsWith('https://') || value.startsWith('data:image/');
  };

  protected getImageUrl(path: string | null): string {
    if (!path) {
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
    }

      return `${environment.baseUrl.replace('/api', '')}${path}`;
  }

  protected onThumbnailError(event: Event, context: 'course' | 'lesson'): void {
    const img = event.target as HTMLImageElement;
    console.warn(`Thumbnail failed to load (${context}):`, img.src);
    // Set to placeholder on error
    img.src = this.getImageUrl(null);
  }

  protected readonly formatPrice = (price: number): string => {
    if (price <= 0) {
      return 'Free';
    }

    return `৳${price}`;
  };

  protected readonly resolveCoursePreviewThumbnail = (): string => {
    return this.selectedCourseThumbnailPreview() || this.courseForm.controls.thumbnailUrl.value || '';
  };

  protected readonly resolveLessonPreviewThumbnail = (): string => {
    return this.selectedLessonThumbnailPreview();
  };

  protected isCourseFormInvalid(): boolean {
    return this.courseForm.invalid || this.isSavingCourse();
  }

  protected isLessonFormInvalid(): boolean {
    return this.lessonForm.invalid || this.isSavingLesson();
  }

  protected goToHome(): void {
    this.router.navigateByUrl('/homepage');
  }

  protected goToAdmin(): void {
    this.router.navigateByUrl('/admin');
  }

  protected logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

private async loadTeacherCourses(): Promise<void> {
  this.isLoadingCourses.set(true);

  try {
    const existingCourses = this.courses();
    const existingLessonsByCourseId = new Map(existingCourses.map((course) => [course.id, course.lessons]));

    const response = await firstValueFrom(this.learningApi.getTeacherCourses());
    const courseDtos = response.data;

    // 🔥 NEW: fetch enrollment count for each course
    const mapped = await Promise.all(
      courseDtos.map(async (course) => {
        const [countRes, ratingSummaryRes] = await Promise.all([
          firstValueFrom(this.learningApi.getEnrollmentCount(course.id)).catch(() => ({ totalEnrollment: 0 })),
          firstValueFrom(this.learningApi.getRatingSummary(course.id)).catch(() => null),
        ]);

        const ratingData = (ratingSummaryRes as any)?.data ?? (ratingSummaryRes as any)?.Data ?? null;
        const averageRating = ratingData ? Number(ratingData.averageRating || 0) : 0;
        const totalRatings = ratingData ? Number(ratingData.totalRatings || 0) : 0;

        return this.mapCourse(
          course,
          existingLessonsByCourseId.get(course.id) ?? [],
          countRes.totalEnrollment,
          averageRating,
          totalRatings,
        );
      })
    );

    this.courses.set(mapped);

  } catch (error) {
    this.courses.set([]);
    this.setNotice(this.extractApiErrorMessage(error, 'কোর্স লোড করা যায়নি।'), 'error');
  } finally {
    this.isLoadingCourses.set(false);
  }
}

  /** Admin authoring: load ALL courses (any teacher), enriched like the teacher view. */
  private async loadAllCoursesAdmin(): Promise<void> {
    this.isLoadingCourses.set(true);
    try {
      const existingLessonsByCourseId = new Map(this.courses().map((course) => [course.id, course.lessons]));
      const response: any = await firstValueFrom(this.learningApi.getAllCourses());
      const courseDtos: CourseDto[] = Array.isArray(response?.data) ? response.data
        : Array.isArray(response?.Data) ? response.Data : [];

      const mapped = await Promise.all(
        courseDtos.map(async (course) => {
          const [countRes, ratingSummaryRes] = await Promise.all([
            firstValueFrom(this.learningApi.getEnrollmentCount(course.id)).catch(() => ({ totalEnrollment: 0 })),
            firstValueFrom(this.learningApi.getRatingSummary(course.id)).catch(() => null),
          ]);
          const ratingData = (ratingSummaryRes as any)?.data ?? (ratingSummaryRes as any)?.Data ?? null;
          const averageRating = ratingData ? Number(ratingData.averageRating || 0) : 0;
          const totalRatings = ratingData ? Number(ratingData.totalRatings || 0) : 0;
          return this.mapCourse(
            course,
            existingLessonsByCourseId.get(course.id) ?? [],
            (countRes as any).totalEnrollment ?? 0,
            averageRating,
            totalRatings,
          );
        })
      );
      this.courses.set(mapped);
    } catch (error) {
      this.courses.set([]);
      this.setNotice(this.extractApiErrorMessage(error, 'কোর্স লোড করা যায়নি।'), 'error');
    } finally {
      this.isLoadingCourses.set(false);
    }
  }

  /** After admin create/edit, reload the right list for the active mode. */
  private async reloadCourses(): Promise<void> {
    if (this.isAdminMode()) await this.loadAllCoursesAdmin();
    else await this.loadTeacherCourses();
  }

  private async loadLiveClasses(courseId: string): Promise<void> {
    this.isLoadingLiveClasses.set(true);

    try {
      const response = await firstValueFrom(this.liveClassService.getByCourse(courseId));
      const anyRes = response as any;
      const liveClassArray = Array.isArray(anyRes?.data)
        ? anyRes.data
        : Array.isArray(anyRes?.Data)
          ? anyRes.Data
          : [];

      this.liveClasses.set(liveClassArray.map((item: any) => ({
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
      this.isLoadingLiveClasses.set(false);
    }
  }

  private async loadLessons(courseId: string): Promise<void> {
    this.isLoadingLessons.set(true);

    try {
      const response = await firstValueFrom(this.learningApi.getLessonsByCourse(courseId));
     const anyRes = response as any;
const lessonArray = Array.isArray(anyRes?.data) ? anyRes.data
  : Array.isArray(anyRes?.Data) ? anyRes.Data
  : [];
const lessons = lessonArray.map((lesson: any) => this.mapLesson(lesson));

      this.courses.update((existingCourses) => {
        return existingCourses.map((course) => {
          if (course.id !== courseId) {
            return course;
          }

          return {
            ...course,
            lessonCount: lessons.length,
            lessons,
          };
        });
      });
    } catch (error) {
      this.setNotice(this.extractApiErrorMessage(error, 'লেসন লোড করা যায়নি।'), 'error');
    } finally {
      this.isLoadingLessons.set(false);
    }
  }

private mapCourse(
  dto: CourseDto,
  existingLessons: Lesson[] = [],
  studentCount: number = 0,
  averageRating: number = 0,
  totalRatings: number = 0,
): Course {
  return {
    id: dto.id,
    title: dto.title,
    category: dto.category,
    description: dto.description,
    instructorName: dto.instructorName,
    level: this.normalizeLevel(dto.level),
    price: dto.price,
    durationMinutes: dto.durationMinutes,
    thumbnailUrl: this.learningApi.buildDownloadUrl(dto.thumbnailPath),
    published: dto.isPublished,
    students: studentCount,
    averageRating,
    totalRatings,
    lessonCount: dto.lessonCount ?? existingLessons.length,
    lessons: existingLessons,
  };
}

  private mapLesson(dto: LessonDto): Lesson {
    return {
      id: dto.id,
      courseId: dto.courseId,
      title: dto.title,
      description: dto.description,
      videoType: this.normalizeVideoType(dto.videoType),
      videoUrl: dto.videoPath
        ? this.learningApi.buildStreamUrl(dto.videoPath)
        : (dto.videoUrl ?? ''),
      durationMinutes: dto.durationMinutes,
      orderIndex: dto.orderIndex,
      isPreview: dto.isFreePreview,
      resourceUrl: dto.resourceUrl ?? '',
      thumbnailUrl: this.learningApi.buildDownloadUrl(dto.thumbnailPath),
    };
  }

  private normalizeLevel(level: string): CourseLevel {
    if (level === 'Intermediate' || level === 'Advanced') {
      return level;
    }

    return 'Beginner';
  }

  private normalizeVideoType(videoType: string): VideoType {
    if (videoType === 'Vimeo' || videoType === 'Direct URL') {
      return videoType;
    }

    return 'YouTube';
  }

  private clearCourseUploadState(): void {
    this.selectedCourseThumbnailFile.set(null);
    this.selectedCourseThumbnailPreview.set('');
  }

  private clearLessonUploadState(): void {
    this.selectedLessonThumbnailFile.set(null);
    this.selectedLessonThumbnailPreview.set('');
    this.selectedLessonVideoFile.set(null);
  }

  private setNotice(message: string, type: 'success' | 'error'): void {
    this.notice.set(message);
    this.noticeType.set(type);
  }

  private extractApiErrorMessage(error: unknown, fallbackMessage: string): string {
    if (error instanceof HttpErrorResponse) {
      const errorBody = error.error;
      const validationErrors =
        errorBody && typeof errorBody?.errors === 'object'
          ? Object.values(errorBody.errors as Record<string, string[]>)
              .flat()
              .join(' | ')
          : '';

      const rawBackendMessage =
        (typeof errorBody === 'string' && errorBody) ||
        (typeof errorBody?.Details === 'string' && errorBody.Details) ||
        (typeof errorBody?.details === 'string' && errorBody.details) ||
        (typeof errorBody?.Message === 'string' && errorBody.Message) ||
        (typeof errorBody?.message === 'string' && errorBody.message) ||
        (typeof errorBody?.title === 'string' && errorBody.title) ||
        validationErrors ||
        '';

      const backendMessage = this.normalizeBackendMessage(rawBackendMessage);

      if (backendMessage) {
        return `${fallbackMessage} (${error.status}): ${backendMessage}`;
      }

      if (error.status === 500) {
        return `${fallbackMessage} (500): সার্ভারে Internal Error হয়েছে। Backend log দেখে exact exception ঠিক করতে হবে।`;
      }

      return `${fallbackMessage} (HTTP ${error.status})`;
    }

    return fallbackMessage;
  }

  private normalizeBackendMessage(message: string): string {
    if (!message) {
      return '';
    }

    const noHtml = message.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const withoutQuestionMarks = noHtml.replace(/[?؟]/g, '').trim();

    // Some backends return unreadable encoded text as only question marks.
    if (!withoutQuestionMarks) {
      return '';
    }

    return noHtml;
  }

// নতুন signals

// Students panel খোলা
protected async openStudentsPanel(courseId: string): Promise<void> {
  this.selectedCourseId.set(courseId);
  this.showStudentsPanel.set(true);
  const res = await firstValueFrom(this.learningApi.getEnrolledStudents(courseId));
  const data = res?.data ?? res?.Data ?? [];
  this.enrolledStudents.set(data);

  // কারা already certificate পেয়েছে সেটা load করো
  const certRes = await firstValueFrom(
    this.learningApi.getMyCertificates(courseId)
  ).catch(() => ({ data: [] }));
  const certData = (certRes as any)?.data ?? [];
  this.issuedCertificates.set(certData.map((c: any) => c.userId));
}

// Certificate issue
protected async issueCertificate(student: any): Promise<void> {
  const course = this.selectedCourse();
  if (!course) return;
  
  this.issuingCertificate.set(student.userId);
  try {
    await firstValueFrom(this.learningApi.issueCertificate({
      userId: student.userId,
      courseId: course.id,
      studentName: student.fullName,
      courseName: course.title
    }));
    this.issuedCertificates.update(ids => [...ids, student.userId]);
    this.setNotice(`${student.fullName} কে certificate দেওয়া হয়েছে।`, 'success');
  } catch {
    this.setNotice('Certificate দেওয়া যায়নি।', 'error');
  } finally {
    this.issuingCertificate.set(null);
  }
}
protected goToStudents(courseId: string): void {
  this.router.navigateByUrl(`/enrolled-students/${courseId}`);
}
  
}
