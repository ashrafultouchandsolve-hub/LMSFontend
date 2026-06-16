import { Component, inject, signal, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { LearningApiService } from '../../Service/learning-api.service';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-video-history',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './video-history.html',
  styleUrl: './video-history.css'
})
export class VideoHistoryComponent implements OnInit {
  private api = inject(LearningApiService);
  private authService = inject(AuthService);
  private router = inject(Router);
  protected readonly lang = inject(LanguageService);

  history = signal<any[]>([]);
  isLoading = signal(true);

  ngOnInit() {
    this.loadHistory();
  }

  async loadHistory() {
    this.isLoading.set(true);
    try {
      const userId = this.authService.getCurrentUser()?.id ?? '';
      if (!userId) {
        this.router.navigate(['/login']);
        return;
      }
      const res = await firstValueFrom(this.api.getVideoHistory(userId));
      const data = (res as any)?.Data ?? (res as any)?.data ?? [];
      this.history.set(Array.isArray(data) ? data : []);
    } catch {
      this.history.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('bn-BD', {
      day: 'numeric', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  }

  goBack() {
    this.router.navigate(['/homepage']);
  }
}