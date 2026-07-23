import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { NotificationService, Notification } from '../../Service/notification-service';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';
import { Navbar } from '../../shared/navbar/navbar';

type Filter = 'all' | 'unread';

/**
 * Full notification history page. The bell dropdown shows a peek; this is the
 * complete list with an unread filter and mark-all-read — all off the existing
 * NotificationService (getAll / markRead / markAllRead), no new backend.
 */
@Component({
  selector: 'app-notifications',
  imports: [Navbar],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Notifications {
  private readonly svc = inject(NotificationService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly lang = inject(LanguageService);

  protected readonly items = signal<Notification[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly filter = signal<Filter>('all');

  protected readonly unreadCount = computed(() => this.items().filter((n) => !n.isRead).length);

  protected readonly visible = computed(() =>
    this.filter() === 'unread' ? this.items().filter((n) => !n.isRead) : this.items(),
  );

  constructor() {
    void this.load();
  }

  private async load(): Promise<void> {
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(this.svc.getAll());
      const data = (res as any)?.data ?? (res as any)?.Data ?? [];
      this.items.set(Array.isArray(data) ? data : []);
    } catch {
      this.items.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  protected setFilter(f: Filter): void {
    this.filter.set(f);
  }

  protected async markAllRead(): Promise<void> {
    if (this.unreadCount() === 0) return;
    try {
      await firstValueFrom(this.svc.markAllRead());
      this.items.update((list) => list.map((n) => ({ ...n, isRead: true })));
    } catch { /* best-effort */ }
  }

  protected open(n: Notification): void {
    if (!n.isRead) {
      this.svc.markRead(n.id).subscribe({ error: () => {} });
      this.items.update((list) => list.map((i) => (i.id === n.id ? { ...i, isRead: true } : i)));
    }
    if (n.link) this.router.navigateByUrl(n.link);
  }

  protected getIcon(type: string): string {
    const map: Record<string, string> = {
      success: '✅', error: '⚠️', warning: '⚠️', info: '📢',
      lesson: '📚', quiz: '📝', certificate: '🏆',
    };
    return map[type] ?? '🔔';
  }

  protected timeAgo(dateStr: string): string {
    const t = this.lang.t();
    const diff = Date.now() - new Date(dateStr).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1) return t.timeJustNow;
    if (m < 60) return `${m} ${t.timeMinutesAgo}`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h} ${t.timeHoursAgo}`;
    return `${Math.floor(h / 24)} ${t.timeDaysAgo}`;
  }
}
