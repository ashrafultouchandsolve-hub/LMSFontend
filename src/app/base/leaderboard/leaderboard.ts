import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { LearningApiService } from '../../Service/learning-api.service';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';
import { Navbar } from '../../shared/navbar/navbar';

type LeaderboardEntry = {
  userId: string;
  fullName: string;
  correctAnswers: number;
  totalQuestions: number;
  percentageScore: number;
};

type ProfileUser = { id?: string | number; fullName?: string; email?: string; role?: number };

@Component({
  selector: 'app-leaderboard',
  imports: [RouterLink, CommonModule, Navbar],
  templateUrl: './leaderboard.html',
  styleUrl: './leaderboard.css',
})
export class Leaderboard implements OnInit {
  private readonly learningApi = inject(LearningApiService);
  private readonly authService = inject(AuthService);
  readonly lang = inject(LanguageService);

  protected readonly entries = signal<LeaderboardEntry[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly error = signal('');
  protected readonly currentUserId = signal('');

  protected readonly topThree = computed(() => this.entries().slice(0, 3));

  protected readonly myRank = computed(() => {
    const idx = this.entries().findIndex(e => e.userId === this.currentUserId());
    return idx >= 0 ? idx + 1 : null;
  });

  protected readonly myScore = computed(() => {
    const entry = this.entries().find(e => e.userId === this.currentUserId());
    return entry?.percentageScore ?? 0;
  });

  ngOnInit(): void {
    const user = this.authService.getCurrentUser() as ProfileUser | null;
    if (user?.id) this.currentUserId.set(String(user.id));
    void this.loadLeaderboard();
  }

  private async loadLeaderboard(): Promise<void> {
    this.isLoading.set(true);
    this.error.set('');
    try {
      const response = await firstValueFrom(this.learningApi.getLeaderboard());
      const payload = response as any;
      const data: LeaderboardEntry[] =
        payload?.data ?? payload?.Data ?? payload ?? [];
      this.entries.set(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Leaderboard load error:', err);
      this.error.set('Leaderboard লোড করা যায়নি।');
    } finally {
      this.isLoading.set(false);
    }
  }

  protected isCurrentUser(userId: string): boolean {
    return this.currentUserId() === userId;
  }

  protected getInitial(name: string): string {
    return (name ?? '?').charAt(0).toUpperCase();
  }
}