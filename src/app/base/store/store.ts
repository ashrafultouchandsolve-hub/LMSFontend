import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';
import { AuthService } from '../../Service/auth.service';
import { environment } from '../../../environments/environments';
import { Navbar } from '../../shared/navbar/navbar';

interface StoreItem {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercent?: number | null;
  effectivePrice?: number;
  hasDiscount?: boolean;
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
  private readonly auth        = inject(AuthService);
  private readonly router      = inject(Router);
  private readonly route       = inject(ActivatedRoute);

  readonly allItems    = signal<StoreItem[]>([]);
  readonly items       = signal<StoreItem[]>([]);
  readonly isLoading   = signal(true);
  readonly activeTab   = signal<Category>('All');

  /** Store-item ids the logged-in user already owns. */
  readonly owned       = signal<Set<string>>(new Set<string>());
  /** Id of the item whose purchase is currently being started (button spinner). */
  readonly buyingId    = signal<string | null>(null);
  readonly toast       = signal('');

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

    this.loadMyPurchases();

    // Payment gateway redirects back with ?purchase=success|failed|cancelled
    const purchase = this.route.snapshot.queryParamMap.get('purchase');
    if (purchase === 'success') this.showToast('✅ Purchase successful! Your item is ready to download below.');
    else if (purchase === 'failed') this.showToast('❌ Payment failed. Please try again.');
    else if (purchase === 'cancelled') this.showToast('⚠️ Payment was cancelled.');
  }

  private loadMyPurchases() {
    if (!this.auth.isLoggedIn()) return;
    this.learningApi.getMyStorePurchases().subscribe({
      next: (res) => {
        const ids: string[] = res?.data ?? res?.Data ?? [];
        this.owned.set(new Set(ids));
      },
      error: () => { /* not logged in / no purchases — leave empty */ },
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

  /** Payable price after discount (falls back to raw price when the server didn't compute one). */
  effective(item: StoreItem): number {
    return item.effectivePrice ?? item.price;
  }

  isFree(item: StoreItem): boolean {
    return this.effective(item) <= 0;
  }

  isOwned(item: StoreItem): boolean {
    return this.owned().has(item.id);
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

  // ── Buy / download ────────────────────────────────────
  async buyItem(item: StoreItem) {
    // Already owned → go straight to download.
    if (this.isOwned(item)) { this.downloadOwned(item); return; }

    // Free item that isn't tracked as "owned" yet — still needs a purchase record so it unlocks,
    // but for a truly free download we can just hit the public endpoint.
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: '/store' } });
      return;
    }

    if (this.buyingId()) return;                  // guard double-click
    this.buyingId.set(item.id);
    try {
      const res: any = await firstValueFrom(
        this.learningApi.initiateStorePurchase({ storeItemId: item.id })
      );

      if (res?.isFree) {
        this.owned.update(s => new Set(s).add(item.id));
        this.showToast(`✅ "${item.title}" unlocked!`);
        this.buyingId.set(null);
        return;
      }

      if (res?.gatewayUrl) {
        this.showToast('Redirecting to secure payment…');
        window.location.href = res.gatewayUrl;    // page navigates away
        return;
      }

      this.showToast('Could not start payment. Please try again.');
      this.buyingId.set(null);
    } catch (e) {
      if (e instanceof HttpErrorResponse && e.status === 409) {
        this.owned.update(s => new Set(s).add(item.id));
        this.showToast('You already own this item.');
      } else if (e instanceof HttpErrorResponse && e.status === 401) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: '/store' } });
      } else {
        this.showToast('Payment could not be started. Please try again.');
      }
      this.buyingId.set(null);
    }
  }

  /** Authenticated download of a purchased item's PDF. */
  downloadOwned(item: StoreItem) {
    if (!item.fileUrl) { this.showToast('No file is attached to this item yet.'); return; }
    this.learningApi.downloadOwnedStoreItemPdf(item.id).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${item.title}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      },
      error: () => this.showToast('Download failed. Please try again.'),
    });
  }

  private showToast(msg: string) {
    this.toast.set(msg);
    setTimeout(() => this.toast.set(''), 4000);
  }
}
