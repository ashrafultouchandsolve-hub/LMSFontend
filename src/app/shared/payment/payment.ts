import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { LearningApiService } from '../../Service/learning-api.service';

@Component({
  selector: 'app-payment',
  imports: [RouterLink],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Payment {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly learningApi = inject(LearningApiService);

  protected readonly isProcessing = signal(false);
  protected readonly message = signal('');
  protected readonly isError = signal(false);

  protected readonly courseTitle = signal('Course Enrollment');
  protected readonly payableAmount = signal(0);
  protected readonly courseId = signal('');

  protected readonly totalPayableText = computed(() => {
    const amount = this.payableAmount();
    return amount <= 0 ? 'Free' : `৳${amount}`;
  });

  constructor() {
    const title = this.route.snapshot.queryParamMap.get('courseTitle')?.trim();
    const amountParam = this.route.snapshot.queryParamMap.get('amount');
    const parsedAmount = Number(amountParam);
    const selectedCourseId = this.route.snapshot.queryParamMap.get('courseId')?.trim();

    if (title) this.courseTitle.set(title);
    if (!Number.isNaN(parsedAmount) && parsedAmount >= 0) this.payableAmount.set(parsedAmount);
    if (selectedCourseId) this.courseId.set(selectedCourseId);
  }

  protected async initiatePayment(): Promise<void> {
    if (!this.courseId()) {
      this.isError.set(true);
      this.message.set('Course ID পাওয়া যায়নি। আবার course page থেকে আসুন।');
      return;
    }

    this.isProcessing.set(true);
    this.message.set('');
    this.isError.set(false);

    try {
      // Call backend to initiate payment
      const response: any = await firstValueFrom(
        this.learningApi.initiatePayment({ courseId: this.courseId() })
      );

      // Free course — directly enrolled
      if (response.isFree) {
        this.learningApi.markCourseAsEnrolledLocally(this.courseId());
        this.message.set('✅ Free course! You are now enrolled.');
        setTimeout(() => void this.router.navigate(['/course-details', this.courseId()]), 1000);
        return;
      }

      // Paid course — redirect to SSLCommerz gateway
      if (response.gatewayUrl) {
        this.message.set('Redirecting to payment gateway...');
        window.location.href = response.gatewayUrl;
        return;
      }

      this.isError.set(true);
      this.message.set('Payment gateway URL পাওয়া যায়নি। আবার চেষ্টা করুন।');

    } catch (error) {
      if (error instanceof HttpErrorResponse && error.status === 409) {
        this.learningApi.markCourseAsEnrolledLocally(this.courseId());
        this.message.set('You are already enrolled in this course.');
        setTimeout(() => void this.router.navigate(['/course-details', this.courseId()]), 700);
        return;
      }
      this.isError.set(true);
      this.message.set('Payment initiate করা যায়নি। আবার চেষ্টা করুন।');
    } finally {
      this.isProcessing.set(false);
    }
  }
}