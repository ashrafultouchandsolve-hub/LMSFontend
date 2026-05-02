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

  constructor() {
    this.authService.currentUser$.pipe(takeUntilDestroyed()).subscribe((currentUser: ProfileUser | null) => { this.user.set(currentUser); });
    const currentUser = this.authService.getCurrentUser() as ProfileUser | null;
    if (currentUser) this.user.set(currentUser);
    
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

  protected goToHome(): void { this.router.navigateByUrl('/homepage'); }
  protected logout(): void { this.authService.logout(); this.router.navigateByUrl('/login'); }
}
