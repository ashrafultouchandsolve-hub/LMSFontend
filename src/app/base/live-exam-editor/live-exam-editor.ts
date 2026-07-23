import { Component, OnInit, computed, effect, inject, signal, untracked } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../Service/auth.service';
import { Navbar } from '../../shared/navbar/navbar';
import {
  LiveExamService,
  LiveExamManageView,
  LiveExamQuestionType,
  LiveExamStatus,
  SaveLiveExamDto,
} from '../../Service/live-exam.service';

/** Local builder state — one option row inside a choice question. */
interface OptionForm {
  text: string;
  isCorrect: boolean;
}

/** Local builder state — one question card. */
interface QuestionForm {
  type: LiveExamQuestionType;
  text: string;
  isRequired: boolean;
  points: number;
  options: OptionForm[];
  /** Optional teacher-attached prompt file URL (already uploaded), + transient UI flags. */
  fileUrl?: string | null;
  fileName?: string | null;
  uploadingFile?: boolean;
}

/**
 * Teacher form builder for live-class exams (Google-Forms style).
 * Route: /live-exam-editor/:liveClassId (staff-only, guarded at route level).
 */
@Component({
  selector: 'app-live-exam-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, Navbar],
  templateUrl: './live-exam-editor.html',
  styleUrl: './live-exam-editor.css',
})
export class LiveExamEditor implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly authService = inject(AuthService);
  private readonly svc = inject(LiveExamService);
  private readonly toastr = inject(ToastrService);

  // expose enums to the template
  protected readonly QT = LiveExamQuestionType;
  protected readonly ST = LiveExamStatus;

  protected readonly typeOptions = [
    { value: LiveExamQuestionType.ShortAnswer, label: 'Short answer' },
    { value: LiveExamQuestionType.Paragraph, label: 'Paragraph' },
    { value: LiveExamQuestionType.MultipleChoice, label: 'Multiple choice' },
    { value: LiveExamQuestionType.Checkboxes, label: 'Checkboxes' },
    { value: LiveExamQuestionType.FileUpload, label: 'File upload' },
  ];

  // ── route / context ──────────────────────────────────────────────
  protected readonly liveClassId = signal('');
  protected readonly liveClassTitle = signal('');
  protected readonly courseId = signal('');

  // ── exam state ───────────────────────────────────────────────────
  protected readonly examId = signal<string | null>(null);
  protected readonly status = signal<LiveExamStatus>(LiveExamStatus.Draft);
  protected readonly submittedCount = signal(0);

  protected readonly title = signal('');
  protected readonly description = signal('');
  protected readonly isTimed = signal(false);
  protected readonly durationMinutes = signal<number | null>(null);
  protected readonly questions = signal<QuestionForm[]>([]);

  // ── ui state ─────────────────────────────────────────────────────
  protected readonly isLoading = signal(true);
  protected readonly isSaving = signal(false);
  protected readonly isPublishing = signal(false);
  protected readonly isClosing = signal(false);
  protected readonly showPublishModal = signal(false);
  protected readonly showCloseModal = signal(false);

  /**
   * Inline validation feedback. Instead of a toast that flashes past, a sticky banner
   * names the exact problem and `errorIndex` outlines + scrolls to the offending question
   * so the teacher can see and fix it immediately (was: silent fail on missing correct answer).
   */
  protected readonly validationError = signal('');
  protected readonly errorIndex = signal<number | null>(null);

  /** Question editing locks once the exam leaves Draft (backend enforces too). */
  protected readonly isLocked = computed(() => this.status() !== LiveExamStatus.Draft);

  protected readonly canPublish = computed(
    () => !!this.examId() && this.status() === LiveExamStatus.Draft,
  );

  protected readonly totalPoints = computed(() =>
    this.questions().reduce((sum, q) => sum + (Number(q.points) || 0), 0),
  );

  protected readonly statusLabel = computed(() => {
    switch (this.status()) {
      case LiveExamStatus.Published: return 'Published';
      case LiveExamStatus.Closed: return 'Closed';
      default: return 'Draft';
    }
  });

  constructor() {
    // Editing any question or the title dismisses a stale validation banner/highlight,
    // so the teacher never sees an error for something they've already fixed.
    effect(() => {
      this.questions();
      this.title();
      untracked(() => this.clearValidationError());
    });
  }

  ngOnInit(): void {
    this.liveClassId.set(this.route.snapshot.paramMap.get('liveClassId') ?? '');
    void this.load();
  }

  // ── loading ──────────────────────────────────────────────────────
  private async load(): Promise<void> {
    this.isLoading.set(true);
    try {
      const res: any = await firstValueFrom(this.svc.getManage(this.liveClassId()));
      this.liveClassTitle.set(res?.liveClassTitle ?? res?.LiveClassTitle ?? '');
      this.courseId.set(res?.courseId ?? res?.CourseId ?? '');
      const data: LiveExamManageView | null = res?.data ?? res?.Data ?? null;

      if (data) {
        this.examId.set(String((data as any).id ?? (data as any).Id ?? '') || null);
        this.status.set(data.status ?? LiveExamStatus.Draft);
        this.submittedCount.set(data.submittedCount ?? 0);
        this.title.set(data.title ?? '');
        this.description.set(data.description ?? '');
        const dur = data.durationMinutes ?? null;
        this.isTimed.set(dur != null && dur > 0);
        this.durationMinutes.set(dur);

        const qs: QuestionForm[] = [...(data.questions ?? [])]
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .map((q) => ({
            type: q.type ?? LiveExamQuestionType.ShortAnswer,
            text: q.text ?? '',
            isRequired: !!q.isRequired,
            points: Number(q.points) || 0,
            fileUrl: q.fileUrl ?? null,
            fileName: q.fileUrl ? this.fileNameFromUrl(q.fileUrl) : null,
            options: [...(q.options ?? [])]
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
              .map((o) => ({ text: o.text ?? '', isCorrect: !!o.isCorrect })),
          }));
        this.questions.set(qs);
      } else {
        // No exam yet for this live class — start a fresh empty draft.
        this.examId.set(null);
        this.status.set(LiveExamStatus.Draft);
        this.submittedCount.set(0);
        this.title.set('');
        this.description.set('');
        this.isTimed.set(false);
        this.durationMinutes.set(null);
        this.questions.set([]);
      }
    } catch {
      this.toastr.error('Failed to load the exam. Please try again.');
    } finally {
      this.isLoading.set(false);
    }
  }

  // ── question helpers ─────────────────────────────────────────────
  protected isChoice(type: LiveExamQuestionType): boolean {
    return type === LiveExamQuestionType.MultipleChoice || type === LiveExamQuestionType.Checkboxes;
  }

  protected addQuestion(): void {
    if (this.isLocked()) return;
    this.questions.update((list) => [
      ...list,
      {
        type: LiveExamQuestionType.MultipleChoice,
        text: '',
        isRequired: false,
        points: 1,
        fileUrl: null,
        fileName: null,
        options: [
          { text: '', isCorrect: false },
          { text: '', isCorrect: false },
        ],
      },
    ]);
  }

  protected removeQuestion(index: number): void {
    if (this.isLocked()) return;
    this.questions.update((list) => list.filter((_, i) => i !== index));
  }

  protected moveQuestion(index: number, dir: -1 | 1): void {
    if (this.isLocked()) return;
    const target = index + dir;
    this.questions.update((list) => {
      if (target < 0 || target >= list.length) return list;
      const next = [...list];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  protected patchQuestion(index: number, patch: Partial<QuestionForm>): void {
    this.questions.update((list) =>
      list.map((q, i) => (i === index ? { ...q, ...patch } : q)),
    );
  }

  private fileNameFromUrl(url: string): string {
    const raw = (url.split('/').pop() ?? 'attachment').split('?')[0];
    return raw;
  }

  /** Attach a prompt file to a question: upload immediately, stash the returned URL. */
  protected async onQuestionFileChange(index: number, event: Event): Promise<void> {
    if (this.isLocked()) return;
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const ext = (file.name.split('.').pop() ?? '').toLowerCase();
    if (!['pdf', 'jpg', 'jpeg', 'png'].includes(ext)) {
      this.toastr.error('Only PDF, JPG or PNG files can be attached to a question.');
      input.value = '';
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      this.toastr.error('That file is larger than 50 MB.');
      input.value = '';
      return;
    }
    this.patchQuestion(index, { uploadingFile: true });
    try {
      const res: any = await firstValueFrom(this.svc.uploadQuestionFile(file));
      const url = res?.data?.fileUrl ?? res?.Data?.FileUrl ?? res?.data?.FileUrl ?? res?.Data?.fileUrl ?? null;
      if (!url) throw new Error('no url');
      this.patchQuestion(index, { fileUrl: url, fileName: file.name, uploadingFile: false });
    } catch (err: any) {
      this.patchQuestion(index, { uploadingFile: false });
      this.toastr.error(err?.error?.message ?? 'Could not upload the file. Please try again.');
    } finally {
      input.value = '';
    }
  }

  protected removeQuestionFile(index: number): void {
    if (this.isLocked()) return;
    this.patchQuestion(index, { fileUrl: null, fileName: null });
  }

  /** Absolute URL for previewing an attached file in the editor. */
  protected questionFileUrl(url: string | null | undefined): string {
    return url ? this.svc.fileDownloadUrl(url) : '';
  }

  protected isImageFile(name: string | null | undefined): boolean {
    const ext = (name ?? '').split('.').pop()?.toLowerCase() ?? '';
    return ['jpg', 'jpeg', 'png', 'webp', 'gif'].includes(ext);
  }

  /** Type change: keep options in memory (hidden for non-choice); seed 2 blanks for choice types. */
  protected onTypeChange(index: number, type: LiveExamQuestionType): void {
    this.questions.update((list) =>
      list.map((q, i) => {
        if (i !== index) return q;
        let options = q.options;
        if (this.isChoice(type) && options.length < 2) {
          options = [...options];
          while (options.length < 2) options.push({ text: '', isCorrect: false });
        }
        return { ...q, type, options };
      }),
    );
  }

  // ── option helpers ───────────────────────────────────────────────
  protected addOption(qIndex: number): void {
    if (this.isLocked()) return;
    this.questions.update((list) =>
      list.map((q, i) =>
        i === qIndex ? { ...q, options: [...q.options, { text: '', isCorrect: false }] } : q,
      ),
    );
  }

  protected removeOption(qIndex: number, oIndex: number): void {
    if (this.isLocked()) return;
    this.questions.update((list) =>
      list.map((q, i) =>
        i === qIndex ? { ...q, options: q.options.filter((_, j) => j !== oIndex) } : q,
      ),
    );
  }

  protected patchOptionText(qIndex: number, oIndex: number, text: string): void {
    this.questions.update((list) =>
      list.map((q, i) =>
        i === qIndex
          ? { ...q, options: q.options.map((o, j) => (j === oIndex ? { ...o, text } : o)) }
          : q,
      ),
    );
  }

  /** MultipleChoice behaves like a radio group; Checkboxes toggle independently. */
  protected toggleCorrect(qIndex: number, oIndex: number): void {
    if (this.isLocked()) return;
    this.questions.update((list) =>
      list.map((q, i) => {
        if (i !== qIndex) return q;
        if (q.type === LiveExamQuestionType.MultipleChoice) {
          return { ...q, options: q.options.map((o, j) => ({ ...o, isCorrect: j === oIndex })) };
        }
        return {
          ...q,
          options: q.options.map((o, j) =>
            j === oIndex ? { ...o, isCorrect: !o.isCorrect } : o,
          ),
        };
      }),
    );
  }

  // ── timed toggle ─────────────────────────────────────────────────
  protected onTimedToggle(checked: boolean): void {
    this.isTimed.set(checked);
    const current = this.durationMinutes();
    if (checked && (!current || current <= 0)) this.durationMinutes.set(30);
  }

  // ── validation ───────────────────────────────────────────────────
  /** Returns the first problem (message + which question, if any) or null when valid. */
  private validate(): { message: string; questionIndex: number | null } | null {
    if (!this.title().trim())
      return { message: 'Add an exam title before saving.', questionIndex: null };

    if (this.isTimed()) {
      const mins = Number(this.durationMinutes());
      if (!mins || mins < 1)
        return { message: 'Timed exam: set a duration of at least 1 minute.', questionIndex: null };
    }

    // Questions are locked (and enforced server-side) once published — only details are saved then.
    if (this.isLocked()) return null;

    const list = this.questions();
    for (let i = 0; i < list.length; i++) {
      const n = i + 1;
      const q = list[i];
      if (!q.text.trim())
        return { message: `Question ${n}: write the question text.`, questionIndex: i };
      if (this.isChoice(q.type)) {
        const filled = q.options.filter((o) => o.text.trim());
        if (filled.length < 2)
          return { message: `Question ${n}: add at least 2 options.`, questionIndex: i };
        const correct = filled.filter((o) => o.isCorrect).length;
        if (q.type === LiveExamQuestionType.MultipleChoice && correct !== 1) {
          return { message: `Question ${n}: select the one correct answer — tick the circle next to it.`, questionIndex: i };
        }
        if (q.type === LiveExamQuestionType.Checkboxes && correct < 1) {
          return { message: `Question ${n}: tick at least one correct answer.`, questionIndex: i };
        }
      }
    }
    return null;
  }

  /** Show the sticky error banner, outline the bad question, and scroll it into view. */
  private showValidationError(message: string, questionIndex: number | null): void {
    this.validationError.set(message);
    this.errorIndex.set(questionIndex);
    this.toastr.error(message);
    // let the banner/highlight render, then bring the problem on-screen
    setTimeout(() => {
      const id = questionIndex != null ? `lee-q-${questionIndex}` : 'lee-error-banner';
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 40);
  }

  /** Dismiss the banner + question highlight (called on edit and on dismiss click). */
  protected clearValidationError(): void {
    if (this.validationError()) this.validationError.set('');
    if (this.errorIndex() !== null) this.errorIndex.set(null);
  }

  protected onTitleChange(value: string): void {
    this.title.set(value);
    this.clearValidationError();
  }

  protected onDurationChange(value: number | null): void {
    this.durationMinutes.set(value);
    this.clearValidationError();
  }

  private buildDto(): SaveLiveExamDto {
    return {
      title: this.title().trim(),
      description: this.description().trim(),
      durationMinutes: this.isTimed() ? Number(this.durationMinutes()) || null : null,
      questions: this.questions().map((q, i) => ({
        type: q.type,
        text: q.text.trim(),
        isRequired: q.isRequired,
        points: Math.max(0, Number(q.points) || 0),
        order: i,
        fileUrl: q.fileUrl || null,
        options: this.isChoice(q.type)
          ? q.options
              .filter((o) => o.text.trim())
              .map((o, j) => ({ text: o.text.trim(), isCorrect: o.isCorrect, order: j }))
          : [],
      })),
    };
  }

  // ── actions ──────────────────────────────────────────────────────
  protected async save(): Promise<void> {
    const err = this.validate();
    if (err) {
      this.showValidationError(err.message, err.questionIndex);
      return;
    }
    this.clearValidationError();
    this.isSaving.set(true);
    try {
      const res: any = await firstValueFrom(this.svc.save(this.liveClassId(), this.buildDto()));
      const d = res?.data ?? res?.Data;
      const id = typeof d === 'string' ? d : d?.id ?? d?.Id ?? d?.examId ?? d?.ExamId ?? null;
      if (id) this.examId.set(String(id));
      this.toastr.success(this.isLocked() ? 'Exam details updated.' : 'Exam saved as draft.');
      await this.load();
    } catch (e: any) {
      this.toastr.error(e?.error?.message ?? 'Failed to save the exam.');
    } finally {
      this.isSaving.set(false);
    }
  }

  protected async confirmPublish(): Promise<void> {
    const id = this.examId();
    if (!id) return;
    this.isPublishing.set(true);
    try {
      await firstValueFrom(this.svc.publish(id));
      this.toastr.success('Exam published. Students have been notified.');
      this.showPublishModal.set(false);
      await this.load();
    } catch (e: any) {
      this.toastr.error(e?.error?.message ?? 'Failed to publish the exam.');
    } finally {
      this.isPublishing.set(false);
    }
  }

  protected async confirmClose(): Promise<void> {
    const id = this.examId();
    if (!id) return;
    this.isClosing.set(true);
    try {
      await firstValueFrom(this.svc.close(id));
      this.toastr.success('Exam closed. No new submissions will be accepted.');
      this.showCloseModal.set(false);
      await this.load();
    } catch (e: any) {
      this.toastr.error(e?.error?.message ?? 'Failed to close the exam.');
    } finally {
      this.isClosing.set(false);
    }
  }

  protected goBack(): void {
    // Return to wherever the teacher/admin came from; role-based fallback in a fresh tab.
    if (window.history.length > 1) {
      this.location.back();
      return;
    }
    const role = this.authService.getCurrentUser()?.role;
    // ?course/?section reopen the course's Live Classes panel instead of the bare course list.
    const courseId = this.courseId();
    void this.router.navigate([role === 2 ? '/course-manager' : '/teacher'], {
      queryParams: courseId ? { course: courseId, section: 'live' } : {},
    });
  }
}
