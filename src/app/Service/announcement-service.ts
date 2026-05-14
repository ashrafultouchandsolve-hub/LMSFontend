import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'urgent';
  isActive?: boolean;
  expiresAt: string | null;
}

@Injectable({ providedIn: 'root' })
export class AnnouncementService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl + '/Announcement';

  getActive(): Observable<{ data: Announcement[] }> {
    return this.http.get<any>(`${this.baseUrl}/active`);
  }
  getAll(): Observable<{ data: Announcement[] }> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }
  create(dto: { title: string; message: string; type: string; expiresAt: string | null }): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, dto);
  }
  deactivate(id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/deactivate/${id}`, {});
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}