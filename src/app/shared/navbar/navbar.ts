import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription, firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';
import { LiveClassService } from '../../Service/live-class-service';
import { LearningApiService } from '../../Service/learning-api.service';
import { NotificationBell } from '../notification-bell/notification-bell';

/** Compact live-class row shown in the navbar "Live" dropdown. */
type NavLiveItem = {
  id: string;
  title: string;
  courseTitle: string;
  hostName: string;
  kind: 'free' | 'scheduled';
};

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NotificationBell],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly liveClassService = inject(LiveClassService);
  private readonly learningApi = inject(LearningApiService);
  readonly lang = inject(LanguageService);

  protected readonly isLoggedIn = signal(false);
  protected readonly userName = signal('');
  protected readonly userRole = signal<number | null>(null);
  protected readonly isTeacher = computed(() => this.userRole() === 1);
  protected readonly isAdmin = computed(() => this.userRole() === 2);
  // Leaderboard শুধু logged-in student (Role = 0) দেখবে
  protected readonly isStudent = computed(() => this.isLoggedIn() && this.userRole() === 0);
  protected readonly userInitial = computed(() => this.userName().charAt(0).toUpperCase());
  protected readonly mobileMenuOpen = signal(false);

  /** True → the navbar "Live" button blinks because a live class relevant to THIS user is on air. */
  protected readonly liveActive = signal(false);

  /** On-air classes surfaced in the navbar "Live" dropdown. */
  protected readonly freeClasses = signal<NavLiveItem[]>([]);
  protected readonly scheduledClasses = signal<NavLiveItem[]>([]);
  protected readonly hasLiveClasses = computed(
    () => this.freeClasses().length > 0 || this.scheduledClasses().length > 0
  );

  private readonly subs = new Subscription();
  private livePollTimer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.subs.add(this.authService.isLoggedIn$.subscribe((v) => {
      this.isLoggedIn.set(v);
      void this.refreshLiveStatus();
    }));
    this.subs.add(
      this.authService.currentUser$.subscribe((user) => {
        if (user?.fullName) this.userName.set(user.fullName);
        this.userRole.set(typeof user?.role === 'number' ? user.role : null);
        void this.refreshLiveStatus();
      })
    );

    const user = this.authService.getCurrentUser();
    if (user) {
      this.userName.set(user.fullName || user.email);
      this.userRole.set(typeof user?.role === 'number' ? user.role : null);
    }

    // Poll so the button starts/stops blinking within ~30s of a class going live/ending.
    void this.refreshLiveStatus();
    this.livePollTimer = setInterval(() => void this.refreshLiveStatus(), 30000);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    if (this.livePollTimer) clearInterval(this.livePollTimer);
  }

  /**
   * Decide whether the "Live" button should blink — targeted, NOT for everyone:
   *  • Scheduled (course) live class → enrolled students + the teacher who teaches it.
   *  • Free live class → the host teacher, or students enrolled in / following its course.
   *  • Admin / logged-out / unrelated → never.
   */
  private async refreshLiveStatus(): Promise<void> {
    try {
      // Logged-out visitors never see live classes here (same as the original logic).
      if (!this.isLoggedIn()) {
        this.scheduledClasses.set([]);
        this.freeClasses.set([]);
        this.liveActive.set(false);
        return;
      }

      const role = this.userRole();

      // ── Scheduled (course) live classes ──
      // The endpoint already targets the caller: courses they're enrolled in or teach.
      let scheduled: any[] = [];
      try {
        const sres: any = await firstValueFrom(this.liveClassService.getMyActiveScheduled());
        scheduled = (sres?.data ?? sres?.Data ?? []) as any[];
      } catch { /* not enrolled/teaching anything, or unauthorized */ }
      this.scheduledClasses.set(scheduled.map((c) => this.toLiveItem(c, 'scheduled')));

      // ── Free live classes (targeted — NOT the public list) ──
      const free = await this.visibleFreeClasses(role);
      this.freeClasses.set(free.map((c) => this.toLiveItem(c, 'free')));

      // The button blinks whenever something relevant to THIS user is on air.
      this.liveActive.set(this.hasLiveClasses());
    } catch {
      this.scheduledClasses.set([]);
      this.freeClasses.set([]);
      this.liveActive.set(false);
    }
  }

  /**
   * Free live classes this user is allowed to see in the navbar:
   *   • Teacher (role 1) → their own on-air free classes.
   *   • Student (role 0) → free classes for a course they're enrolled in OR following.
   *   • Anyone else (e.g. admin) → none.
   */
  private async visibleFreeClasses(role: number | null): Promise<any[]> {
    // Teacher → only their own active free classes.
    if (role === 1) {
      try {
        const res: any = await firstValueFrom(this.liveClassService.getMyFree());
        const mine = (res?.data ?? res?.Data ?? []) as any[];
        return mine.filter((c) => (c.isActive ?? c.IsActive ?? true));
      } catch { return []; }
    }

    // Student → free classes tied to a course they're enrolled in or following.
    if (role === 0) {
      let active: any[] = [];
      try {
        const res: any = await firstValueFrom(this.liveClassService.getActiveFree());
        active = (res?.data ?? res?.Data ?? []) as any[];
      } catch { return []; }
      if (active.length === 0) return [];

      const courseIds = [...new Set(
        active.map((c) => String(c.courseId ?? c.CourseId ?? '')).filter(Boolean)
      )];
      if (courseIds.length === 0) return [];

      // Courses the student follows ("interest").
      let allowed = new Set<string>();
      try {
        const intRes: any = await firstValueFrom(this.liveClassService.getMyInterests());
        allowed = new Set<string>((intRes?.data ?? intRes?.Data ?? []).map((x: any) => String(x)));
      } catch { /* follows none */ }

      // Add courses the student is enrolled in (check only those not already allowed).
      for (const id of courseIds) {
        if (allowed.has(id)) continue;
        try {
          if (await firstValueFrom(this.learningApi.checkMyEnrollment(id))) allowed.add(id);
        } catch { /* treat as not enrolled */ }
      }

      return active.filter((c) => allowed.has(String(c.courseId ?? c.CourseId ?? '')));
    }

    // Admin / unknown role → nothing surfaced.
    return [];
  }

  /** Normalise an API live-class payload (camel or Pascal case) into a dropdown row. */
  private toLiveItem(c: any, kind: 'free' | 'scheduled'): NavLiveItem {
    return {
      id: c.id ?? c.Id ?? '',
      title: c.title ?? c.Title ?? '',
      courseTitle: c.courseTitle ?? c.CourseTitle ?? '',
      hostName: c.hostName ?? c.HostName ?? '',
      kind,
    };
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  /** "Vision" nav link → smooth-scroll to the "Nirvor Nije Sikhi" About section on the home page. */
  protected goToVision(event: Event): void {
    event.preventDefault();
    this.mobileMenuOpen.set(false);

    const scrollToAbout = () => {
      const el = document.getElementById('aboutUs');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const path = this.router.url.split('?')[0].split('#')[0];
    if (path === '/homepage' || path === '/' || path === '') {
      scrollToAbout();
    } else {
      // Different page → land on home first, then scroll once the section renders.
      this.router.navigateByUrl('/homepage').then(() => setTimeout(scrollToAbout, 120));
    }
  }

  protected logout(): void {
    this.authService.logout();
    this.mobileMenuOpen.set(false);
    this.router.navigateByUrl('/login');
  }
}
