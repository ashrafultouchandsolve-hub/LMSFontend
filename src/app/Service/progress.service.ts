import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environments';

// ── composite student progress (server-computed, single source of truth) ──

export type ProgressComponentKey = 'video' | 'quiz' | 'oldExam' | 'liveExam' | 'attendance';

export interface ProgressComponent {
  key: ProgressComponentKey;
  percent: number;     // 0..100 of this component
  done: number;        // items done
  total: number;       // items available in the course
  weight: number;      // configured weight (renormalized server-side when a component is missing)
  exists: boolean;     // course actually has this component
}

export interface CourseProgress {
  courseId: string;
  courseTitle: string;
  overallPercent: number;
  components: ProgressComponent[];
}

export interface StudentProgressRow {
  userId: string;
  fullName: string;
  email: string;
  overallPercent: number;
}

// ── total performance (assessments only — same 35/35/30 blend as the leaderboard) ──

export interface PerformanceSection {
  exists: boolean;
  percent: number;
  obtained: number;
  max: number;
  count: number;
}

export interface PerformanceResultRow {
  kind: 'oldExam' | 'liveExam';
  title: string;
  courseTitle: string;
  obtained: number;
  max: number;
  percent: number;
  pending: boolean;    // submitted, awaiting grade (auto-marks shown meanwhile)
  at: string | null;
}

export interface Performance {
  combinedPercent: number;
  quiz: PerformanceSection;
  oldExam: PerformanceSection;
  liveExam: PerformanceSection;
  results: PerformanceResultRow[];
}

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl + '/Progress';

  /** Per-course composite progress for every course the logged-in student is enrolled in. */
  getMyProgress(): Observable<CourseProgress[]> {
    return this.http.get<{ data: CourseProgress[] }>(`${this.baseUrl}/my`)
      .pipe(map((r) => r?.data ?? []));
  }

  /** Student's total performance (quiz + old exam + live exam) + per-paper results list. */
  getMyPerformance(): Observable<Performance | null> {
    return this.http.get<{ data: Performance }>(`${this.baseUrl}/performance`)
      .pipe(map((r) => r?.data ?? null));
  }

  /** Staff: every enrolled student's overall progress in one course (certificate decisions). */
  getCourseStudentsProgress(courseId: string): Observable<StudentProgressRow[]> {
    return this.http.get<{ data: StudentProgressRow[] }>(`${this.baseUrl}/course/${courseId}/students`)
      .pipe(map((r) => r?.data ?? []));
  }
}
