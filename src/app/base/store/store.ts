import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';
import { environment } from '../../../environments/environments';
import { Navbar } from '../../shared/navbar/navbar';

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
  imports: [CommonModule, Navbar],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store implements OnInit {
  private readonly http        = inject(HttpClient);
  protected readonly learningApi = inject(LearningApiService);
  readonly lang                = inject(LanguageService);

  readonly allItems    = signal<StoreItem[]>([]);
  readonly items       = signal<StoreItem[]>([]);
  readonly isLoading   = signal(true);
  readonly activeTab   = signal<Category>('All');

  readonly  baseUrl = environment.baseUrl;

  readonly categories: Category[] = ['All', 'Books', 'Materials', 'Resources'];

  ngOnInit() {
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