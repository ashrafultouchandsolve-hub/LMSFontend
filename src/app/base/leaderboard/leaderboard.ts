import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { LearningApiService } from '../../Service/learning-api.service';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';
import { RecommendationService } from '../../Service/recommendation.service';
import { Navbar } from '../../shared/navbar/navbar';

type LeaderboardEntry = {
  userId: string;
  fullName: string;
  correctAnswers: number;
  totalQuestions: number;
  percentageScore: number;      // combined (quiz 35% + exam 35% + live exam 30%, renormalized)
  mcqPercentage?: number;
  examPercentage?: number;
  liveExamPercentage?: number;
};

// rank যুক্ত entry — rank সবসময় score-অনুযায়ী canonical order থেকে আসে
type RankedEntry = LeaderboardEntry & { rank: number };

type EnrolledCourse = { id: string; title: string };

type RecommendedCourse = {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  price: number;
  instructorName: string;
  thumbnailUrl: string;
};

type ProfileUser = { id?: string | number; fullName?: string; email?: string; role?: number };

type Mode = 'loading' | 'ranking' | 'recommend' | 'error';
type SortKey = 'score' | 'correct';

@Component({
  selector: 'app-leaderboard',
  imports: [CommonModule, Navbar, RouterLink],
  templateUrl: './leaderboard.html',
  styleUrl: './leaderboard.css',
})
export class Leaderboard implements OnInit {
  private readonly learningApi = inject(LearningApiService);
  private readonly authService = inject(AuthService);
  private readonly reco = inject(RecommendationService);
  readonly lang = inject(LanguageService);

  // ── high-level view state ──
  protected readonly mode = signal<Mode>('loading');
  protected readonly error = signal('');
  protected readonly currentUserId = signal('');

  // ── enrolled-course ranking state ──
  protected readonly enrolledCourses = signal<EnrolledCourse[]>([]);
  protected readonly selectedCourseId = signal('');
  protected readonly entries = signal<LeaderboardEntry[]>([]);
  protected readonly isBoardLoading = signal(false);

  // ── interactivity ──
  protected readonly searchTerm = signal('');
  protected readonly sortKey = signal<SortKey>('score');

  // ── recommend mode ──
  protected readonly recommended = signal<RecommendedCourse[]>([]);
  protected readonly usedPreferences = signal(false); // true হলে preference-ভিত্তিক, নাহলে fallback

  // canonical rank = score-অনুযায়ী (server already sorted, তবু নিশ্চিত করি)
  protected readonly rankedEntries = computed<RankedEntry[]>(() =>
    [...this.entries()]
      .sort((a, b) => b.percentageScore - a.percentageScore || b.correctAnswers - a.correctAnswers)
      .map((e, i) => ({ ...e, rank: i + 1 }))
  );

  // podium সবসময় canonical top-3 (search/sort ছোঁয় না)
  protected readonly topThree = computed(() => this.rankedEntries().slice(0, 3));

  // table view — search filter + sort toggle প্রয়োগ করা, কিন্তু rank canonical
  protected readonly viewEntries = computed<RankedEntry[]>(() => {
    const term = this.searchTerm().trim().toLowerCase();
    let list = this.rankedEntries();
    if (term) list = list.filter(e => (e.fullName ?? '').toLowerCase().includes(term));
    if (this.sortKey() === 'correct') {
      list = [...list].sort((a, b) => b.correctAnswers - a.correctAnswers);
    }
    return list;
  });

  protected readonly selectedCourseTitle = computed(() =>
    this.enrolledCourses().find(c => c.id === this.selectedCourseId())?.title ?? ''
  );

  protected readonly myRank = computed(() => {
    const idx = this.rankedEntries().findIndex(e => e.userId === this.currentUserId());
    return idx >= 0 ? idx + 1 : null;
  });

  protected readonly myScore = computed(() => {
    const entry = this.rankedEntries().find(e => e.userId === this.currentUserId());
    return entry?.percentageScore ?? 0;
  });

  ngOnInit(): void {
    const user = this.authService.getCurrentUser() as ProfileUser | null;
    if (user?.id) this.currentUserId.set(String(user.id));
    void this.bootstrap();
  }

  // enrollment দেখে ঠিক করি: ranking mode না recommend mode
  private async bootstrap(): Promise<void> {
    this.mode.set('loading');
    this.error.set('');
    try {
      const res = await firstValueFrom(this.learningApi.getMyEnrollments());
      const raw = (res as any)?.Data ?? (res as any)?.data ?? [];
      const courses: EnrolledCourse[] = (Array.isArray(raw) ? raw : [])
        .map((c: any) => ({ id: String(c.id ?? c.Id ?? ''), title: c.title ?? c.Title ?? 'Untitled course' }))
        .filter((c: EnrolledCourse) => c.id);

      if (courses.length > 0) {
        this.enrolledCourses.set(courses);
        this.selectedCourseId.set(courses[0].id);
        this.mode.set('ranking');
        await this.loadBoard(courses[0].id);
      } else {
        this.mode.set('recommend');
        await this.loadRecommendations();
      }
    } catch (err) {
      console.error('Leaderboard bootstrap error:', err);
      this.error.set('Leaderboard লোড করা যায়নি।');
      this.mode.set('error');
    }
  }

  // dropdown থেকে course পরিবর্তন
  protected async onCourseChange(courseId: string): Promise<void> {
    if (!courseId) return;
    this.selectedCourseId.set(courseId);
    this.searchTerm.set('');
    this.sortKey.set('score');
    await this.loadBoard(courseId);
  }

  private async loadBoard(courseId: string): Promise<void> {
    this.isBoardLoading.set(true);
    try {
      const res = await firstValueFrom(this.learningApi.getCourseLeaderboard(courseId));
      const data = (res as any)?.Data ?? (res as any)?.data ?? res ?? [];
      this.entries.set(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Course leaderboard load error:', err);
      this.entries.set([]);
    } finally {
      this.isBoardLoading.set(false);
    }
  }

  // ── recommendations: signup preference (interests + skill level) ম্যাচ করে ──
  private async loadRecommendations(): Promise<void> {
    let prefs: { skillLevel?: string; interests?: string[] } | null = null;
    try {
      prefs = await firstValueFrom(this.learningApi.getUserPreferences());
    } catch {
      prefs = null; // 404 = কোনো preference সেভ নেই
    }

    let courses: any[] = [];
    try {
      const res = await firstValueFrom(this.learningApi.getAllCourses());
      courses = (res as any)?.data ?? (res as any)?.Data ?? [];
    } catch {
      courses = [];
    }

    const candidates = Array.isArray(courses) ? courses : [];
    const excludeIds = this.enrolledCourses().map(c => c.id);

    // shared engine: interest→keyword matching across category/title/description (+ skill level)
    const ranked = this.reco.rankCourses(candidates, prefs, { limit: 6, excludeIds });
    if (ranked.length > 0) {
      this.usedPreferences.set(true);
      this.recommended.set(ranked.map(c => this.mapRecommended(c)));
    } else {
      // preference নেই / কোনো ম্যাচ নেই → popular fallback (section খালি না থাকে)
      this.usedPreferences.set(false);
      const popular = this.reco.popularFallback(candidates, 6, { excludeIds });
      this.recommended.set(popular.map(c => this.mapRecommended(c)));
    }
  }

  private mapRecommended(c: any): RecommendedCourse {
    return {
      id: String(c.id),
      title: c.title ?? 'Untitled',
      description: c.description ?? '',
      category: c.category ?? '',
      level: c.level ?? 'Beginner',
      price: c.price ?? 0,
      instructorName: c.instructorName ?? '',
      thumbnailUrl: this.learningApi.buildDownloadUrl(c.thumbnailPath ?? null),
    };
  }

  // ── interactivity helpers ──
  protected setSort(key: SortKey): void {
    this.sortKey.set(key);
  }

  protected jumpToMyRank(): void {
    const id = this.currentUserId();
    if (!id) return;
    // search খোলা থাকলে clear করে দিই যাতে নিজের row নিশ্চিত দেখা যায়
    if (this.searchTerm()) this.searchTerm.set('');
    setTimeout(() => {
      const el = document.getElementById('lb-row-' + id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el?.classList.add('row-flash');
      setTimeout(() => el?.classList.remove('row-flash'), 1600);
    }, 60);
  }

  protected formatPrice(price: number): string {
    return price <= 0 ? 'Free' : `৳${price}`;
  }

  protected isCurrentUser(userId: string): boolean {
    return this.currentUserId() === userId;
  }

  protected getInitial(name: string): string {
    return (name ?? '?').charAt(0).toUpperCase();
  }
}
