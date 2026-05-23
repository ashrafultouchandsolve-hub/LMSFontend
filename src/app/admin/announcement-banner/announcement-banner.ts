import { Component, inject, signal, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AnnouncementService, Announcement } from '../../Service/announcement-service';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-announcement-banner',
  imports: [CommonModule],
  templateUrl: './announcement-banner.html',
  styleUrl:    './announcement-banner.css',
})
export class AnnouncementBanner implements OnInit, OnDestroy {
  private readonly svc = inject(AnnouncementService);
  private readonly authService = inject(AuthService);
  private readonly renderer = inject(Renderer2);
  private readonly document = inject(DOCUMENT);

  private readonly isTeacher = signal(false);

  readonly items       = signal<Announcement[]>([]);
  readonly activeIndex = signal(0);

  private refreshTimer: any;
  private rotateTimer:  any;

  ngOnInit() {
    const user = this.authService.getCurrentUser() as { role?: number } | null;
    this.isTeacher.set(user?.role === 1);

    if (this.isTeacher()) {
      this.items.set([]);
      this.setBannerActive(false);
      return;
    }

    this.loadAnnouncements();

    // ✅ প্রতি ৩০ সেকেন্ডে server থেকে check করবে
    this.refreshTimer = setInterval(() => this.loadAnnouncements(), 30000);

    // ✅ Multiple announcement থাকলে ৫ সেকেন্ডে rotate করবে
    this.rotateTimer = setInterval(() => {
      if (this.items().length > 1) {
        this.activeIndex.update(i => (i + 1) % this.items().length);
      }
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.refreshTimer);
    clearInterval(this.rotateTimer);
    this.setBannerActive(false);
  }

  private loadAnnouncements() {
    if (this.isTeacher()) return;

    const key       = 'dismissed_announcements';
    const dismissed = JSON.parse(localStorage.getItem(key) || '[]') as string[];

    this.svc.getActive().subscribe({
      next: (res) => {
        const all     = res.data ?? [];
        const visible = all.filter((a: Announcement) => !dismissed.includes(a.id));
        this.items.set(visible);
        this.setBannerActive(visible.length > 0);

        // index out of range হলে reset
        if (this.activeIndex() >= visible.length) {
          this.activeIndex.set(0);
        }
      },
      error: () => {}
    });
  }

  dismiss() {
    const current = this.items()[this.activeIndex()];
    if (!current) return;

    const key       = 'dismissed_announcements';
    const dismissed = JSON.parse(localStorage.getItem(key) || '[]') as string[];
    dismissed.push(current.id);
    localStorage.setItem(key, JSON.stringify(dismissed));

    const remaining = this.items().filter(a => a.id !== current.id);
    this.items.set(remaining);
    this.activeIndex.set(0);
    this.setBannerActive(remaining.length > 0);
  }

  private setBannerActive(isActive: boolean) {
    const body = this.document?.body;
    if (!body) return;

    if (isActive) {
      this.renderer.addClass(body, 'has-announcement');
    } else {
      this.renderer.removeClass(body, 'has-announcement');
    }
  }

  get current(): Announcement | null {
    return this.items()[this.activeIndex()] ?? null;
  }
}