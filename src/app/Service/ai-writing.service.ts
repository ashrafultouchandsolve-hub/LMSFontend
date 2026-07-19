import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface AiWritingTopic {
  id: string;
  text: string;
}

export interface AiWritingTask {
  id: string;
  courseId: string;
  type: string; // Paragraph | Letter | Essay | Application | Email | Story
  title: string;
  instructions: string;
  isPublished: boolean;
  createdAt: string;
  topics: AiWritingTopic[];
  /** Manager view only */
  submissionCount: number;
  /** Student view */
  myAttempted: boolean;
  myFinalMarks: number | null;
}

export interface AiWritingBreakdown {
  grammar: number;
  spelling: number;
  structure: number;
  relevance: number;
}

export interface AiWritingResult {
  submissionId: string;
  taskId: string;
  topicText: string;
  inputKind: string; // Typed | Image | Pdf
  aiMarks: number;
  finalMarks: number;
  adjustedByAdmin: boolean;
  offTopic: boolean;
  breakdown: AiWritingBreakdown;
  feedback: string;
  extractedText: string;
  hasFile: boolean;
  submittedAt: string;
}

export interface AiWritingTaskDetail {
  id: string;
  courseId: string;
  type: string;
  title: string;
  instructions: string;
  isPublished: boolean;
  topics: AiWritingTopic[];
  mySubmission: AiWritingResult | null;
}

export interface AiWritingSubmissionRow extends AiWritingResult {
  studentName: string;
  studentEmail: string;
}

export interface SaveAiWritingTaskDto {
  courseId: string;
  type: string;
  title: string;
  instructions: string;
  topics: string[];
  isPublished: boolean;
}

/** The backend serialises PascalCase or camelCase depending on the projection — accept both. */
function normalizeResult(r: any): AiWritingResult | null {
  if (!r) return null;
  const b = r.breakdown ?? r.Breakdown ?? {};
  return {
    submissionId: r.submissionId ?? r.SubmissionId,
    taskId: r.taskId ?? r.TaskId,
    topicText: r.topicText ?? r.TopicText ?? '',
    inputKind: r.inputKind ?? r.InputKind ?? 'Typed',
    aiMarks: r.aiMarks ?? r.AiMarks ?? 0,
    finalMarks: r.finalMarks ?? r.FinalMarks ?? 0,
    adjustedByAdmin: r.adjustedByAdmin ?? r.AdjustedByAdmin ?? false,
    offTopic: r.offTopic ?? r.OffTopic ?? false,
    breakdown: {
      grammar: b.grammar ?? b.Grammar ?? 0,
      spelling: b.spelling ?? b.Spelling ?? 0,
      structure: b.structure ?? b.Structure ?? 0,
      relevance: b.relevance ?? b.Relevance ?? 0,
    },
    feedback: r.feedback ?? r.Feedback ?? '',
    extractedText: r.extractedText ?? r.ExtractedText ?? '',
    hasFile: r.hasFile ?? r.HasFile ?? false,
    submittedAt: r.submittedAt ?? r.SubmittedAt ?? '',
  };
}

function normalizeTask(t: any): AiWritingTask {
  const topics = (t.topics ?? t.Topics ?? []) as any[];
  return {
    id: t.id ?? t.Id,
    courseId: t.courseId ?? t.CourseId,
    type: t.type ?? t.Type ?? 'Paragraph',
    title: t.title ?? t.Title ?? '',
    instructions: t.instructions ?? t.Instructions ?? '',
    isPublished: t.isPublished ?? t.IsPublished ?? false,
    createdAt: t.createdAt ?? t.CreatedAt ?? '',
    topics: topics.map((x) => ({ id: x.id ?? x.Id, text: x.text ?? x.Text ?? '' })),
    submissionCount: t.submissionCount ?? t.SubmissionCount ?? 0,
    myAttempted: t.myAttempted ?? t.MyAttempted ?? false,
    myFinalMarks: t.myFinalMarks ?? t.MyFinalMarks ?? null,
  };
}

@Injectable({ providedIn: 'root' })
export class AiWritingService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl + '/AiWriting';

  getCourseTasks(courseId: string): Observable<AiWritingTask[]> {
    return this.http.get<any>(`${this.baseUrl}/course/${courseId}`).pipe(
      map((res) => {
        const list = Array.isArray(res?.data) ? res.data : Array.isArray(res?.Data) ? res.Data : [];
        return list.map(normalizeTask);
      }),
    );
  }

  getTask(taskId: string): Observable<AiWritingTaskDetail> {
    return this.http.get<any>(`${this.baseUrl}/task/${taskId}`).pipe(
      map((res) => {
        const d = res?.data ?? res?.Data ?? {};
        const base = normalizeTask(d);
        return {
          id: base.id,
          courseId: base.courseId,
          type: base.type,
          title: base.title,
          instructions: base.instructions,
          isPublished: base.isPublished,
          topics: base.topics,
          mySubmission: normalizeResult(d.mySubmission ?? d.MySubmission),
        };
      }),
    );
  }

  createTask(dto: SaveAiWritingTaskDto): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, dto);
  }

  updateTask(id: string, dto: SaveAiWritingTaskDto): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, dto);
  }

  togglePublish(id: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/publish/${id}`, {});
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`);
  }

  /** Either typedText OR file — the backend enforces the same rule. Grading is synchronous. */
  submit(taskId: string, topicId: string | null, typedText: string | null, file: File | null): Observable<AiWritingResult> {
    const form = new FormData();
    form.append('taskId', taskId);
    if (topicId) form.append('topicId', topicId);
    if (typedText) form.append('typedText', typedText);
    if (file) form.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/submit`, form).pipe(
      map((res) => normalizeResult(res?.data ?? res?.Data)!),
    );
  }

  getSubmissions(taskId: string): Observable<AiWritingSubmissionRow[]> {
    return this.http.get<any>(`${this.baseUrl}/submissions/${taskId}`).pipe(
      map((res) => {
        const list = Array.isArray(res?.data) ? res.data : Array.isArray(res?.Data) ? res.Data : [];
        return list.map((r: any) => ({
          ...normalizeResult(r)!,
          studentName: r.studentName ?? r.StudentName ?? 'Unknown',
          studentEmail: r.studentEmail ?? r.StudentEmail ?? '',
        }));
      }),
    );
  }

  overrideMark(submissionId: string, finalMarks: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/grade/${submissionId}`, { finalMarks });
  }

  viewFile(submissionId: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/file/${submissionId}`, { responseType: 'blob' });
  }
}
