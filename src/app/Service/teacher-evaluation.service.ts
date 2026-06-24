import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface TeacherEvaluationScores {
  teachingQuality: number;
  subjectKnowledge: number;
  clarity: number;
  support: number;
  overall: number;
  comment: string;
}

export interface MyTeacherEvaluation extends TeacherEvaluationScores {
  teacherId: string;
  createdAt: string;
  updatedAt?: string | null;
}

/** Student → teacher evaluation for a completed course. */
@Injectable({ providedIn: 'root' })
export class TeacherEvaluationService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl + '/TeacherEvaluation';

  /** Submit (or update) this student's evaluation of one course teacher. */
  submit(dto: { courseId: string; teacherId: string } & TeacherEvaluationScores): Observable<any> {
    return this.http.post(`${this.baseUrl}/submit`, dto);
  }

  /** The student's own evaluations for a course (one per teacher) — to prefill the form. */
  getMine(courseId: string): Observable<{ data: MyTeacherEvaluation[] }> {
    return this.http.get<any>(`${this.baseUrl}/mine/${courseId}`);
  }
}
