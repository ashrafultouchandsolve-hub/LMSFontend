import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, DatePipe, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ExamService, ExamSubmissionView } from '../../Service/exam.service';
import { LanguageService } from '../../Service/language.service';
import { Navbar } from '../../shared/navbar/navbar';

/**
 * Dedicated grading page (its own route) — opened from the Exams panel's "Submissions" button.
 * Admin and the appointed teacher can both review answer papers and (re)grade marks here.
 */
@Component({
  selector: 'app-exam-submissions',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe, Navbar],
  templateUrl: './exam-submissions.html',
  styleUrl: './exam-submissions.css',
})
export class ExamSubmissions implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly examService = inject(ExamService);
  protected readonly lang = inject(LanguageService);

  protected readonly examId = signal('');
  protected readonly examTitle = signal('');
  protected readonly subs = signal<ExamSubmissionView[]>([]);
  protected readonly totalMarks = signal(0);
  protected readonly isLoading = signal(true);
  protected readonly savingId = signal<string | null>(null);
  protected readonly notice = signal<{ text: string; kind: 'success' | 'error' } | null>(null);
  protected gradeInputs: Record<string, { marks: string; feedback: string }> = {};

  ngOnInit(): void {
    this.examId.set(this.route.snapshot.paramMap.get('examId') ?? '');
    this.examTitle.set(this.route.snapshot.queryParamMap.get('title') ?? '');
    void this.load();
  }

  protected back(): void {
    this.location.back();
  }

  private async load(): Promise<void> {
    this.isLoading.set(true);
    try {
      const r: any = await firstValueFrom(this.examService.getSubmissions(this.examId()));
      const a = Array.isArray(r?.data) ? r.data : Array.isArray(r?.Data) ? r.Data : [];
      this.totalMarks.set(r?.totalMarks ?? r?.TotalMarks ?? 0);
      const list: ExamSubmissionView[] = a.map((s: any) => ({
        submissionId: s.submissionId ?? s.SubmissionId,
        userId: s.userId ?? s.UserId,
        studentName: s.studentName ?? s.StudentName ?? 'Student',
        studentEmail: s.studentEmail ?? s.StudentEmail ?? '',
        submittedAt: s.submittedAt ?? s.SubmittedAt,
        marks: s.marks ?? s.Marks ?? null,
        feedback: s.feedback ?? s.Feedback ?? null,
        graded: s.graded ?? s.Graded ?? false,
        gradedByAdmin: s.gradedByAdmin ?? s.GradedByAdmin ?? false,
      }));
      this.subs.set(list);
      this.gradeInputs = {};
      list.forEach((s) => (this.gradeInputs[s.submissionId] = {
        marks: s.marks != null ? String(s.marks) : '',
        feedback: s.feedback ?? '',
      }));
    } catch {
      this.subs.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  /** Open the student's answer paper in a new tab. */
  protected download(sub: ExamSubmissionView): void {
    this.examService.submissionFile(sub.submissionId).subscribe({
      next: (blob) => window.open(URL.createObjectURL(blob), '_blank'),
      error: () => {},
    });
  }

  protected async grade(sub: ExamSubmissionView): Promise<void> {
    const g = this.gradeInputs[sub.submissionId];
    if (!g) return;
    this.savingId.set(sub.submissionId);
    try {
      await firstValueFrom(this.examService.grade(sub.submissionId, Number(g.marks || 0), g.feedback || ''));
      this.setNotice(this.lang.t().exMarksSaved, 'success');
      await this.load();
    } catch {
      this.setNotice(this.lang.t().exMarksSaveFailed, 'error');
    } finally {
      this.savingId.set(null);
    }
  }

  private setNotice(text: string, kind: 'success' | 'error'): void {
    this.notice.set({ text, kind });
    setTimeout(() => this.notice.set(null), 3000);
  }
}
