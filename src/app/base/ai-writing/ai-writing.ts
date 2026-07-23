import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {
  AiWritingResult,
  AiWritingService,
  AiWritingTaskDetail,
} from '../../Service/ai-writing.service';
import { LanguageService } from '../../Service/language.service';

/**
 * Student attempt page for one AI Writing task. ONE attempt per task: if a submission
 * already exists the page opens straight into the read-only result view. Otherwise the
 * student picks a topic and either types or uploads a photo/PDF — never both — and the
 * AI grades it synchronously (spinner sets the "up to a minute" expectation).
 */
@Component({
  selector: 'app-ai-writing',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './ai-writing.html',
  styleUrl: './ai-writing.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiWriting implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly aiWritingService = inject(AiWritingService);
  private readonly toastr = inject(ToastrService);
  protected readonly lang = inject(LanguageService);

  protected readonly isLoading = signal(true);
  protected readonly loadError = signal('');
  protected readonly task = signal<AiWritingTaskDetail | null>(null);
  protected readonly result = signal<AiWritingResult | null>(null);

  // Form state
  protected readonly selectedTopicId = signal<string | null>(null);
  protected readonly typedText = signal('');
  protected readonly pickedFile = signal<File | null>(null);
  protected readonly isSubmitting = signal(false);

  protected readonly wordCount = computed(() =>
    this.typedText().trim() ? this.typedText().trim().split(/\s+/).length : 0);

  /** Typing and uploading are mutually exclusive — mirror of the backend rule. */
  protected readonly typingDisabled = computed(() => this.pickedFile() !== null);

  protected readonly canSubmit = computed(() => {
    const t = this.task();
    if (!t || this.isSubmitting()) return false;
    if (t.topics.length > 0 && !this.selectedTopicId()) return false;
    const hasTyped = this.typedText().trim().length >= 30;
    const hasFile = this.pickedFile() !== null;
    return hasTyped !== hasFile ? (hasTyped || hasFile) : false;
  });

  ngOnInit(): void {
    void this.load();
  }

  private async load(): Promise<void> {
    const taskId = this.route.snapshot.paramMap.get('taskId');
    if (!taskId) {
      this.loadError.set(this.lang.t().aiwTaskNotFound);
      this.isLoading.set(false);
      return;
    }
    try {
      const detail = await firstValueFrom(this.aiWritingService.getTask(taskId));
      this.task.set(detail);
      if (detail.mySubmission) this.result.set(detail.mySubmission);
    } catch {
      this.loadError.set(this.lang.t().aiwTaskNotFound);
    } finally {
      this.isLoading.set(false);
    }
  }

  protected pickTopic(topicId: string): void {
    this.selectedTopicId.set(topicId);
  }

  protected onTextInput(event: Event): void {
    this.typedText.set((event.target as HTMLTextAreaElement).value);
  }

  protected onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    input.value = '';
    if (!file) return;

    const ext = file.name.toLowerCase().split('.').pop() ?? '';
    if (!['jpg', 'jpeg', 'png', 'pdf'].includes(ext)) {
      this.toastr.error(this.lang.t().aiwFileTypes);
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      this.toastr.error(this.lang.t().aiwFileTooBig);
      return;
    }
    this.pickedFile.set(file);
    this.typedText.set('');   // either-or: a file replaces any typed draft
  }

  protected clearFile(): void {
    this.pickedFile.set(null);
  }

  protected async submit(): Promise<void> {
    const t = this.task();
    if (!t || !this.canSubmit()) return;

    this.isSubmitting.set(true);
    try {
      const graded = await firstValueFrom(this.aiWritingService.submit(
        t.id,
        this.selectedTopicId(),
        this.pickedFile() ? null : this.typedText().trim(),
        this.pickedFile(),
      ));
      this.result.set(graded);
      this.toastr.success(this.lang.t().aiwGradedToast);
    } catch (error) {
      // 409 = already attempted (double submit / second tab) → show that attempt.
      if (error instanceof HttpErrorResponse && error.status === 409) {
        await this.load();
        this.toastr.info(this.lang.t().aiwAlreadyAttempted);
        return;
      }
      const message = (error instanceof HttpErrorResponse && (error.error?.message ?? error.error?.Message))
        || this.lang.t().aiwSubmitFailed;
      this.toastr.error(message);
      // Attempt NOT consumed — the form stays as the student left it.
    } finally {
      this.isSubmitting.set(false);
    }
  }

  /** Clear the graded result and reset the form so the student can attempt again. */
  protected retake(): void {
    this.result.set(null);
    this.typedText.set('');
    this.pickedFile.set(null);
    this.selectedTopicId.set(null);
  }

  protected viewMyFile(): void {
    const r = this.result();
    if (!r?.hasFile) return;
    this.aiWritingService.viewFile(r.submissionId).subscribe({
      next: (blob) => window.open(URL.createObjectURL(blob), '_blank'),
      error: () => {},
    });
  }

  protected backToCourse(): void {
    const t = this.task();
    if (t) {
      void this.router.navigate(['/enrolled-course', t.courseId]);
    } else {
      void this.router.navigate(['/homepage']);
    }
  }

  /** 0–100 → color band for the big score dial. */
  protected scoreTone(marks: number): string {
    return marks >= 80 ? 'great' : marks >= 60 ? 'good' : marks >= 40 ? 'okay' : 'weak';
  }
}
