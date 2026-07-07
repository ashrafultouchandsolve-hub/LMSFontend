import { Injectable, computed, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthService } from './auth.service';
import { LearningApiService } from './learning-api.service';
import { LiveClassService } from './live-class-service';
import { ExamService } from './exam.service';
import { LanguageService } from './language.service';

/** One row of the student's "Today's Agenda" (navbar ticker/dropdown). */
export type AgendaItem = {
  kind: 'live' | 'upcoming' | 'exam' | 'ending';
  icon: string;
  courseId: string;
  courseTitle: string;
  detail: string;   // lesson / exam title (may be '')
  days: number;     // calendar days until it happens (0 = today / live now)
  sortKey: number;  // ms timestamp for ordering; live-now uses -1 so it pins first
  link: string[];
};

/**
 * Shared "Today's Agenda" state — live/upcoming classes, due exams and ending
 * courses across the student's enrollments. Best-effort: any failing call is
 * skipped and the previous items are kept.
 */
@Injectable({ providedIn: 'root' })
export class AgendaService {
  private readonly auth = inject(AuthService);
  private readonly learningApi = inject(LearningApiService);
  private readonly liveClass = inject(LiveClassService);
  private readonly examService = inject(ExamService);
  private readonly lang = inject(LanguageService);

  private readonly WINDOW_DAYS = 7;
  /** Missed (unsubmitted) exams stay visible as "overdue" for this many days after the deadline. */
  private readonly OVERDUE_GRACE_DAYS = 3;
  private readonly MIN_REFRESH_MS = 20_000;

  private readonly _items = signal<AgendaItem[]>([]);
  private readonly _isLoading = signal(false);
  readonly items = this._items.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();
  readonly liveNowCount = computed(() => this._items().filter((i) => i.kind === 'live').length);

  private inFlight = false;
  private lastFetchAt = 0;
  private lastUserId: string | null = null;

  constructor() {
    this.auth.currentUser$.subscribe((u: any) => {
      const id = u?.id != null ? String(u.id) : null;
      const isStudent = typeof u?.role === 'number' && u.role === 0;
      if (!isStudent) {
        this.lastUserId = id;
        this._items.set([]);
        return;
      }
      if (id !== this.lastUserId) {
        this.lastUserId = id;
        this.lastFetchAt = 0; // user switch — bypass the throttle
      }
      void this.refresh();
    });
  }

  private isStudent(): boolean {
    const u = this.auth.getCurrentUser() as any;
    return typeof u?.role === 'number' && u.role === 0;
  }

  /** Refetch the agenda; throttled to one burst per 20s unless `force`. */
  async refresh(force = false): Promise<void> {
    if (!this.isStudent()) { this._items.set([]); return; }
    if (this.inFlight) return;
    if (!force && Date.now() - this.lastFetchAt < this.MIN_REFRESH_MS) return;
    this.inFlight = true;
    this._isLoading.set(true);
    try {
      const res: any = await firstValueFrom(this.learningApi.getMyEnrollments());
      const raw = res?.data ?? res?.Data ?? res ?? [];
      const enrolled = (Array.isArray(raw) ? raw : [])
        .map((c: any) => ({
          id: (c?.id ?? c?.Id) as string,
          title: (c?.title ?? c?.Title ?? 'Course') as string,
          endDate: (c?.endDate ?? c?.EndDate ?? null) as string | null,
        }))
        .filter((c) => !!c.id);
      if (enrolled.length === 0) { this._items.set([]); this.lastFetchAt = Date.now(); return; }

      const now = Date.now();
      const horizon = now + this.WINDOW_DAYS * 86_400_000;
      const items: AgendaItem[] = [];

      // Courses ending within the window.
      for (const c of enrolled) {
        if (!c.endDate) continue;
        const end = new Date(c.endDate).getTime();
        if (isNaN(end)) continue;
        const days = this.dayDiff(end);
        if (days >= 0 && end <= horizon) {
          items.push({ kind: 'ending', icon: '⏳', courseId: c.id, courseTitle: c.title, detail: '', days, sortKey: end, link: ['/enrolled-course', c.id] });
        }
      }

      // Live/upcoming classes + due exams, per enrolled course, in parallel.
      await Promise.all(enrolled.map(async (c) => {
        try {
          const lcRes: any = await firstValueFrom(this.liveClass.getByCourse(c.id));
          const list = lcRes?.data ?? lcRes?.Data ?? [];
          for (const lc of (Array.isArray(list) ? list : [])) {
            if (lc?.isEnded) continue;
            if (lc?.isActive) {
              items.push({ kind: 'live', icon: '🔴', courseId: c.id, courseTitle: c.title, detail: lc.title ?? '', days: 0, sortKey: -1, link: ['/live-class', lc.id] });
            } else if (lc?.scheduledAt) {
              const t = new Date(lc.scheduledAt).getTime();
              if (!isNaN(t) && t >= now && t <= horizon) {
                items.push({ kind: 'upcoming', icon: '📺', courseId: c.id, courseTitle: c.title, detail: lc.title ?? '', days: this.dayDiff(t), sortKey: t, link: ['/live-class', lc.id] });
              }
            }
          }
        } catch { /* ignore this course's live classes */ }

        try {
          const exRes: any = await firstValueFrom(this.examService.getCourseExams(c.id));
          const list = exRes?.data ?? exRes?.Data ?? [];
          const overdueFloor = now - this.OVERDUE_GRACE_DAYS * 86_400_000;
          for (const ex of (Array.isArray(list) ? list : [])) {
            if (!ex?.isPublished || ex?.submitted) continue;
            const dl = new Date(ex.deadline).getTime();
            // Past-deadline (missed) exams stay listed for a few days as "overdue" — days goes negative.
            if (isNaN(dl) || dl < overdueFloor || dl > horizon) continue;
            items.push({ kind: 'exam', icon: '📝', courseId: c.id, courseTitle: c.title, detail: ex.title ?? '', days: this.dayDiff(dl), sortKey: dl, link: ['/enrolled-course', c.id] });
          }
        } catch { /* ignore this course's exams */ }
      }));

      items.sort((a, b) => a.sortKey - b.sortKey);
      this._items.set(items.slice(0, 6));
      this.lastFetchAt = Date.now();
    } catch { /* best-effort — keep previous items */ }
    finally {
      this.inFlight = false;
      this._isLoading.set(false);
    }
  }

  /** Whole calendar days from today until the given timestamp (0 = today, negative = past). */
  private dayDiff(ts: number): number {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const d = new Date(ts);
    const day = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    return Math.round((day - today) / 86_400_000);
  }

  /** Bilingual "when" phrase for an agenda item (re-evaluated on language toggle). */
  meta(it: AgendaItem): string {
    const bn = this.lang.isBangla();
    const when = it.days < 0 ? (bn ? `${-it.days} দিন দেরি` : `${-it.days} day(s) late`)
      : it.days === 0 ? (bn ? 'আজ' : 'Today')
      : it.days === 1 ? (bn ? 'আগামীকাল' : 'Tomorrow')
      : (bn ? `${it.days} দিন পরে` : `in ${it.days} days`);
    switch (it.kind) {
      case 'live':     return bn ? 'এখন লাইভ' : 'LIVE NOW';
      case 'upcoming': return (bn ? 'লাইভ ক্লাস · ' : 'Live · ') + when;
      case 'exam':     return (bn ? 'পরীক্ষা · ' : 'Exam · ') + when;
      case 'ending':   return it.days <= 0 ? (bn ? 'আজ কোর্স শেষ' : 'Ends today') : (bn ? `${it.days} দিন পরে শেষ` : `Ends in ${it.days} days`);
    }
  }
}
