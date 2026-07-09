import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Navbar } from '../../shared/navbar/navbar';
import {
  LiveExamService,
  LiveExamMyState,
  LiveExamQuestionType,
  LiveExamStatus,
  LiveExamTakeView,
  LiveExamTakeQuestion,
  LiveExamResultPerQuestion,
  LiveExamDraftAnswer,
} from '../../Service/live-exam.service';

/**
 * Student exam taker — /live-exam/:examId (Google-Forms style).
 * Branches on myState: intro cover → timed form → submitted / graded result view.
 */
@Component({
  selector: 'app-live-exam-attempt',
  standalone: true,
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './live-exam-attempt.html',
  styleUrl: './live-exam-attempt.css',
})
export class LiveExamAttempt implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly svc = inject(LiveExamService);
  private readonly toastr = inject(ToastrService);

  // expose enums to the template
  protected readonly QType = LiveExamQuestionType;
  protected readonly MyState = LiveExamMyState;
  protected readonly ExamStatus = LiveExamStatus;

  protected readonly examId = signal('');
  protected readonly isLoading = signal(true);
  protected readonly loadError = signal<string | null>(null);
  protected readonly view = signal<LiveExamTakeView | null>(null);

  /** In-flight answers keyed by question id — always replaced immutably. */
  protected readonly answers = signal<Record<string, LiveExamDraftAnswer>>({});
  /** Required questions the last submit attempt found unanswered (red outline). */
  protected readonly invalidIds = signal<Set<string>>(new Set());

  protected readonly isStarting = signal(false);
  protected readonly isSubmitting = signal(false);
  protected readonly showConfirmModal = signal(false);
  /** Success screen right after this session's submit (before re-fetch). */
  protected readonly justSubmitted = signal(false);
  /** The server refused a (usually auto) submit because the window closed. */
  protected readonly timeOver = signal(false);

  // ── countdown timer ─────────────────────────────────────────────
  protected readonly remainingSeconds = signal<number | null>(null);
  protected readonly totalSeconds = signal(0);
  private timerInterval: any;

  protected readonly sortedQuestions = computed<LiveExamTakeQuestion[]>(() =>
    [...(this.view()?.questions ?? [])].sort((a, b) => a.order - b.order)
  );

  protected readonly isClosed = computed(() => this.view()?.exam?.status === LiveExamStatus.Closed);

  protected readonly timerPercent = computed(() => {
    const total = this.totalSeconds();
    const left = this.remainingSeconds();
    if (left == null || total <= 0) return 100;
    return Math.max(0, Math.min(100, (left / total) * 100));
  });

  protected readonly answeredCount = computed(() => {
    const qs = this.sortedQuestions();
    return qs.reduce((count, q) => (this.hasAnswer(q) ? count + 1 : count), 0);
  });

  /** perQuestion results indexed by questionId (graded view). */
  private readonly resultMap = computed(() => {
    const map = new Map<string, LiveExamResultPerQuestion>();
    for (const r of this.view()?.result?.perQuestion ?? []) map.set(r.questionId, r);
    return map;
  });

  /** Questions joined with their result rows for the graded view. */
  protected readonly gradedRows = computed(() =>
    this.sortedQuestions().map((q) => ({ q, r: this.resultMap().get(q.id) ?? null }))
  );

  /** Backend may include submittedAt on the take view — be defensive. */
  protected readonly submittedAt = computed<string | null>(() => {
    const v: any = this.view();
    return v?.submittedAt ?? v?.SubmittedAt ?? v?.result?.submittedAt ?? null;
  });

  ngOnInit(): void {
    this.examId.set(this.route.snapshot.paramMap.get('examId') ?? '');
    void this.load();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  protected back(): void {
    if (window.history.length > 1) this.location.back();
    else void this.router.navigateByUrl('/my-courses');
  }

  // ── loading ─────────────────────────────────────────────────────
  protected async load(): Promise<void> {
    this.isLoading.set(true);
    this.loadError.set(null);
    try {
      const res: any = await firstValueFrom(this.svc.take(this.examId()));
      const data: LiveExamTakeView | null = res?.data ?? res?.Data ?? null;
      if (!data?.exam) {
        this.loadError.set('This exam could not be loaded.');
        return;
      }
      this.view.set(data);
      this.justSubmitted.set(false);

      if (data.myState === LiveExamMyState.InProgress) {
        this.seedAnswers(data);
        if (data.remainingSeconds != null) {
          const full = data.exam.durationMinutes ? data.exam.durationMinutes * 60 : data.remainingSeconds;
          this.startTimer(data.remainingSeconds, full);
        } else {
          this.clearTimer();
          this.remainingSeconds.set(null);
        }
      } else {
        this.clearTimer();
        this.remainingSeconds.set(null);
      }
    } catch (err: any) {
      this.loadError.set(
        err?.error?.message ?? 'Exam not found — or you do not have access to it.'
      );
    } finally {
      this.isLoading.set(false);
    }
  }

  /** Make sure every question has a draft-answer slot (keeps any already typed). */
  private seedAnswers(data: LiveExamTakeView): void {
    const prev = this.answers();
    const next: Record<string, LiveExamDraftAnswer> = {};
    for (const q of data.questions ?? []) next[q.id] = prev[q.id] ?? { selectedIds: [] };
    this.answers.set(next);
  }

  // ── start ───────────────────────────────────────────────────────
  protected async startExam(): Promise<void> {
    if (this.isStarting()) return;
    this.isStarting.set(true);
    try {
      const res: any = await firstValueFrom(this.svc.start(this.examId()));
      const started = res?.data ?? res?.Data ?? null;
      // Re-fetch the authoritative view (questions + server-side remaining time).
      await this.load();
      // Fallback: use the seconds the start call returned if take() had none.
      if (
        this.view()?.myState === LiveExamMyState.InProgress &&
        this.remainingSeconds() == null &&
        started?.remainingSeconds != null
      ) {
        const mins = this.view()?.exam?.durationMinutes;
        this.startTimer(started.remainingSeconds, mins ? mins * 60 : started.remainingSeconds);
      }
    } catch (err: any) {
      this.toastr.error(err?.error?.message ?? 'Could not start the exam. Please try again.');
    } finally {
      this.isStarting.set(false);
    }
  }

  // ── timer ───────────────────────────────────────────────────────
  private startTimer(seconds: number, fullSeconds: number): void {
    this.clearTimer();
    this.remainingSeconds.set(Math.max(0, seconds));
    this.totalSeconds.set(Math.max(1, fullSeconds));
    if (seconds <= 0) {
      void this.doSubmit(true);
      return;
    }
    this.timerInterval = setInterval(() => {
      const left = (this.remainingSeconds() ?? 0) - 1;
      if (left <= 0) {
        this.remainingSeconds.set(0);
        this.clearTimer();
        if (!this.isSubmitting() && !this.justSubmitted()) void this.doSubmit(true);
      } else {
        this.remainingSeconds.set(left);
      }
    }, 1000);
  }

  private clearTimer(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  protected formatTime(seconds: number | null): string {
    const s = Math.max(0, seconds ?? 0);
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${r.toString().padStart(2, '0')}`;
  }

  // ── answer updates (immutable) ──────────────────────────────────
  protected setText(questionId: string, value: string): void {
    this.answers.update((prev) => ({
      ...prev,
      [questionId]: { ...(prev[questionId] ?? { selectedIds: [] }), text: value },
    }));
    this.clearInvalid(questionId);
  }

  protected selectRadio(questionId: string, optionId: string): void {
    this.answers.update((prev) => ({
      ...prev,
      [questionId]: { ...(prev[questionId] ?? { selectedIds: [] }), selectedIds: [optionId] },
    }));
    this.clearInvalid(questionId);
  }

  protected toggleCheckbox(questionId: string, optionId: string): void {
    this.answers.update((prev) => {
      const cur = prev[questionId] ?? { selectedIds: [] };
      const has = cur.selectedIds.includes(optionId);
      const selectedIds = has
        ? cur.selectedIds.filter((id) => id !== optionId)
        : [...cur.selectedIds, optionId];
      return { ...prev, [questionId]: { ...cur, selectedIds } };
    });
    this.clearInvalid(questionId);
  }

  protected isChosen(questionId: string, optionId: string): boolean {
    return (this.answers()[questionId]?.selectedIds ?? []).includes(optionId);
  }

  protected onFileChange(questionId: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (file.size > 50 * 1024 * 1024) {
      this.toastr.error('That file is larger than 50 MB. Please pick a smaller file.');
      input.value = '';
      return;
    }
    this.answers.update((prev) => ({
      ...prev,
      [questionId]: { ...(prev[questionId] ?? { selectedIds: [] }), file },
    }));
    this.clearInvalid(questionId);
  }

  protected clearFile(questionId: string, input?: HTMLInputElement): void {
    if (input) input.value = '';
    this.answers.update((prev) => {
      const cur = prev[questionId] ?? { selectedIds: [] };
      return { ...prev, [questionId]: { ...cur, file: undefined } };
    });
  }

  protected fileSizeLabel(file: File): string {
    if (file.size >= 1024 * 1024) return (file.size / (1024 * 1024)).toFixed(1) + ' MB';
    return Math.max(1, Math.round(file.size / 1024)) + ' KB';
  }

  protected sortedOptions(q: LiveExamTakeQuestion) {
    return [...(q.options ?? [])].sort((a, b) => a.order - b.order);
  }

  private clearInvalid(questionId: string): void {
    if (!this.invalidIds().has(questionId)) return;
    this.invalidIds.update((prev) => {
      const next = new Set(prev);
      next.delete(questionId);
      return next;
    });
  }

  protected hasAnswer(q: LiveExamTakeQuestion): boolean {
    const a = this.answers()[q.id];
    switch (q.type) {
      case LiveExamQuestionType.MultipleChoice:
      case LiveExamQuestionType.Checkboxes:
        return (a?.selectedIds?.length ?? 0) > 0;
      case LiveExamQuestionType.FileUpload:
        return !!a?.file;
      default:
        return !!a?.text?.trim();
    }
  }

  // ── submit flow ─────────────────────────────────────────────────
  protected requestSubmit(): void {
    if (this.isSubmitting() || this.justSubmitted()) return;
    const missing = this.sortedQuestions()
      .filter((q) => q.isRequired && !this.hasAnswer(q))
      .map((q) => q.id);
    if (missing.length > 0) {
      this.invalidIds.set(new Set(missing));
      this.toastr.error('Please answer all required questions.');
      setTimeout(() => {
        document
          .getElementById('leq-' + missing[0])
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 60);
      return;
    }
    this.invalidIds.set(new Set());
    this.showConfirmModal.set(true);
  }

  protected confirmSubmit(): void {
    void this.doSubmit(false);
  }

  /** auto = timer reached zero → submit whatever exists, no validation. */
  private async doSubmit(auto: boolean): Promise<void> {
    if (this.isSubmitting() || this.justSubmitted()) return;
    this.showConfirmModal.set(false);
    this.isSubmitting.set(true);
    this.clearTimer();

    const drafts = this.answers();
    const payload: { questionId: string; text?: string; selectedOptionIds?: string[] }[] = [];
    const files = new Map<string, File>();
    for (const q of this.sortedQuestions()) {
      const a = drafts[q.id];
      if (q.type === LiveExamQuestionType.FileUpload) {
        if (a?.file) files.set(q.id, a.file);
        continue;
      }
      payload.push({
        questionId: q.id,
        text: a?.text?.trim() || undefined,
        selectedOptionIds: a?.selectedIds?.length ? a.selectedIds : undefined,
      });
    }

    try {
      await firstValueFrom(this.svc.submit(this.examId(), payload, files));
      this.justSubmitted.set(true);
      if (auto) this.toastr.info('Time is up — your response was submitted automatically.');
      else this.toastr.success('Your response has been recorded.');
    } catch (err: any) {
      const msg = err?.error?.message ?? 'Could not submit your response. Please try again.';
      // Window closed server-side (came back long after the timer ran out) — show a
      // terminal state instead of leaving the form stuck at 0:00.
      if (/time is over|closed/i.test(String(msg))) {
        this.timeOver.set(true);
      }
      this.toastr.error(msg);
    } finally {
      this.isSubmitting.set(false);
    }
  }

  /** Success screen "View status" — re-fetch the take view. */
  protected viewStatus(): void {
    void this.load();
  }

  // ── graded view helpers ─────────────────────────────────────────
  protected isCorrectOption(questionId: string, optionId: string): boolean {
    return (this.resultMap().get(questionId)?.correctOptionIds ?? []).includes(optionId);
  }

  protected isSelectedOption(questionId: string, optionId: string): boolean {
    return (this.resultMap().get(questionId)?.selectedOptionIds ?? []).includes(optionId);
  }

  protected awardedOf(questionId: string): number {
    return this.resultMap().get(questionId)?.marksAwarded ?? 0;
  }

  protected marksClass(q: LiveExamTakeQuestion): 'full' | 'partial' | 'zero' {
    const awarded = this.awardedOf(q.id);
    if (awarded <= 0) return 'zero';
    if (awarded >= q.points) return 'full';
    return 'partial';
  }

  protected downloadMyFile(questionId: string): void {
    const answerId = this.resultMap().get(questionId)?.answerId;
    if (!answerId) return;
    this.svc.answerFile(answerId).subscribe({
      next: (blob) => window.open(URL.createObjectURL(blob), '_blank'),
      error: () => this.toastr.error('Could not download your file.'),
    });
  }
}
