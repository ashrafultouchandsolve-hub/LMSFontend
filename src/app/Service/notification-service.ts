import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  link: string | null;
  isRead: boolean;
  createdAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl+'/Notification';

  getAll(): Observable<{data: Notification[]}> {
    return this.http.get<any>(`${this.baseUrl}/my`);
  }
  getUnreadCount(): Observable<{ count: number }> {
    return this.http.get<any>(`${this.baseUrl}/unread-count`);
  }
 
  markRead(id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/read/${id}`, {});
  }
 
  markAllRead(): Observable<any> {
    return this.http.put(`${this.baseUrl}/read-all`, {});
  }
}
 

