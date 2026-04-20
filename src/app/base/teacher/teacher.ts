import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.html',
  styleUrl: './teacher.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Teacher {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly currentUser = toSignal(this.authService.currentUser$, {
    initialValue: this.authService.getCurrentUser(),
  });

  protected readonly isLoggedIn = computed(() => !!this.currentUser());
  protected readonly userName = computed(() => this.currentUser()?.fullName || 'Guest');
  protected readonly isTeacher = computed(() => this.currentUser()?.role === 1);
  protected readonly userInitial = computed(() => this.userName().charAt(0).toUpperCase());

  protected readonly teacherActions = [
    'Add Course (Coming Soon)',
    'Edit Course (Coming Soon)',
    'Delete Course (Coming Soon)',
    'Manage Class Schedule (Coming Soon)',
    'Review Student Progress (Coming Soon)',
    'Publish Assignments (Coming Soon)',
  ] as const;

  protected goToHome(): void {
    this.router.navigateByUrl('/homepage');
  }

  protected logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
