import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';
import { LearningApiService, StudentProfileDto, StudentProfilePayload } from '../../Service/learning-api.service';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { NotificationService } from '../../Service/notification-service';
import { ExamService } from '../../Service/exam.service';
import { Navbar } from '../../shared/navbar/navbar';

type ProfileUser = { id?: number; fullName?: string; email?: string; role?: number; };

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
};

type QuizProgress = {
  lessonId: string;
  userId: string;
  correctAnswers: number;
  totalQuestions: number;
  wrongAnswers: number;
  percentageScore: number;
  isCompleted: boolean;
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

@Component({
  selector: 'app-profile',
  imports: [RouterLink, DecimalPipe, DatePipe, Navbar, FormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly notifsvc = inject(NotificationService);
  private readonly router = inject(Router);
  private readonly learningApi = inject(LearningApiService);
  readonly lang = inject(LanguageService);

  protected readonly user = signal<ProfileUser | null>(null);
  protected readonly userName = computed(() => this.user()?.fullName || 'Student');
  protected readonly userEmail = computed(() => this.user()?.email || 'No email found');
  protected readonly isLoggedIn = computed(() => !!this.user());
  protected readonly isTeacher = computed(() => this.user()?.role === 1);
  protected readonly userInitial = computed(() => this.userName().charAt(0).toUpperCase());
  protected readonly userRole = computed(() => this.user()?.role === 1 ? 'Instructor' : 'Student');

  // ── Student profile / edit ───────────────────────────────
  protected readonly profile = signal<StudentProfileDto | null>(null);
  protected readonly isEditing = signal(false);
  protected readonly isSaving = signal(false);
  protected readonly saveError = signal<string | null>(null);
  protected readonly saveSuccess = signal(false);
  protected readonly imagePreview = signal<string | null>(null);
  private selectedImageFile: File | null = null;

  protected editForm: EditForm = this.emptyForm();

  /** Resolved avatar image (uploaded photo or selected preview). */
  protected readonly avatarUrl = computed(() => {
    const path = this.profile()?.profileImagePath;
    return path ? this.learningApi.buildDownloadUrl(path) : '';
  });

  /** True when the student has filled at least one optional/bio field. */
  protected readonly hasDetails = computed(() => {
    const p = this.profile();
    if (!p) return false;
    return !!(p.phone || p.bio || p.dateOfBirth || p.gender || p.address ||
      p.institution || p.classOrGrade || p.guardianName || p.guardianPhone ||
      p.facebookLink || p.linkedInLink);
  });

  protected readonly quizProgress = signal<QuizProgress | null>(null);
  protected readonly percentageScore = computed(() => this.quizProgress()?.percentageScore ?? 0);
  protected readonly correctAnswers = computed(() => this.quizProgress()?.correctAnswers ?? 0);
  protected readonly wrongAnswers = computed(() => this.quizProgress()?.wrongAnswers ?? 0);

  // Exam performance
  private readonly examService = inject(ExamService);
  protected readonly examPerf = signal<{ examCount: number; obtained: number; max: number; percentage: number } | null>(null);
  protected readonly examPercentage = computed(() => this.examPerf()?.percentage ?? 0);
  protected readonly hasExamPerf = computed(() => (this.examPerf()?.examCount ?? 0) > 0);

  protected readonly wishlist = signal<WishlistItem[]>([]);
  protected readonly isLoadingWishlist = signal(false);
  protected readonly activeTab = signal<'profile' | 'wishlist'>('profile');

  readonly lessonNotifCount = signal(0);
readonly quizNotifCount   = signal(0);
readonly certNotifCount   = signal(0);

  constructor() {
    this.authService.currentUser$.pipe(takeUntilDestroyed()).subscribe((currentUser: ProfileUser | null) => {
      this.user.set(currentUser);
      if (currentUser?.id) {
        void this.loadWishlist();
      }
    });
    const currentUser = this.authService.getCurrentUser() as ProfileUser | null;
    if (currentUser) {
      this.user.set(currentUser);
      void this.loadWishlist();
    }
    
    // Load quiz progress - get first lesson ID
    void this.loadQuizProgress();
    void this.loadExamPerformance();
    void this.loadProfile();
  }

  private emptyForm(): EditForm {
    return {
      fullName: '', phone: '', bio: '', dateOfBirth: '', gender: '', address: '',
      institution: '', classOrGrade: '', guardianName: '', guardianPhone: '',
      facebookLink: '', linkedInLink: '',
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
      phone: p?.phone ?? '',
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
    };
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
    this.isSaving.set(true);
    this.saveError.set(null);
    try {
      const payload: StudentProfilePayload = {
        fullName: name,
        phone: this.editForm.phone || null,
        bio: this.editForm.bio || null,
        dateOfBirth: this.editForm.dateOfBirth || null,
        gender: this.editForm.gender || null,
        address: this.editForm.address || null,
        institution: this.editForm.institution || null,
        classOrGrade: this.editForm.classOrGrade || null,
        guardianName: this.editForm.guardianName || null,
        guardianPhone: this.editForm.guardianPhone || null,
        facebookLink: this.editForm.facebookLink || null,
        linkedInLink: this.editForm.linkedInLink || null,
      };
      await firstValueFrom(this.learningApi.updateStudentProfile(payload));

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

  private async loadExamPerformance(): Promise<void> {
    try {
      const res: any = await firstValueFrom(this.examService.myPerformance());
      const d = res?.data ?? res?.Data ?? null;
      if (d) {
        this.examPerf.set({
          examCount: d.examCount ?? d.ExamCount ?? 0,
          obtained: d.obtained ?? d.Obtained ?? 0,
          max: d.max ?? d.Max ?? 0,
          percentage: d.percentage ?? d.Percentage ?? 0,
        });
      }
    } catch { /* no exam performance yet */ }
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

  private async loadQuizProgress(): Promise<void> {
    try {
      const currentUser = this.authService.getCurrentUser() as any;
      if (!currentUser?.id) return;

      // Call API to get overall quiz progress for all quizzes
      const response = await firstValueFrom(
        this.learningApi.getOverallQuizProgress(currentUser.id)
      );
      
      const progressData = (response as any)?.data ?? null;
      if (progressData) {
        this.quizProgress.set(progressData);
      }
    } catch (err) {
      console.log('Could not load quiz progress:', err);
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

  switchTab(tab: 'profile' | 'wishlist') {
    this.activeTab.set(tab);
    if (tab === 'wishlist') {
      void this.loadWishlist();
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
