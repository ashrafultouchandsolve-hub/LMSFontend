import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { LanguageService } from '../../Service/language.service';
import { FreeLiveClass, LiveClassService } from '../../Service/live-class-service';

@Component({
  selector: 'app-free-live',
  imports: [Navbar, FormsModule],
  templateUrl: './free-live.html',
  styleUrl: './free-live.css',
})
export class FreeLive implements OnInit, OnDestroy {
  private readonly svc = inject(LiveClassService);
  private readonly router = inject(Router);
  protected readonly lang = inject(LanguageService);

  protected readonly classes = signal<FreeLiveClass[]>([]);
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

  private load(silent = false): void {
    if (!silent) this.isLoading.set(true);
    this.svc.getActiveFree().subscribe({
      next: (res: any) => {
        this.classes.set(res?.data ?? res?.Data ?? []);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false),
    });
  }

  protected refresh(): void {
    this.load();
  }

  protected openJoin(id: string): void {
    this.joiningId.set(id);
    this.joinName = '';
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
