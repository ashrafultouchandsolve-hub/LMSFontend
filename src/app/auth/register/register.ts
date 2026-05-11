import { Component, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly isSubmitting = signal(false);
  protected readonly apiMessage = signal('');
  protected readonly isTeacherPending = signal(false); // ✅ Teacher pending state
  protected readonly showPassword = signal(false);
  protected readonly showConfirmPassword = signal(false);
  readonly lang = inject(LanguageService);

  protected readonly registerForm = new FormGroup({
    fullname: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    role: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmPassword: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  protected submit(): void {
    this.registerForm.markAllAsTouched();
    this.apiMessage.set('');

    if (this.registerForm.invalid || this.isSubmitting()) {
      this.apiMessage.set('Fill all the fields correctly.');
      return;
    }

    const value = this.registerForm.getRawValue();

    if (value.password !== value.confirmPassword) {
      this.apiMessage.set('Passwords do not match.');
      return;
    }

    this.isSubmitting.set(true);

    this.authService
      .register(value.fullname, value.email, value.password, Number(value.role))
      .subscribe({
        next: (response: any) => {
          this.isSubmitting.set(false);

          // ✅ Teacher register করলে pending message দেখাও
          if (response.status === 'Pending') {
            this.isTeacherPending.set(true);
            this.apiMessage.set('Registration successful! Your account is pending admin approval. You will be able to login once approved.');
            return;
          }

          // Student → onboarding এ যাও
          this.apiMessage.set(response.message ?? 'Registration successful! Redirecting...');
          setTimeout(() => {
            this.router.navigateByUrl('/onboarding-preferences');
          }, 2000);
        },
        error: (error: HttpErrorResponse) => {
          this.isSubmitting.set(false);
          const extractedMessage = this.extractErrorMessage(error);
          if (extractedMessage) { this.apiMessage.set(extractedMessage); return; }
          if (typeof error.error === 'string' && error.error.trim()) { this.apiMessage.set(error.error); return; }
          const serverMessage = error.error?.message as string | undefined;
          if (serverMessage) { this.apiMessage.set(serverMessage); return; }
          this.apiMessage.set('Registration failed. Please try again.');
        },
      });
  }

  private extractErrorMessage(error: HttpErrorResponse): string {
    const errors = error.error?.errors as Record<string, string[]> | undefined;
    if (errors) {
      const firstKey = Object.keys(errors)[0];
      const firstError = firstKey ? errors[firstKey]?.[0] : undefined;
      if (firstError) return firstError;
    }
    return '';
  }

  togglePasswordVisibility(): void {
    this.showPassword.update(v => !v);
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword.update(v => !v);
  }
}