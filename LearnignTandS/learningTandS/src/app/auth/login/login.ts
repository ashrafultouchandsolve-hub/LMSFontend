import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Service } from '../../Service/service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly authService = inject(Service);
  private readonly router = inject(Router);

  protected readonly isSubmitting = signal(false);
  protected readonly isRedirecting = signal(false);
  protected readonly apiMessage = signal('');

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

    this.authService.login(payload).subscribe({
      next: async (response) => {
        this.isSubmitting.set(false);
        this.apiMessage.set(response.message ?? 'Login successful. Preparing your dashboard...');

        if (response.token) {
          localStorage.setItem('auth_token', response.token);
        }

        localStorage.setItem('auth_logged_in', 'true');
        localStorage.setItem('auth_user_email', payload.email);

        this.isRedirecting.set(true);
        await this.delay(4000);
        await this.router.navigateByUrl('/homepage');
      },
      error: () => {
        this.isSubmitting.set(false);  
        this.apiMessage.set('Login failed. Please check your credentials and try again.');
      },
    });
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      window.setTimeout(() => resolve(), ms);
    });
  }
}
