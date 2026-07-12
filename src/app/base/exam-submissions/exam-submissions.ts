import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule, DatePipe, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { ExamService, ExamSubmissionView } from '../../Service/exam.service';
import { LanguageService } from '../../Service/language.service';
import { Navbar } from '../../shared/navbar/navbar';

/**
 * Dedicated grading page (its own route) — opened from the Exams panel's "Submissions" button.
 * The appointed teacher reviews answer papers and gives marks + feedback;
 * Admin opens the same page read-only (sees marks/feedback, cannot grade).
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
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly examService = inject(ExamService);
  private readonly authService = inject(AuthService);
  protected readonly lang = inject(LanguageService);

  /** Admin (role 2) sees marks read-only — only the appointed teacher can grade. */
  protected readonly isAdmin = computed(() => this.authService.getCurrentUser()?.role === 2);

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
    // যেখান থেকে এসেছে সেখানেই ফেরত; fresh tab-এ history না থাকলে role অনুযায়ী fallback।
    if (window.history.length > 1) {
      this.location.back();
      return;
    }
    this.router.navigateByUrl(this.isAdmin() ? '/course-manager' : '/teacher');
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
    // Marks must be a number within 0..TotalMarks — mirrors the backend guard.
    const marks = Number(g.marks);
    if (g.marks.trim() === '' || isNaN(marks) || marks < 0 || marks > this.totalMarks()) {
      this.setNotice(this.lang.t().exMarksRange.replace('{max}', String(this.totalMarks())), 'error');
      return;
    }
    this.savingId.set(sub.submissionId);
    try {
      await firstValueFrom(this.examService.grade(sub.submissionId, marks, g.feedback || ''));
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
