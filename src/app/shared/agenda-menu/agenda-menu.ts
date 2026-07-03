import { Component, HostListener, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AgendaService, AgendaItem } from '../../Service/agenda.service';
import { LanguageService } from '../../Service/language.service';

/**
 * Navbar/dashboard "Todo" — a gradient ticker pill that auto-rotates through
 * the student's agenda items (live classes, exams, ending courses) and opens
 * a themed dropdown. Deliberately styled opposite to the notification bell so
 * the two never read as the same thing.
 */
@Component({
  selector: 'app-agenda-menu',
  imports: [RouterLink],
  templateUrl: './agenda-menu.html',
  styleUrl: './agenda-menu.css',
})
export class AgendaMenu implements OnInit, OnDestroy {
  protected readonly agenda = inject(AgendaService);
  protected readonly lang = inject(LanguageService);

  protected readonly isOpen = signal(false);
  protected readonly tickerIndex = signal(0);
  /** The line sliding out during a rotation (null on first paint — nothing exits). */
  protected readonly prevText = signal<string | null>(null);
  /** Bumped each rotation — keys the @for so both carousel lines re-render and animate. */
  protected readonly animKey = signal(0);

  private refreshTimer: any;
  private tickerTimer: any;

  /** Current pill line — falls back to the static "Todo" label when idle. */
  protected readonly tickerText = computed(() => {
    const items = this.agenda.items();
    if (items.length === 0) return `🗓️ ${this.lang.t().agNavLabel}`;
    return this.itemText(items[this.tickerIndex() % items.length]);
  });

  private itemText(it: AgendaItem): string {
    return `${it.icon} ${it.courseTitle} · ${this.agenda.meta(it)}`;
  }

  ngOnInit(): void {
    void this.agenda.refresh();
    this.refreshTimer = setInterval(() => void this.agenda.refresh(), 60_000);
    this.tickerTimer = setInterval(() => {
      const items = this.agenda.items();
      if (items.length < 2 || this.isOpen()) return; // nothing to rotate / hold still while reading
      const i = this.tickerIndex() % items.length;
      this.prevText.set(this.itemText(items[i]));
      this.tickerIndex.set((i + 1) % items.length);
      this.animKey.update((k) => k + 1);
    }, 3_500);
  }

  ngOnDestroy(): void {
    clearInterval(this.refreshTimer);
    clearInterval(this.tickerTimer);
  }

  protected toggle(): void {
    const opening = !this.isOpen();
    this.isOpen.set(opening);
    if (opening) void this.agenda.refresh(true);
  }

  protected close(): void {
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent): void {
    if (!(e.target as HTMLElement).closest('.agenda-wrap')) this.isOpen.set(false);
  }
}
