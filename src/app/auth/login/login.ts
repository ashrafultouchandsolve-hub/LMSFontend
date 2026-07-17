import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';
import { LearningApiService } from '../../Service/learning-api.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly learningApi = inject(LearningApiService);

  protected readonly isSubmitting = signal(false);
  protected readonly isRedirecting = signal(false);
  protected readonly apiMessage = signal('');
  protected readonly showPassword = signal(false);
  readonly lang = inject(LanguageService);

  protected readonly loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  protected submit(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid || this.isSubmitting() || this.isRedirecting()) {
      return;
    }

    const payload = this.loginForm.getRawValue();
    this.isSubmitting.set(true);
    this.apiMessage.set('');

    this.authService.login(payload.email, payload.password).subscribe({
      next: async (response) => {
        this.isSubmitting.set(false);
        this.apiMessage.set(response.message ?? 'Login successful. Preparing your dashboard...');
        this.isRedirecting.set(true);

        // ✅ Role check করে redirect করো
        const user = this.authService.getCurrentUser() as { role?: number } | null;

        // Student: enrollment + onboarding check cosmetic delay-এর সাথে parallel-এ চালাই — বাড়তি wait হয় না।
        const enrolledPromise = user?.role === 0 ? this.hasEnrollments() : Promise.resolve(false);
        const onboardingPendingPromise = user?.role === 0 ? this.needsStudentOnboarding() : Promise.resolve(false);
        await this.delay(1500);

        // Admin = 2 → সবসময় admin dashboard
        if (user?.role === 2) {
          await this.router.navigateByUrl('/admin');
          return;
        }

        // Student whose post-registration info modal (steps 02–04) was never completed
        // (tab closed / navigated away mid-flow) → back to the mandatory modal first.
        if (user?.role === 0 && (await onboardingPendingPromise)) {
          await this.router.navigateByUrl('/onboarding-preferences');
          return;
        }

        // Deep link (guard-এ আটকে login-এ এলে) — returnUrl আগে
        const returnUrl = this.route.snapshot.queryParams['returnUrl'];
        if (returnUrl) {
          await this.router.navigateByUrl(returnUrl);
          return;
        }

        // Teacher = 1 → নিজের dashboard (course manager)
        if (user?.role === 1) {
          await this.router.navigateByUrl('/teacher');
          return;
        }

        // Student = 0 → enrolled হলে dashboard, নতুন হলে homepage (course discovery)
        if (user?.role === 0) {
          await this.router.navigateByUrl((await enrolledPromise) ? '/profile' : '/homepage');
          return;
        }

        await this.router.navigateByUrl('/homepage');
      },
      error: (error) => {
        this.isSubmitting.set(false);
        const errorMessage = error.error?.message || 'Login failed. Please check your credentials and try again.';
        this.apiMessage.set(errorMessage);
      },
    });
  }

  /** Student-এর অন্তত একটা enrollment আছে কিনা — smart redirect-এর জন্য (error হলে false → homepage)। */
  private async hasEnrollments(): Promise<boolean> {
    try {
      const res: any = await firstValueFrom(this.learningApi.getMyEnrollments());
      const list = res?.data ?? res?.Data ?? [];
      return Array.isArray(list) && list.length > 0;
    } catch {
      return false;
    }
  }

  /** Post-registration info modal এখনো complete হয়নি কিনা (error হলে false — login কখনো আটকায় না)। */
  private async needsStudentOnboarding(): Promise<boolean> {
    try {
      const res: any = await firstValueFrom(this.learningApi.getMyStudentProfile());
      const data = res?.data ?? res?.Data;
      return !!data && !data.profileInfoCompletedAt;
    } catch {
      return false;
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      window.setTimeout(() => resolve(), ms);
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword.update(v => !v);
  }
}