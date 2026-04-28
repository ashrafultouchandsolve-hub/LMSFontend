import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';

type ProfileUser = { id?: number; fullName?: string; email?: string; role?: number; };

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  readonly lang = inject(LanguageService);

  protected readonly user = signal<ProfileUser | null>(null);
  protected readonly userName = computed(() => this.user()?.fullName || 'Student');
  protected readonly userEmail = computed(() => this.user()?.email || 'No email found');
  protected readonly isLoggedIn = computed(() => !!this.user());
  protected readonly isTeacher = computed(() => this.user()?.role === 1);
  protected readonly userInitial = computed(() => this.userName().charAt(0).toUpperCase());
  protected readonly userRole = computed(() => this.user()?.role === 1 ? 'Instructor' : 'Student');

  constructor() {
    this.authService.currentUser$.pipe(takeUntilDestroyed()).subscribe((currentUser: ProfileUser | null) => { this.user.set(currentUser); });
    const currentUser = this.authService.getCurrentUser() as ProfileUser | null;
    if (currentUser) this.user.set(currentUser);
  }

  protected goToHome(): void { this.router.navigateByUrl('/homepage'); }
  protected logout(): void { this.authService.logout(); this.router.navigateByUrl('/login'); }
}
