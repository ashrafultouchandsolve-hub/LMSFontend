import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';
import { LearningApiService } from '../../Service/learning-api.service';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NotificationService } from '../../Service/notification-service';
import { Navbar } from '../../shared/navbar/navbar';

type ProfileUser = { id?: number; fullName?: string; email?: string; role?: number; };

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
  imports: [RouterLink, DecimalPipe, Navbar],
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

  protected readonly quizProgress = signal<QuizProgress | null>(null);
  protected readonly percentageScore = computed(() => this.quizProgress()?.percentageScore ?? 0);
  protected readonly correctAnswers = computed(() => this.quizProgress()?.correctAnswers ?? 0);
  protected readonly wrongAnswers = computed(() => this.quizProgress()?.wrongAnswers ?? 0);

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
