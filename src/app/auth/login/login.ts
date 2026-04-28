import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';

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

  protected readonly isSubmitting = signal(false);
  protected readonly isRedirecting = signal(false);
  protected readonly apiMessage = signal('');
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
        await this.delay(2000);
        
        // Return URL থেকে redirect করুন অথবা homepage এ যান
        const returnUrl = this.route.snapshot.queryParams['returnUrl'];
        await this.router.navigateByUrl(returnUrl || '/homepage');
      },
      error: (error) => {
        this.isSubmitting.set(false);
        const errorMessage = error.error?.message || 'Login failed. Please check your credentials and try again.';
        this.apiMessage.set(errorMessage);
      },
    });
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      window.setTimeout(() => resolve(), ms);
    });
  }
}
