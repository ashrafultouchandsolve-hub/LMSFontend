import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';
import { LearningApiService } from '../../Service/learning-api.service';
import { CommonModule } from '@angular/common';

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
  imports: [RouterLink, CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  private readonly authService = inject(AuthService);
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
  return this.learningApi.buildDownloadUrl(path);
}

formatPrice(price: number): string {
  return price === 0 ? 'Free' : `৳${price.toLocaleString()}`;
}

  protected goToHome(): void { this.router.navigateByUrl('/homepage'); }
  protected logout(): void { this.authService.logout(); this.router.navigateByUrl('/login'); }
}
