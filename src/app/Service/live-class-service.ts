import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface LiveClass {
  id: string;
  title: string;
  description: string;
  scheduledAt: string;
  isActive: boolean;
  isEnded: boolean;
  roomUrl: string;
}

@Injectable({ providedIn: 'root' })
export class LiveClassService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl +'/LiveClass';

  getByCourse(courseId: string): Observable<{ data: LiveClass[] }> {
    return this.http.get<any>(`${this.baseUrl}/course/${courseId}`);
  }

  create(dto: { courseId: string; title: string; description: string; scheduledAt: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, dto);
  }

  start(id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/start/${id}`, {});
  }

  end(id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/end/${id}`, {});
  }

  join(id: string): Observable<{ roomUrl: string; userName: string; title: string }> {
    return this.http.get<any>(`${this.baseUrl}/join/${id}`);
  }
}