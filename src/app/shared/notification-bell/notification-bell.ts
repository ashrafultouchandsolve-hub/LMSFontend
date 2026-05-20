import { Component, inject, signal, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotificationService, Notification } from '../../Service/notification-service';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-notification-bell',
  imports: [CommonModule],
  templateUrl: './notification-bell.html',
  styleUrl:    './notification-bell.css',
})
export class NotificationBell implements OnInit {
  private readonly svc       = inject(NotificationService);
  protected readonly authSvc   = inject(AuthService);
  private readonly router    = inject(Router);

  readonly notifications = signal<Notification[]>([]);
  readonly unreadCount   = signal(0);
  readonly isOpen        = signal(false);
  private refreshTimer: any;

  ngOnInit() {
    if (!this.authSvc.isLoggedIn()) return;
    this.load();
    // Refresh every 30 seconds
    this.refreshTimer = setInterval(() => this.loadCount(), 30000);
  }

  ngOnDestroy() {
    clearInterval(this.refreshTimer);
  }

  private load() {
    this.svc.getAll().subscribe({
      next: (res) => {
        const data = (res as any).data ?? (res as any).Data ?? [];
        this.notifications.set(data);
        this.unreadCount.set(data.filter((n: Notification) => !n.isRead).length);
      },
      error: () => {}
    });
  }

  private loadCount() {
    this.svc.getUnreadCount().subscribe({
      next: (res) => {
        const count = (res as any).count ?? (res as any).Count ?? 0;
        this.unreadCount.set(count);
        if (count > 0) this.load();
      },
      error: () => {}
    });
  }

  toggle() {
    this.isOpen.update(v => !v);
    if (this.isOpen()) this.load();
  }

  markAllRead() {
    this.svc.markAllRead().subscribe({
      next: () => {
        this.notifications.update(list => list.map(n => ({ ...n, isRead: true })));
        this.unreadCount.set(0);
      }
    });
  }

  clickNotification(n: Notification) {
    if (!n.isRead) {
      this.svc.markRead(n.id).subscribe();
      this.notifications.update(list =>
        list.map(item => item.id === n.id ? { ...item, isRead: true } : item)
      );
      this.unreadCount.update(c => Math.max(0, c - 1));
    }
    this.isOpen.set(false);
    if (!n.link) return;

    // Try to navigate directly to the lesson video when possible.
    try {
      const link = n.link as string;

      // Extract courseId from common routes: /course-details/:id or /enrolled-course/:id
      const courseMatch = link.match(/(?:course-details|enrolled-course)\/([-A-Za-z0-9_]+)/);
      const courseId = courseMatch ? courseMatch[1] : null;

      // Extract lessonId from query param or fragment or /lesson/:id
      const lessonQueryMatch = link.match(/[?&]lessonId=([^&]+)/) || link.match(/[#]lesson=([^&]+)/) || link.match(/lesson\/([-A-Za-z0-9_]+)/);
      const lessonId = lessonQueryMatch ? lessonQueryMatch[1] : null;

      if (courseId && lessonId) {
        // Navigate to enrolled-course with lessonId so player opens that lesson
        this.router.navigate(['/enrolled-course', courseId], { queryParams: { lessonId } });
        return;
      }

      if (courseId) {
        // Open enrolled course (player will default to first lesson)
        this.router.navigate(['/enrolled-course', courseId]);
        return;
      }

      // If link contains a time parameter (t= or start=) and a video URL, preserve it
      const timeMatch = link.match(/[?&#](?:t|start)=([0-9]+)/);
      if (timeMatch) {
        // If it's an external video URL, navigate to it directly
        this.router.navigateByUrl(link);
        return;
      }

      // Fallback to original link navigation
      this.router.navigateByUrl(link);
    } catch (err) {
      // If parsing failed, just navigate to link
      this.router.navigateByUrl(n.link as string);
    }
  }

  // Close on outside click
  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (!target.closest('.notif-wrap')) {
      this.isOpen.set(false);
    }
  }

  getIcon(type: string): string {
    const map: Record<string, string> = {
      lesson:      '📚',
      quiz:        '📝',
      certificate: '🏆',
      info:        '📢',
    };
    return map[type] ?? '🔔';
  }

  timeAgo(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1)  return 'Just now';
    if (m < 60) return `${m} minutes ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h} hours ago`;
    return `${Math.floor(h / 24)} days ago`;
  }
}