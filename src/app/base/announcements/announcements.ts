import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AnnouncementService, Announcement } from '../../Service/announcement-service';
import { LanguageService } from '../../Service/language.service';
import { Navbar } from '../../shared/navbar/navbar';

/**
 * Student-facing announcements page. The dismissible top banner only shows one
 * at a time; this lists every currently-active announcement. Uses the public
 * getActive() endpoint (the /all list is admin-only), so no new backend.
 */
@Component({
  selector: 'app-announcements',
  imports: [Navbar],
  templateUrl: './announcements.html',
  styleUrl: './announcements.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Announcements {
  private readonly svc = inject(AnnouncementService);
  readonly lang = inject(LanguageService);

  protected readonly items = signal<Announcement[]>([]);
  protected readonly isLoading = signal(true);

  constructor() {
    void this.load();
  }

  private async load(): Promise<void> {
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(this.svc.getActive());
      const data = (res as any)?.data ?? (res as any)?.Data ?? [];
      this.items.set(Array.isArray(data) ? data : []);
    } catch {
      this.items.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  protected icon(type: string): string {
    const map: Record<string, string> = { info: '📢', warning: '⚠️', success: '✅', urgent: '🚨' };
    return map[type] ?? '📢';
  }

  protected formatDate(dateStr: string | null): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString(this.lang.isBangla() ? 'bn-BD' : 'en-US', {
      day: 'numeric', month: 'short', year: 'numeric',
    });
  }
}
