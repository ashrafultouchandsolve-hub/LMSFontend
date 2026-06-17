import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface ExamView {
  id: string;
  slot: number;                 // 1 = 1st, 2 = 2nd, 3 = Final
  title: string;
  instruction: string;
  estimatedDate?: string | null;   // display-only estimate (student-card countdown)
  startDate: string;
  deadline: string;
  durationMinutes: number;
  totalMarks: number;
  isPublished: boolean;
  hasQuestion: boolean;
  isStarted: boolean;           // now >= startDate
  isClosed: boolean;            // past deadline
  submitted: boolean;
  submittedAt?: string | null;
  marks?: number | null;
  feedback?: string | null;
  graded: boolean;
}

export interface ExamSubmissionView {
  submissionId: string;
  userId: string;
  studentName: string;
  studentEmail: string;
  submittedAt: string;
  marks?: number | null;
  feedback?: string | null;
  graded: boolean;
  gradedByAdmin: boolean;
}

export interface SaveExamDto {
  courseId: string;
  slot: number;
  title: string;
  instruction: string;
  estimatedDate?: string | null; // display-only estimate (student-card countdown)
  durationMinutes: number;      // window length; start/deadline are set when the question is uploaded
  totalMarks: number;
}

@Injectable({ providedIn: 'root' })
export class ExamService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl + '/Exam';

  // ── Student / viewer ────────────────────────────────────────────
  getCourseExams(courseId: string): Observable<{ data: ExamView[] }> {
    return this.http.get<any>(`${this.baseUrl}/course/${courseId}`);
  }

  /** Question PDF as a blob (auth header attached by interceptor → open via object URL). */
  viewQuestion(examId: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/question/${examId}`, { responseType: 'blob' });
  }

  submit(examId: string, file: File): Observable<any> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/submit/${examId}`, fd);
  }

  myAnswer(examId: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/my-answer/${examId}`, { responseType: 'blob' });
  }

  /** Student's overall exam performance across all graded exams. */
  myPerformance(): Observable<{ data: { examCount: number; obtained: number; max: number; percentage: number } }> {
    return this.http.get<any>(`${this.baseUrl}/my-performance`);
  }

  // ── Admin authoring ─────────────────────────────────────────────
  createExam(dto: SaveExamDto): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, dto);
  }

  updateExam(examId: string, dto: SaveExamDto): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${examId}`, dto);
  }

  deleteExam(examId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${examId}`);
  }

  uploadQuestion(examId: string, file: File): Observable<any> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/upload-question/${examId}`, fd);
  }

  // ── Admin / appointed teacher: grading ──────────────────────────
  getSubmissions(examId: string): Observable<{ data: ExamSubmissionView[]; totalMarks: number }> {
    return this.http.get<any>(`${this.baseUrl}/${examId}/submissions`);
  }

  submissionFile(submissionId: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/submission-file/${submissionId}`, { responseType: 'blob' });
  }

  grade(submissionId: string, marks: number, feedback: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/grade/${submissionId}`, { marks, feedback });
  }
}
