import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { LearningApiService } from '../../Service/learning-api.service';

type PaymentMethod = 'Card' | 'Bkash' | 'Nagad';

@Component({
  selector: 'app-payment',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Payment {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly learningApi = inject(LearningApiService);

  protected readonly isProcessing = signal(false);
  protected readonly successMessage = signal('');

  protected readonly selectedMethod = signal<PaymentMethod>('Card');
  protected readonly courseTitle = signal('Course Enrollment');
  protected readonly payableAmount = signal(0);
  protected readonly courseId = signal('');

  protected readonly methodOptions: PaymentMethod[] = ['Card', 'Bkash', 'Nagad'];

  protected readonly paymentForm = this.fb.nonNullable.group({
    payerName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^01[0-9]{9}$')]],
    cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    expiry: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\\/[0-9]{2}$')]],
    cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
    agree: [false, [Validators.requiredTrue]],
  });

  protected readonly totalPayableText = computed(() => {
    const amount = this.payableAmount();
    if (amount <= 0) {
      return 'Free';
    }

    return `৳${amount}`;
  });

  constructor() {
    const title = this.route.snapshot.queryParamMap.get('courseTitle')?.trim();
    const amountParam = this.route.snapshot.queryParamMap.get('amount');
    const parsedAmount = Number(amountParam);
    const selectedCourseId = this.route.snapshot.queryParamMap.get('courseId')?.trim();

    if (title) {
      this.courseTitle.set(title);
    }

    if (!Number.isNaN(parsedAmount) && parsedAmount >= 0) {
      this.payableAmount.set(parsedAmount);
    }

    if (selectedCourseId) {
      this.courseId.set(selectedCourseId);
    }
  }

  protected chooseMethod(method: PaymentMethod): void {
    this.selectedMethod.set(method);
  }

  protected async submitPayment(): Promise<void> {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }

    if (!this.courseId()) {
      this.successMessage.set('Course ID পাওয়া যায়নি। আবার course page থেকে আসুন।');
      return;
    }

    this.isProcessing.set(true);
    this.successMessage.set('');

    try {
      await new Promise<void>((resolve) => {
        window.setTimeout(() => resolve(), 1200);
      });

      await firstValueFrom(this.learningApi.createEnrollment({ courseId: this.courseId() }));
      this.learningApi.markCourseAsEnrolledLocally(this.courseId());

      this.successMessage.set('Payment successful. You are now enrolled in this course.');
      this.paymentForm.reset({
        payerName: '',
        email: '',
        phone: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        agree: false,
      });

      window.setTimeout(() => {
        void this.router.navigate(['/course-details', this.courseId()]);
      }, 900);
    } catch (error) {
      if (error instanceof HttpErrorResponse && error.status === 409) {
        this.learningApi.markCourseAsEnrolledLocally(this.courseId());
        this.successMessage.set('You are already enrolled in this course.');
        window.setTimeout(() => {
          void this.router.navigate(['/course-details', this.courseId()]);
        }, 700);
        return;
      }

      if (error instanceof HttpErrorResponse && error.status >= 200 && error.status < 300) {
        this.learningApi.markCourseAsEnrolledLocally(this.courseId());
        this.successMessage.set('Payment successful. You are now enrolled in this course.');
        window.setTimeout(() => {
          void this.router.navigate(['/course-details', this.courseId()]);
        }, 900);
        return;
      }

      this.successMessage.set('Enrollment save করা যায়নি। আবার চেষ্টা করুন।');
    } finally {
      this.isProcessing.set(false);
    }
  }
}
