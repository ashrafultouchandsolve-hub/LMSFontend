import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementService, Announcement } from '../../Service/announcement-service';

@Component({
  selector: 'app-announcement-banner',
  imports: [CommonModule],
  templateUrl: './announcement-banner.html',
  styleUrl:    './announcement-banner.css',
})
export class AnnouncementBanner implements OnInit, OnDestroy {
  private readonly svc = inject(AnnouncementService);

  readonly items       = signal<Announcement[]>([]);
  readonly activeIndex = signal(0);

  private refreshTimer: any;
  private rotateTimer:  any;

  ngOnInit() {
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
  }

  private loadAnnouncements() {
    const key       = 'dismissed_announcements';
    const dismissed = JSON.parse(localStorage.getItem(key) || '[]') as string[];

    this.svc.getActive().subscribe({
      next: (res) => {
        const all     = res.data ?? [];
        const visible = all.filter((a: Announcement) => !dismissed.includes(a.id));
        this.items.set(visible);

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
  }

  get current(): Announcement | null {
    return this.items()[this.activeIndex()] ?? null;
  }
}