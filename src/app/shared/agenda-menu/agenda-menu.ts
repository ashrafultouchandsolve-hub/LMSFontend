import { Component, HostListener, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AgendaService, AgendaItem } from '../../Service/agenda.service';
import { LanguageService } from '../../Service/language.service';

/**
 * Navbar "Todo" — Priority Timeline design.
 * The pill summarises the most urgent state (overdue → live → today → upcoming)
 * with a pulsing status dot + total count; the dropdown groups tasks into
 * Overdue / Today / Upcoming sections with colour-coded timeline cards.
 */
@Component({
  selector: 'app-agenda-menu',
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './agenda-menu.html',
  styleUrl: './agenda-menu.css',
})
export class AgendaMenu implements OnInit, OnDestroy {
  protected readonly agenda = inject(AgendaService);
  protected readonly lang = inject(LanguageService);

  protected readonly isOpen = signal(false);
  private refreshTimer: any;

  // ── Priority groups ──────────────────────────────────────────
  protected readonly overdue = computed(() => this.agenda.items().filter((i) => i.days < 0));
  protected readonly today = computed(() => this.agenda.items().filter((i) => i.days === 0));
  protected readonly upcoming = computed(() => this.agenda.items().filter((i) => i.days > 0));

  /** Pill summary — the most urgent state wins. */
  protected readonly pill = computed(() => {
    const t = this.lang.t();
    const overdueCount = this.overdue().length;
    if (overdueCount > 0) return { state: 'overdue', text: `${overdueCount} ${t.agPillOverdue}` };
    if (this.agenda.liveNowCount() > 0) return { state: 'live', text: t.agPillLive };
    const todayCount = this.today().length;
    if (todayCount > 0) return { state: 'today', text: `${todayCount} ${t.agPillToday}` };
    const upcomingCount = this.upcoming().length;
    if (upcomingCount > 0) return { state: 'upcoming', text: `${upcomingCount} ${t.agPillUpcoming}` };
    return { state: 'idle', text: `🗓️ ${t.agNavLabel}` };
  });

  ngOnInit(): void {
    void this.agenda.refresh();
    this.refreshTimer = setInterval(() => void this.agenda.refresh(), 60_000);
  }

  ngOnDestroy(): void {
    clearInterval(this.refreshTimer);
  }

  // ── Card text helpers ────────────────────────────────────────
  protected title(it: AgendaItem): string {
    return it.detail || it.courseTitle;
  }

  protected sub(it: AgendaItem): string {
    return `${it.courseTitle} · ${this.kindLabel(it)}`;
  }

  private kindLabel(it: AgendaItem): string {
    const t = this.lang.t();
    switch (it.kind) {
      case 'live':
      case 'upcoming': return t.agKindLive;
      case 'exam': return t.agKindExam;
      case 'ending': return t.agKindEnding;
    }
  }

  /** The right-side chip: "২ দিন দেরি" / "5:00 PM" / "আগামীকাল" / "৩ দিন"। */
  protected chip(it: AgendaItem): string {
    const bn = this.lang.isBangla();
    if (it.kind === 'live') return this.lang.t().agPillLive;
    if (it.days < 0) return bn ? `${-it.days} দিন দেরি` : `${-it.days}d late`;
    if (it.days === 0) {
      // Timed items (exam deadline / scheduled class) show the clock time today.
      if ((it.kind === 'exam' || it.kind === 'upcoming') && it.sortKey > 0) {
        return new Date(it.sortKey).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      }
      return bn ? 'আজ' : 'Today';
    }
    if (it.days === 1) return bn ? 'আগামীকাল' : 'Tomorrow';
    return bn ? `${it.days} দিন` : `${it.days} days`;
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
