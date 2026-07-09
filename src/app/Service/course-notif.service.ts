import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthService } from './auth.service';
import { LearningApiService } from './learning-api.service';
import { PracticeService } from './practice.service';
import { LiveClassService } from './live-class-service';
import { ExamService } from './exam.service';

/** The 4 hub options a student sees inside an enrolled course. */
export type CourseSection = 'practice' | 'live' | 'record' | 'exam';
export const COURSE_SECTIONS: readonly CourseSection[] = ['practice', 'live', 'record', 'exam'];

/** New-content counts for one course, per section + the rolled-up total. */
export interface CourseBadges {
  practice: number;
  live: number;
  record: number;
  exam: number;
  total: number;
}

const EMPTY_BADGES: CourseBadges = { practice: 0, live: 0, record: 0, exam: 0, total: 0 };

/**
 * Tracks "new since you last looked" content counts for enrolled courses — so a red badge
 * lights up the moment a teacher/admin uploads a practice sheet, live class, recorded lesson
 * or exam, and clears once the student opens that section.
 *
 * Fully client-side (no backend change): for each course+section we fetch the current item IDs
 * from the existing content APIs and diff them against the set of IDs the student has already
 * seen, kept in localStorage per user. The first time we ever see a course+section we silently
 * record everything as "seen" (a baseline) so pre-existing content never floods the badges —
 * only genuinely new uploads count.
 *
 * Badges roll up: section → course card total → sidebar grand total.
 * Limitation: state is per-browser (localStorage), not synced across devices.
 */
@Injectable({ providedIn: 'root' })
export class CourseNotifService {
  private readonly auth = inject(AuthService);
  private readonly learningApi = inject(LearningApiService);
  private readonly practiceSvc = inject(PracticeService);
  private readonly liveSvc = inject(LiveClassService);
  private readonly examSvc = inject(ExamService);

  /** Reactive per-course badge map (courseId → counts). Read from templates/computed for live updates. */
  private readonly badgeMap = signal<Record<string, CourseBadges>>({});

  /** Session cache of current item IDs per `courseId::section` — avoids refetching on re-render. */
  private readonly idCache = new Map<string, string[]>();

  /** De-dupes concurrent refreshes of the same course. */
  private readonly inFlight = new Map<string, Promise<void>>();

  constructor() {
    // On account switch (same browser), drop session caches so badges recompute for the new user.
    let lastUser = this.userKey();
    this.auth.currentUser$.subscribe(() => {
      const now = this.userKey();
      if (now !== lastUser) {
        lastUser = now;
        this.idCache.clear();
        this.inFlight.clear();
        this.badgeMap.set({});
      }
    });
  }

  // ── Reads (call inside a computed()/template to stay reactive) ─────────────
  badgesFor(courseId: string): CourseBadges {
    return this.badgeMap()[courseId] ?? EMPTY_BADGES;
  }
  sectionBadge(courseId: string, section: CourseSection): number {
    return this.badgesFor(courseId)[section];
  }
  totalFor(courseId: string): number {
    return this.badgesFor(courseId).total;
  }
  /** Sum of all section badges across the given courses (for the sidebar). */
  grandTotal(courseIds: string[]): number {
    const map = this.badgeMap();
    return courseIds.reduce((sum, id) => sum + (map[id]?.total ?? 0), 0);
  }

  // ── Refresh ───────────────────────────────────────────────────────────────
  /** Recompute badges for one course from the content APIs + stored "seen" state. */
  async refreshCourse(courseId: string): Promise<void> {
    if (!courseId) return;
    const existing = this.inFlight.get(courseId);
    if (existing) return existing;

    const run = (async () => {
      const [practice, live, record, exam] = await Promise.all(
        COURSE_SECTIONS.map((section) => this.computeSection(courseId, section)),
      );
      const total = practice + live + record + exam;
      this.badgeMap.update((m) => ({ ...m, [courseId]: { practice, live, record, exam, total } }));
    })();

    this.inFlight.set(courseId, run);
    try {
      await run;
    } finally {
      this.inFlight.delete(courseId);
    }
  }

  /** Refresh several courses in parallel (deduped). */
  async refreshCourses(courseIds: string[]): Promise<void> {
    const unique = [...new Set(courseIds.filter(Boolean))];
    await Promise.all(unique.map((id) => this.refreshCourse(id)));
  }

  /**
   * Mark a section as read — merges its current item IDs into the "seen" set and zeroes the badge.
   * Call when the student actually opens that section.
   */
  async markSectionSeen(courseId: string, section: CourseSection): Promise<void> {
    if (!courseId) return;
    const ids = await this.fetchIds(courseId, section);
    const seen = this.readSeen(courseId, section) ?? new Set<string>();
    for (const id of ids) seen.add(id);
    this.writeSeen(courseId, section, seen);

    this.badgeMap.update((m) => {
      const cur = m[courseId] ?? EMPTY_BADGES;
      const next: CourseBadges = { ...cur, [section]: 0 };
      next.total = next.practice + next.live + next.record + next.exam;
      return { ...m, [courseId]: next };
    });
  }

  // ── Internals ───────────────────────────────────────────────────────────────
  /** Unseen-item count for one course+section (establishes a silent baseline on first ever run). */
  private async computeSection(courseId: string, section: CourseSection): Promise<number> {
    const ids = await this.fetchIds(courseId, section);
    const seen = this.readSeen(courseId, section);
    if (seen === null) {
      // First time we look at this course+section → baseline everything as already seen.
      this.writeSeen(courseId, section, ids);
      return 0;
    }
    return ids.filter((id) => !seen.has(id)).length;
  }

  /** Current item IDs for a section, via the same APIs the enrolled-course views use. Cached per session. */
  private async fetchIds(courseId: string, section: CourseSection): Promise<string[]> {
    const cacheKey = `${courseId}::${section}`;
    const cached = this.idCache.get(cacheKey);
    if (cached) return cached;

    let ids: string[] = [];
    try {
      switch (section) {
        case 'practice':
          ids = this.extractIds(await firstValueFrom(this.practiceSvc.getCourseMaterials(courseId)));
          break;
        case 'live':
          ids = this.extractIds(await firstValueFrom(this.liveSvc.getByCourse(courseId)));
          break;
        case 'record':
          ids = this.extractIds(await firstValueFrom(this.learningApi.getLessonsByCourse(courseId)));
          break;
        case 'exam':
          ids = this.extractIds(await firstValueFrom(this.examSvc.getCourseExams(courseId)));
          break;
      }
    } catch {
      ids = []; // network/permission error → no badge rather than a crash
    }

    this.idCache.set(cacheKey, ids);
    return ids;
  }

  /** Pull string IDs out of the various response envelopes ({data}/{Data}/array, id/Id). */
  private extractIds(res: any): string[] {
    const arr = Array.isArray(res?.data) ? res.data
      : Array.isArray(res?.Data) ? res.Data
      : Array.isArray(res) ? res : [];
    return arr
      .map((x: any) => String(x?.id ?? x?.Id ?? ''))
      .filter((s: string) => s.length > 0);
  }

  // ── localStorage: seen-IDs per user/course/section ───────────────────────────
  private userKey(): string {
    const id = this.auth.getCurrentUser()?.id;
    return id != null ? String(id) : 'anon';
  }
  private seenKey(courseId: string, section: CourseSection): string {
    return `lms:seen:v1:${this.userKey()}:${courseId}:${section}`;
  }
  /** Returns the seen set, or null when no baseline has ever been stored for this course+section. */
  private readSeen(courseId: string, section: CourseSection): Set<string> | null {
    try {
      const raw = localStorage.getItem(this.seenKey(courseId, section));
      if (raw == null) return null;
      const arr = JSON.parse(raw);
      return new Set(Array.isArray(arr) ? arr.map(String) : []);
    } catch {
      return new Set();
    }
  }
  private writeSeen(courseId: string, section: CourseSection, ids: Iterable<string>): void {
    try {
      localStorage.setItem(this.seenKey(courseId, section), JSON.stringify([...new Set(ids)]));
    } catch {
      /* storage disabled/full — badges just won't persist across reloads */
    }
  }
}
