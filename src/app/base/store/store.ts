import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LearningApiService } from '../../Service/learning-api.service';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';
import { environment } from '../../../environments/environments';

interface StoreItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  imagePath: string | null;
  fileUrl: string | null;
}

type Category = 'All' | 'Books' | 'Materials' | 'Resources';

@Component({
  selector: 'app-store',
  imports: [CommonModule, RouterLink],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store implements OnInit {
  private readonly http        = inject(HttpClient);
  protected readonly learningApi = inject(LearningApiService);
  private readonly authService = inject(AuthService);
  private readonly router      = inject(Router);
  readonly lang                = inject(LanguageService);

  readonly allItems    = signal<StoreItem[]>([]);
  readonly items       = signal<StoreItem[]>([]);
  readonly isLoading   = signal(true);
  readonly activeTab   = signal<Category>('All');

  protected readonly isLoggedIn       = signal(false);
  protected readonly userName         = signal('');
  protected readonly userRole         = signal<number | null>(null);
  protected readonly isTeacher        = computed(() => this.userRole() === 1);
  protected readonly userInitial      = computed(() => this.userName().charAt(0).toUpperCase());

  readonly  baseUrl = environment.baseUrl;

  readonly categories: Category[] = ['All', 'Books', 'Materials', 'Resources'];

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((v) => this.isLoggedIn.set(v));
    this.authService.currentUser$.subscribe((user) => {
      if (user?.fullName) this.userName.set(user.fullName);
      this.userRole.set(typeof user?.role === 'number' ? user.role : null);
    });

    const user = this.authService.getCurrentUser();
    if (user) {
      this.userName.set(user.fullName || user.email);
      this.userRole.set(typeof user?.role === 'number' ? user.role : null);
    }

    this.http.get<any>(`${this.baseUrl}/Store/items`).subscribe({
      next: (res) => {
        const data = res.data ?? [];
        this.allItems.set(data);
        this.items.set(data);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  protected logout(): void {
    this.authService.logout();
    this.router.navigate(['/homepage']);
  }

  setCategory(cat: Category) {
    this.activeTab.set(cat);
    if (cat === 'All') {
      this.items.set(this.allItems());
    } else {
      this.items.set(this.allItems().filter(i => i.category === cat));
    }
  }

  getImageUrl(path: string | null): string {
    if (!path) return '';
    return this.learningApi.buildDownloadUrl(path);
  }

  formatPrice(price: number): string {
    return price <= 0 ? 'Free' : `৳${price}`;
  }

  getCategoryIcon(cat: string): string {
    const map: Record<string, string> = {
      'Books': '📘', 'Materials': '📋', 'Resources': '🎯'
    };
    return map[cat] ?? '📦';
  }
}