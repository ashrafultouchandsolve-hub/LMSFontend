import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

// ── enums (numeric codes mirror the backend) ─────────────────────────
export enum LiveExamQuestionType { ShortAnswer = 0, Paragraph = 1, MultipleChoice = 2, Checkboxes = 3, FileUpload = 4 }
export enum LiveExamStatus { Draft = 0, Published = 1, Closed = 2 }
/** -1 = not started yet (no submission row) */
export enum LiveExamMyState { NotStarted = -1, InProgress = 0, Submitted = 1, Graded = 2 }

// ── builder (staff) views ────────────────────────────────────────────
export interface LiveExamOptionView {
  id?: string;
  text: string;
  isCorrect: boolean;
  order: number;
}

export interface LiveExamQuestionView {
  id?: string;
  type: LiveExamQuestionType;
  text: string;
  isRequired: boolean;
  points: number;
  order: number;
  options: LiveExamOptionView[];
}

export interface LiveExamManageView {
  id: string;
  liveClassId: string;
  courseId: string;
  title: string;
  description: string;
  durationMinutes: number | null;
  status: LiveExamStatus;
  publishedAt?: string | null;
  closedAt?: string | null;
  submittedCount: number;
  questions: LiveExamQuestionView[];
}

export interface SaveLiveExamDto {
  title: string;
  description: string;
  durationMinutes: number | null;
  questions: {
    type: number;
    text: string;
    isRequired: boolean;
    points: number;
    order: number;
    options: { text: string; isCorrect: boolean; order: number }[];
  }[];
}

// ── teacher-panel summary chips ──────────────────────────────────────
export interface LiveExamSummary {
  examId: string;
  liveClassId: string;
  title: string;
  status: LiveExamStatus;
  durationMinutes: number | null;
  questionCount: number;
  submittedCount: number;
  gradedCount: number;
}

// ── responses / marking views ────────────────────────────────────────
export interface LiveExamSubmissionRow {
  submissionId: string;
  userId: string;
  studentName: string;
  studentEmail: string;
  startedAt: string;
  submittedAt?: string | null;
  status: number;                 // 1 = Submitted, 2 = Graded
  autoTotal: number;
  totalAwarded?: number | null;
  gradedByAdmin: boolean;
  gradedAt?: string | null;
}

export interface LiveExamSheetQuestion {
  questionId: string;
  type: LiveExamQuestionType;
  text: string;
  isRequired: boolean;
  points: number;
  options: { id: string; text: string; isCorrect: boolean }[];
  answerId?: string | null;
  textAnswer?: string | null;
  selectedOptionIds: string[];
  hasFile: boolean;
  fileName?: string | null;
  autoMarks?: number | null;
  marksAwarded?: number | null;
}

export interface LiveExamAnswerSheet {
  submissionId: string;
  examId: string;
  examTitle: string;
  studentName: string;
  studentEmail: string;
  startedAt: string;
  submittedAt?: string | null;
  status: number;
  autoTotal: number;
  totalAwarded?: number | null;
  feedback?: string | null;
  gradedByAdmin: boolean;
  gradedAt?: string | null;
  maxTotal: number;
  questions: LiveExamSheetQuestion[];
}

// ── student (taker) views ────────────────────────────────────────────
export interface LiveExamAvailable {
  examId: string;
  liveClassId: string;
  liveClassTitle: string;
  title: string;
  description: string;
  durationMinutes: number | null;
  status: LiveExamStatus;
  questionCount: number;
  maxTotal: number;
  publishedAt?: string | null;
  myStatus: LiveExamMyState;
  totalAwarded?: number | null;
}

export interface LiveExamTakeQuestion {
  id: string;
  type: LiveExamQuestionType;
  text: string;
  isRequired: boolean;
  points: number;
  order: number;
  options: { id: string; text: string; order: number }[];
}

export interface LiveExamResultPerQuestion {
  questionId: string;
  textAnswer?: string | null;
  selectedOptionIds: string[];
  answerId?: string | null;
  hasFile: boolean;
  fileName?: string | null;
  autoMarks?: number | null;
  marksAwarded?: number | null;
  correctOptionIds: string[];
}

export interface LiveExamTakeView {
  exam: {
    id: string;
    title: string;
    description: string;
    durationMinutes: number | null;
    status: LiveExamStatus;
    liveClassTitle: string;
    questionCount: number;
    maxTotal: number;
  };
  myState: LiveExamMyState;
  remainingSeconds?: number | null;
  questions: LiveExamTakeQuestion[];
  result?: {
    totalAwarded?: number | null;
    maxTotal: number;
    feedback?: string | null;
    gradedAt?: string | null;
    perQuestion: LiveExamResultPerQuestion[];
  } | null;
}

/** One student's in-flight answers, keyed by question id (taker page state). */
export interface LiveExamDraftAnswer {
  text?: string;
  selectedIds: string[];
  file?: File;
}

@Injectable({ providedIn: 'root' })
export class LiveExamService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl + '/LiveExam';

  // ── staff: builder ──────────────────────────────────────────────
  getManage(liveClassId: string): Observable<{ data: LiveExamManageView | null; liveClassTitle: string; courseId: string }> {
    return this.http.get<any>(`${this.baseUrl}/live-class/${liveClassId}/manage`);
  }

  save(liveClassId: string, dto: SaveLiveExamDto): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/save/${liveClassId}`, dto);
  }

  publish(examId: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/publish/${examId}`, {});
  }

  close(examId: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/close/${examId}`, {});
  }

  deleteExam(examId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${examId}`);
  }

  courseSummary(courseId: string): Observable<{ data: LiveExamSummary[] }> {
    return this.http.get<any>(`${this.baseUrl}/course/${courseId}/summary`);
  }

  // ── staff: responses / marking ──────────────────────────────────
  submissions(examId: string): Observable<{ data: LiveExamSubmissionRow[]; exam: { id: string; title: string; courseId: string; liveClassTitle: string; status: number; maxTotal: number; questionCount: number } }> {
    return this.http.get<any>(`${this.baseUrl}/${examId}/submissions`);
  }

  answerSheet(submissionId: string): Observable<{ data: LiveExamAnswerSheet }> {
    return this.http.get<any>(`${this.baseUrl}/submission/${submissionId}`);
  }

  grade(submissionId: string, feedback: string | null, marks: { questionId: string; marks: number }[]): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/grade/${submissionId}`, { feedback, marks });
  }

  // ── student: taking ─────────────────────────────────────────────
  available(courseId: string): Observable<{ data: LiveExamAvailable[] }> {
    return this.http.get<any>(`${this.baseUrl}/course/${courseId}/available`);
  }

  take(examId: string): Observable<{ data: LiveExamTakeView }> {
    return this.http.get<any>(`${this.baseUrl}/${examId}/take`);
  }

  start(examId: string): Observable<{ data: { submissionId: string; startedAt: string; remainingSeconds?: number | null } }> {
    return this.http.post<any>(`${this.baseUrl}/${examId}/start`, {});
  }

  /** Multipart submit: JSON payload + one file per file-upload question (file_{questionId}). */
  submit(examId: string, answers: { questionId: string; text?: string; selectedOptionIds?: string[] }[], files: Map<string, File>): Observable<any> {
    const fd = new FormData();
    fd.append('payload', JSON.stringify({ answers }));
    files.forEach((file, questionId) => fd.append(`file_${questionId}`, file));
    return this.http.post<any>(`${this.baseUrl}/${examId}/submit`, fd);
  }

  /** File answer as a blob (auth via interceptor) — staff or the owning student. */
  answerFile(answerId: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/answer-file/${answerId}`, { responseType: 'blob' });
  }
}
