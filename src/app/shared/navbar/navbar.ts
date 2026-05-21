import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';
import { NotificationBell } from '../notification-bell/notification-bell';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NotificationBell],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  readonly lang = inject(LanguageService);

  protected readonly isLoggedIn = signal(false);
  protected readonly userName = signal('');
  protected readonly userRole = signal<number | null>(null);
  protected readonly isTeacher = computed(() => this.userRole() === 1);
  protected readonly userInitial = computed(() => this.userName().charAt(0).toUpperCase());
  protected readonly mobileMenuOpen = signal(false);

  private readonly subs = new Subscription();

  ngOnInit(): void {
    this.subs.add(this.authService.isLoggedIn$.subscribe((v) => this.isLoggedIn.set(v)));
    this.subs.add(
      this.authService.currentUser$.subscribe((user) => {
        if (user?.fullName) this.userName.set(user.fullName);
        this.userRole.set(typeof user?.role === 'number' ? user.role : null);
      })
    );

    const user = this.authService.getCurrentUser();
    if (user) {
      this.userName.set(user.fullName || user.email);
      this.userRole.set(typeof user?.role === 'number' ? user.role : null);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  protected logout(): void {
    this.authService.logout();
    this.mobileMenuOpen.set(false);
    this.router.navigateByUrl('/login');
  }
}
