import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';
import { CouponDiscountType, CouponService, CouponValidation } from '../../Service/coupon.service';

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
  private readonly couponService = inject(CouponService);
  protected readonly lang = inject(LanguageService);

  protected readonly isProcessing = signal(false);
  protected readonly message = signal('');
  protected readonly isError = signal(false);

  protected readonly courseTitle = signal('Course Enrollment');
  /** The course price before any coupon (from the course page's discount-aware link). */
  protected readonly payableAmount = signal(0);
  protected readonly courseId = signal('');

  // ── Coupon ────────────────────────────────────────
  protected readonly couponInput = signal('');
  protected readonly isCheckingCoupon = signal(false);
  protected readonly couponError = signal('');
  /** Set only once a code has been accepted by the backend. */
  protected readonly appliedCoupon = signal<CouponValidation | null>(null);

  /** What the student actually pays — the coupon quote wins when one is applied. */
  protected readonly finalAmount = computed(() => {
    const coupon = this.appliedCoupon();
    return coupon ? coupon.finalPrice : this.payableAmount();
  });

  protected readonly totalPayableText = computed(() => {
    const amount = this.finalAmount();
    return amount <= 0 ? 'Free' : `৳${amount}`;
  });

  protected readonly originalPayableText = computed(() => `৳${this.payableAmount()}`);

  protected readonly savedText = computed(() => {
    const coupon = this.appliedCoupon();
    return coupon ? `৳${coupon.discountAmount}` : '';
  });

  /** "20% off" / "৳500 off" — the badge next to the applied code. */
  protected readonly couponValueLabel = computed(() => {
    const coupon = this.appliedCoupon();
    if (!coupon) return '';
    return coupon.discountType === CouponDiscountType.Percent
      ? `${coupon.discountValue}% off`
      : `৳${coupon.discountValue} off`;
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

  /** Check the typed code against this course. The backend re-checks at payment time too. */
  protected async applyCoupon(): Promise<void> {
    const code = this.couponInput().trim();
    if (!code) {
      this.couponError.set(this.lang.isBangla() ? 'কুপন কোড লিখুন।' : 'Enter a coupon code.');
      return;
    }
    if (!this.courseId()) return;

    this.isCheckingCoupon.set(true);
    this.couponError.set('');

    try {
      const result = await firstValueFrom(this.couponService.validate(code, this.courseId()));
      if (result.valid) {
        this.appliedCoupon.set(result);
        this.couponError.set('');
      } else {
        this.appliedCoupon.set(null);
        this.couponError.set(result.message);
      }
    } catch {
      this.appliedCoupon.set(null);
      this.couponError.set(
        this.lang.isBangla() ? 'কুপন যাচাই করা যায়নি। আবার চেষ্টা করুন।' : 'Could not check the coupon. Try again.',
      );
    } finally {
      this.isCheckingCoupon.set(false);
    }
  }

  protected removeCoupon(): void {
    this.appliedCoupon.set(null);
    this.couponInput.set('');
    this.couponError.set('');
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
        this.learningApi.initiatePayment({
          courseId: this.courseId(),
          couponCode: this.appliedCoupon()?.code,
        })
      );

      // Free course, or a coupon that covered the whole price — enrolled without the gateway.
      if (response.isFree) {
        this.learningApi.markCourseAsEnrolledLocally(this.courseId());
        this.message.set(
          this.appliedCoupon()
            ? '✅ Coupon covered the full price! You are now enrolled.'
            : '✅ Free course! You are now enrolled.',
        );
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
      // The coupon can go stale between apply and pay (expired, or its last use was
      // taken). Drop it and say so, rather than a generic failure the student can't act on.
      if (error instanceof HttpErrorResponse && error.status === 400 && this.appliedCoupon()) {
        this.appliedCoupon.set(null);
        this.couponError.set(
          error.error?.message ??
            (this.lang.isBangla()
              ? 'কুপনটি আর কাজ করছে না — বাদ দেওয়া হলো।'
              : 'That coupon is no longer valid — it has been removed.'),
        );
        this.isError.set(true);
        this.message.set(
          this.lang.isBangla()
            ? 'কুপন ছাড়া দাম দেখানো হচ্ছে। আবার চেষ্টা করুন।'
            : 'Showing the price without the coupon. Please try again.',
        );
        return;
      }
      this.isError.set(true);
      this.message.set('Payment initiate করা যায়নি। আবার চেষ্টা করুন।');
    } finally {
      this.isProcessing.set(false);
    }
  }
}