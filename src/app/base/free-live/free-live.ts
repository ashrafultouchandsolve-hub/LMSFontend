import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Navbar } from '../../shared/navbar/navbar';
import { LanguageService } from '../../Service/language.service';
import { LiveClassService } from '../../Service/live-class-service';
import { LearningApiService } from '../../Service/learning-api.service';
import { AuthService } from '../../Service/auth.service';

/** Unified card model — free (guest-joinable) or scheduled (course, authed). */
type LiveItem = {
  id: string;
  title: string;
  description: string;
  courseTitle: string;
  hostName: string;
  kind: 'free' | 'scheduled';
};

@Component({
  selector: 'app-free-live',
  imports: [Navbar, FormsModule],
  templateUrl: './free-live.html',
  styleUrl: './free-live.css',
})
export class FreeLive implements OnInit, OnDestroy {
  private readonly svc = inject(LiveClassService);
  private readonly learningApi = inject(LearningApiService);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  protected readonly lang = inject(LanguageService);

  protected readonly classes = signal<LiveItem[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly joiningId = signal<string | null>(null);
  protected joinName = '';

  private poll: any;

  ngOnInit(): void {
    this.load();
    // keep the list fresh while the page is open
    this.poll = setInterval(() => this.load(true), 15000);
  }

  ngOnDestroy(): void {
    clearInterval(this.poll);
  }

  private async load(silent = false): Promise<void> {
    if (!silent) this.isLoading.set(true);
    try {
      // Scheduled (course) classes — endpoint already targets enrolled/taught courses.
      let scheduled: LiveItem[] = [];
      if (this.authService.isLoggedIn()) {
        try {
          const sres: any = await firstValueFrom(this.svc.getMyActiveScheduled());
          scheduled = (sres?.data ?? sres?.Data ?? []).map((c: any) => this.toItem(c, 'scheduled'));
        } catch { /* none enrolled/taught */ }
      }

      // Free classes — show ONLY those tied to a course this user is enrolled in or following.
      // Un-enrolled-and-not-following (or logged-out) users see no free-class cards here.
      const free = (await this.visibleFreeClasses()).map((c: any) => this.toItem(c, 'free'));

      // Scheduled (your enrolled/taught courses) first, then the allowed free classes.
      this.classes.set([...scheduled, ...free]);
      this.isLoading.set(false);
    } catch {
      this.isLoading.set(false);
    }
  }

  /** Normalise an API live-class payload (camel or Pascal case) into a card. */
  private toItem(c: any, kind: 'free' | 'scheduled'): LiveItem {
    return {
      id: c.id ?? c.Id ?? '',
      title: c.title ?? c.Title ?? '',
      description: c.description ?? c.Description ?? '',
      courseTitle: c.courseTitle ?? c.CourseTitle ?? '',
      hostName: c.hostName ?? c.HostName ?? '',
      kind,
    };
  }

  /**
   * Free classes this user may see here (mirrors the navbar rule):
   *   • Teacher (role 1) → their own on-air free classes.
   *   • Student (role 0) → free classes for a course they're enrolled in OR following.
   *   • Logged-out / un-enrolled-and-not-following / admin → none.
   */
  private async visibleFreeClasses(): Promise<any[]> {
    const user = this.authService.getCurrentUser();
    const role = typeof user?.role === 'number' ? user.role : null;

    // Teacher → only their own active free classes.
    if (role === 1) {
      try {
        const res: any = await firstValueFrom(this.svc.getMyFree());
        return ((res?.data ?? res?.Data ?? []) as any[]).filter((c) => (c.isActive ?? c.IsActive ?? true));
      } catch { return []; }
    }

    // Student → free classes tied to a course they're enrolled in or following.
    if (role === 0) {
      let active: any[] = [];
      try {
        const res: any = await firstValueFrom(this.svc.getActiveFree());
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
        const intRes: any = await firstValueFrom(this.svc.getMyInterests());
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

    // Logged-out / admin / unknown role → nothing surfaced.
    return [];
  }

  /** Scheduled course classes go straight to the authed live room (no guest name). */
  protected joinScheduled(id: string): void {
    this.router.navigate(['/live-class', id]);
  }

  protected refresh(): void {
    this.load();
  }

  protected openJoin(id: string): void {
    // Free live classes are for enrolled / following students only — both require
    // login. Logged-in users join with their real identity (no guest prompt);
    // guests are sent to login first.
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/free-live', id]);
    } else {
      this.router.navigate(['/login'], { queryParams: { redirect: `/free-live/${id}` } });
    }
  }

  protected cancelJoin(): void {
    this.joiningId.set(null);
  }

  protected confirmJoin(): void {
    const id = this.joiningId();
    if (!id) return;
    const name = this.joinName.trim();
    this.router.navigate(['/free-live', id], {
      queryParams: name ? { name } : {},
    });
  }
}
