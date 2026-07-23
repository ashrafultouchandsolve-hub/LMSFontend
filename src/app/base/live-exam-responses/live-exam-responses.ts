import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Navbar } from '../../shared/navbar/navbar';
import { AuthService } from '../../Service/auth.service';
import {
  LiveExamAnswerSheet,
  LiveExamQuestionType,
  LiveExamService,
  LiveExamSubmissionRow,
} from '../../Service/live-exam.service';

type ExamMeta = {
  id: string;
  title: string;
  courseId: string;
  liveClassTitle: string;
  status: number;
  maxTotal: number;
  questionCount: number;
};

/**
 * Responses + marking page — /live-exam-responses/:examId (staffGuard).
 * Teacher grades; admin gets the SAME editable UI (requirement: admin can edit marks).
 */
@Component({
  selector: 'app-live-exam-responses',
  standalone: true,
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './live-exam-responses.html',
  styleUrl: './live-exam-responses.css',
})
export class LiveExamResponses implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly svc = inject(LiveExamService);
  private readonly toastr = inject(ToastrService);
  private readonly authService = inject(AuthService);

  protected readonly QType = LiveExamQuestionType;

  protected readonly examId = signal('');
  protected readonly exam = signal<ExamMeta | null>(null);
  protected readonly rows = signal<LiveExamSubmissionRow[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly loadError = signal('');

  // detail (answer sheet) state
  protected readonly sheet = signal<LiveExamAnswerSheet | null>(null);
  protected readonly isSheetLoading = signal(false);
  protected readonly marks = signal<Record<string, number>>({});
  protected readonly feedback = signal('');
  protected readonly isSaving = signal(false);

  protected readonly isAdmin = computed(() => this.authService.getCurrentUser()?.role === 2);
  protected readonly gradedCount = computed(() => this.rows().filter((r) => r.status === 2).length);

  /** Live total of the marks inputs, clamped per question. */
  protected readonly currentTotal = computed(() => {
    const s = this.sheet();
    if (!s) return 0;
    return s.questions.reduce((sum, q) => sum + this.clamp(this.marks()[q.questionId] ?? 0, q.points), 0);
  });

  protected readonly statusLabel = computed(() => {
    switch (this.exam()?.status) {
      case 1: return '🟢 Published';
      case 2: return '⚪ Closed';
      default: return '📝 Draft';
    }
  });

  ngOnInit(): void {
    this.examId.set(this.route.snapshot.paramMap.get('examId') ?? '');
    void this.load();
  }

  protected back(): void {
    if (this.sheet()) { this.closeSheet(); return; }
    if (window.history.length > 1) { this.location.back(); return; }
    // Router navigation (not window.location.href) — keeps the SPA alive and
    // respects the base href on the GitHub-Pages subpath deploy.
    // ?course/?section reopen the course's Live Classes panel instead of the bare course list.
    const courseId = this.exam()?.courseId;
    void this.router.navigate([this.isAdmin() ? '/course-manager' : '/teacher'], {
      queryParams: courseId ? { course: courseId, section: 'live' } : {},
    });
  }

  protected async load(): Promise<void> {
    this.isLoading.set(true);
    this.loadError.set('');
    try {
      const res: any = await firstValueFrom(this.svc.submissions(this.examId()));
      this.rows.set(res?.data ?? res?.Data ?? []);
      this.exam.set(res?.exam ?? res?.Exam ?? null);
    } catch (err: any) {
      this.loadError.set(err?.error?.message ?? err?.error?.Message ?? 'Could not load the responses.');
    } finally {
      this.isLoading.set(false);
    }
  }

  // ── answer sheet ──────────────────────────────────────────────────
  protected async openSheet(submissionId: string): Promise<void> {
    this.isSheetLoading.set(true);
    try {
      const res: any = await firstValueFrom(this.svc.answerSheet(submissionId));
      const sheet: LiveExamAnswerSheet | null = res?.data ?? res?.Data ?? null;
      if (!sheet) { this.toastr.error('Could not open this answer sheet.'); return; }
      this.sheet.set(sheet);
      this.feedback.set(sheet.feedback ?? '');
      const seed: Record<string, number> = {};
      for (const q of sheet.questions) {
        seed[q.questionId] = q.marksAwarded ?? q.autoMarks ?? 0;
      }
      this.marks.set(seed);
    } catch (err: any) {
      this.toastr.error(err?.error?.message ?? err?.error?.Message ?? 'Could not open this answer sheet.');
    } finally {
      this.isSheetLoading.set(false);
    }
  }

  protected closeSheet(): void {
    this.sheet.set(null);
    this.marks.set({});
    this.feedback.set('');
  }

  protected clamp(value: number, max: number): number {
    const n = Number(value);
    if (!isFinite(n) || n < 0) return 0;
    return Math.min(n, max);
  }

  protected setMark(questionId: string, value: number): void {
    this.marks.update((prev) => ({ ...prev, [questionId]: value }));
  }

  protected markOf(questionId: string): number {
    return this.marks()[questionId] ?? 0;
  }

  /** Snap the input back into [0, points] when the user leaves the field. */
  protected normalizeMark(questionId: string, max: number): void {
    this.marks.update((prev) => ({ ...prev, [questionId]: this.clamp(prev[questionId] ?? 0, max) }));
  }

  protected isSelected(q: { selectedOptionIds: string[] }, optionId: string): boolean {
    return (q.selectedOptionIds ?? []).includes(optionId);
  }

  protected typeLabel(type: LiveExamQuestionType): string {
    switch (type) {
      case LiveExamQuestionType.ShortAnswer: return '✏️ Short answer';
      case LiveExamQuestionType.Paragraph: return '📄 Paragraph';
      case LiveExamQuestionType.MultipleChoice: return '🔘 Multiple choice';
      case LiveExamQuestionType.Checkboxes: return '☑️ Checkboxes';
      case LiveExamQuestionType.FileUpload: return '📎 File upload';
      default: return '';
    }
  }

  protected viewFile(answerId: string | null | undefined): void {
    if (!answerId) return;
    this.svc.answerFile(answerId).subscribe({
      next: (blob) => window.open(URL.createObjectURL(blob), '_blank'),
      error: () => this.toastr.error('Could not open the file.'),
    });
  }

  protected async saveMarks(): Promise<void> {
    const s = this.sheet();
    if (!s || this.isSaving()) return;
    const list = s.questions.map((q) => ({
      questionId: q.questionId,
      marks: this.clamp(this.marks()[q.questionId] ?? 0, q.points),
    }));
    this.isSaving.set(true);
    try {
      await firstValueFrom(this.svc.grade(s.submissionId, this.feedback().trim() || null, list));
      this.toastr.success('Marks saved — the student has been notified.');
      this.closeSheet();
      await this.load();
    } catch (err: any) {
      this.toastr.error(err?.error?.message ?? err?.error?.Message ?? 'Could not save the marks.');
    } finally {
      this.isSaving.set(false);
    }
  }
}
