import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AdminService } from '../../Service/admin.service';
import { JwtService } from '../../Service/jwt.service';
import { AuthService } from '../../Service/auth.service';

/**
 * Admin panel → Settings: admin নিজের login email ও password বদলাতে পারে।
 * দুটোতেই current password লাগে (নিরাপত্তা)। email বদলালে backend নতুন token দেয়,
 * সেটা সাথে সাথে store করি যাতে session চালু থাকে — re-login লাগে না।
 */
@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-settings.html',
  styleUrl: './admin-settings.css',
})
export class AdminSettings {
  private readonly fb = inject(FormBuilder);
  private readonly adminService = inject(AdminService);
  private readonly jwtService = inject(JwtService);
  private readonly authService = inject(AuthService);

  protected readonly currentEmail = signal<string>(this.authService.getCurrentUser()?.email ?? '');

  protected readonly emailForm = this.fb.group({
    currentPassword: ['', Validators.required],
    newEmail: ['', [Validators.required, Validators.email]],
  });

  protected readonly passwordForm = this.fb.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  protected readonly emailMsg = signal<{ text: string; ok: boolean } | null>(null);
  protected readonly passwordMsg = signal<{ text: string; ok: boolean } | null>(null);
  protected readonly emailSubmitting = signal(false);
  protected readonly passwordSubmitting = signal(false);

  protected async submitEmail(): Promise<void> {
    this.emailMsg.set(null);
    if (this.emailForm.invalid) {
      this.emailForm.markAllAsTouched();
      return;
    }
    this.emailSubmitting.set(true);
    const { currentPassword, newEmail } = this.emailForm.getRawValue();
    try {
      const res = await firstValueFrom(this.adminService.changeAdminEmail(currentPassword!, newEmail!.trim()));
      // নতুন token + updated email সাথে সাথে store — session চালু থাকে।
      if (res?.token) this.jwtService.setToken(res.token);
      const applied = res?.email ?? newEmail!.trim();
      this.authService.updateCurrentUser({ email: applied });
      this.currentEmail.set(applied);
      this.emailForm.reset();
      this.emailMsg.set({ text: 'Email updated successfully.', ok: true });
    } catch (err: any) {
      this.emailMsg.set({ text: this.extractError(err, 'Could not update email.'), ok: false });
    } finally {
      this.emailSubmitting.set(false);
    }
  }

  protected async submitPassword(): Promise<void> {
    this.passwordMsg.set(null);
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    const { currentPassword, newPassword, confirmPassword } = this.passwordForm.getRawValue();
    if (newPassword !== confirmPassword) {
      this.passwordMsg.set({ text: 'New password and confirmation do not match.', ok: false });
      return;
    }
    this.passwordSubmitting.set(true);
    try {
      await firstValueFrom(this.adminService.changeAdminPassword(currentPassword!, newPassword!));
      this.passwordForm.reset();
      this.passwordMsg.set({ text: 'Password changed successfully.', ok: true });
    } catch (err: any) {
      this.passwordMsg.set({ text: this.extractError(err, 'Could not change password.'), ok: false });
    } finally {
      this.passwordSubmitting.set(false);
    }
  }

  private extractError(err: any, fallback: string): string {
    return err?.error?.message || err?.error?.Message || fallback;
  }
}
