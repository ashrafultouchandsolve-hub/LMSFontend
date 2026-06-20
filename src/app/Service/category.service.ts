import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface Category {
  id: string;
  name: string;
  thumbnailPath?: string | null;
  createdAt?: string;
  isFixed?: boolean;
}

/**
 * The default categories that ship with the platform (mirrors the backend's
 * CategoryController.FixedCategoryNames). They can be renamed by admin but never deleted.
 */
export const FIXED_CATEGORY_NAMES = [
  'SSC 2027', 'SSC 2026', 'HSC 2027', 'HSC 2026',
  'Admission English', 'Admission Science',
  'Skills Development', 'Communication', 'General',
] as const;

/** Derive a display emoji for a category from its name (keyword match, default 📚). */
export function categoryIcon(name: string): string {
  const n = (name ?? '').toLowerCase();
  if (n === 'all') return '🗂';
  if (n === 'other') return '📦';
  if (n.includes('ssc')) return '📘';
  if (n.includes('hsc')) return '📗';
  if (n.includes('admission')) return '🎯';
  if (n.includes('skill')) return '⚡';
  if (n.includes('communicat')) return '💬';
  if (n.includes('general')) return '📚';
  return '📚';
}

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl + '/Category';

  getAll(): Observable<{ data: Category[] }> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

  create(name: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, { name });
  }

  update(id: string, name: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, { name });
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  uploadImage(id: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/uploadimage/${id}`, formData);
  }
}
