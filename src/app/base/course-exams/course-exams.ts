import { Component, Input, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { ExamService, ExamView } from '../../Service/exam.service';
import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-course-exams',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './course-exams.html',
  styleUrl: './course-exams.css',
})
export class CourseExams implements OnInit, OnDestroy {
  @Input({ required: true }) courseId!: string;

  private readonly examService = inject(ExamService);
  protected readonly lang = inject(LanguageService);

  protected readonly exams = signal<ExamView[]>([]);
  protected readonly examAnswerNames = signal<Record<string, string>>({});
  protected readonly submittingExamId = signal<string | null>(null);
  protected readonly nowTick = signal<number>(Date.now());
  protected readonly detailsExam = signal<ExamView | null>(null);
  private examFiles: Record<string, File> = {};
  private timer: any;

  /** Always 3 slots (1st/2nd/Final); null = not created yet. */
  protected readonly examSlots = computed<(ExamView | null)[]>(() => {
    const list = this.exams();
    return [1, 2, 3].map((slot) => list.find((e) => e.slot === slot) ?? null);
  });

  ngOnInit(): void {
    void this.load();
    // tick every second so the live "min left" countdown updates accurately
    this.timer = setInterval(() => this.nowTick.set(Date.now()), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  private async load(): Promise<void> {
    try {
      const r: any = await firstValueFrom(this.examService.getCourseExams(this.courseId));
      const a = Array.isArray(r?.data) ? r.data : Array.isArray(r?.Data) ? r.Data : [];
      this.exams.set(a.map(this.mapExam));
    } catch {
      this.exams.set([]);
    }
  }

  private mapExam = (e: any): ExamView => ({
    id: e.id ?? e.Id,
    slot: e.slot ?? e.Slot,
    title: e.title ?? e.Title ?? '',
    instruction: e.instruction ?? e.Instruction ?? '',
    estimatedDate: e.estimatedDate ?? e.EstimatedDate ?? null,
    startDate: e.startDate ?? e.StartDate,
    deadline: e.deadline ?? e.Deadline,
    durationMinutes: e.durationMinutes ?? e.DurationMinutes ?? 0,
    totalMarks: e.totalMarks ?? e.TotalMarks ?? 0,
    isPublished: e.isPublished ?? e.IsPublished ?? false,
    hasQuestion: e.hasQuestion ?? e.HasQuestion ?? false,
    isStarted: e.isStarted ?? e.IsStarted ?? false,
    isClosed: e.isClosed ?? e.IsClosed ?? false,
    submitted: e.submitted ?? e.Submitted ?? false,
    submittedAt: e.submittedAt ?? e.SubmittedAt ?? null,
    marks: e.marks ?? e.Marks ?? null,
    feedback: e.feedback ?? e.Feedback ?? null,
    graded: e.graded ?? e.Graded ?? false,
  });

  // ── state + countdown ───────────────────────────────────────────
  /**
   * The exam STARTS when the admin uploads the question (IsPublished).
   * locked = no question yet | open = started, within the window | closed = window over.
   */
  protected examState(exam: ExamView | null): 'locked' | 'open' | 'closed' {
    if (!exam || !exam.isPublished) return 'locked';
    if (this.nowTick() >= new Date(exam.deadline).getTime()) return 'closed';
    return 'open';
  }

  private daysTo(dateStr: string): number {
    const ms = new Date(dateStr).getTime() - this.nowTick();
    return ms <= 0 ? 0 : Math.ceil(ms / 86400000);
  }
  protected daysToDeadline(exam: ExamView): number { return this.daysTo(exam.deadline); }

  /** Live time-left for a started exam: "30 min left" / "1 hr 20 min left" / "2 days left". */
  protected examTimeLeft(exam: ExamView): string {
    const ms = new Date(exam.deadline).getTime() - this.nowTick();
    const t = this.lang.t();
    if (ms <= 0) return '';
    const totalMin = Math.ceil(ms / 60000);
    if (totalMin >= 1440) {
      const d = Math.ceil(totalMin / 1440);
      return `${d} ${d === 1 ? t.exDayLeft : t.exDaysLeft}`;
    }
    if (totalMin >= 60) {
      const h = Math.floor(totalMin / 60);
      const m = totalMin % 60;
      return m > 0 ? `${h} ${t.exHr} ${m} ${t.exMin} ${t.exLeft}` : `${h} ${t.exHr} ${t.exLeft}`;
    }
    return `${totalMin} ${t.exMin} ${t.exLeft}`;
  }
  protected daysToEstimated(exam: ExamView): number { return exam.estimatedDate ? this.daysTo(exam.estimatedDate) : 0; }
  /** Estimate date exists and is still in the future. */
  protected estimateUpcoming(exam: ExamView | null): boolean {
    return !!exam?.estimatedDate && new Date(exam.estimatedDate).getTime() > this.nowTick();
  }

  // ── actions ─────────────────────────────────────────────────────
  protected onFileSelected(examId: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.examFiles[examId] = file;
    this.examAnswerNames.update((m) => ({ ...m, [examId]: file.name }));
  }

  protected async submit(exam: ExamView): Promise<void> {
    const file = this.examFiles[exam.id];
    if (!file) return;
    this.submittingExamId.set(exam.id);
    try {
      await firstValueFrom(this.examService.submit(exam.id, file));
      delete this.examFiles[exam.id];
      this.examAnswerNames.update((m) => { const c = { ...m }; delete c[exam.id]; return c; });
    } finally {
      this.submittingExamId.set(null);
      await this.load();
    }
  }

  protected viewQuestion(exam: ExamView): void {
    this.examService.viewQuestion(exam.id).subscribe({
      next: (blob) => window.open(URL.createObjectURL(blob), '_blank'),
      error: () => {},
    });
  }

  protected viewMyAnswer(exam: ExamView): void {
    this.examService.myAnswer(exam.id).subscribe({
      next: (blob) => window.open(URL.createObjectURL(blob), '_blank'),
      error: () => {},
    });
  }

  protected openDetails(exam: ExamView | null): void {
    if (exam) this.detailsExam.set(exam);
  }
  protected closeDetails(): void {
    this.detailsExam.set(null);
  }
}
