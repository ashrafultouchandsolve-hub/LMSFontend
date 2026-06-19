import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
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
  recordingPath?: string;
  recordingStatus?: string;
  isFree?: boolean;   // true → free live class (join via /free-live/:id)
}

export interface FreeLiveClass {
  id: string;
  courseId?: string;
  courseTitle?: string;
  title: string;
  description: string;
  hostName?: string;
  roomUrl?: string;
  isActive?: boolean;
  createdAt: string;
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

  // ── Recordings ─────────────────────────────────────────────────
  /** Teacher: upload the recorded video of a finished live class (with progress events). */
  uploadRecording(id: string, file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/recording/${id}`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  /** A course's live-class recordings (for the in-course Live Class section). */
  getCourseRecordings(courseId: string): Observable<{ data: LiveClass[] }> {
    return this.http.get<any>(`${this.baseUrl}/course/${courseId}/recordings`);
  }

  // ── Free / public live classes ─────────────────────────────────
  /** Teacher: start a free public live class (anyone can join, no login). */
  startFree(dto: { courseId: string; title: string; description: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/free/start`, dto);
  }

  /** Public: active free live classes — no auth required. */
  getActiveFree(): Observable<{ data: FreeLiveClass[] }> {
    return this.http.get<any>(`${this.baseUrl}/free/active`);
  }

  /** Public: join a free live class by id with an optional guest name — no auth required. */
  joinFree(id: string, name?: string): Observable<{ roomUrl: string; userName: string; title: string; hostName: string }> {
    const query = name && name.trim() ? `?name=${encodeURIComponent(name.trim())}` : '';
    return this.http.get<any>(`${this.baseUrl}/free/join/${id}${query}`);
  }

  /** Teacher: my own non-ended free live classes (to manage / end). */
  getMyFree(): Observable<{ data: FreeLiveClass[] }> {
    return this.http.get<any>(`${this.baseUrl}/free/mine`);
  }

  /** Teacher: end a free live class. */
  endFree(id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/free/end/${id}`, {});
  }

  /** Teacher: upload a free live class recording (with progress events). */
  uploadFreeRecording(id: string, file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/free/recording/${id}`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  /** A course's free live-class recordings (anonymous — un-enrolled users can watch). */
  getFreeCourseRecordings(courseId: string): Observable<{ data: FreeLiveClass[] }> {
    return this.http.get<any>(`${this.baseUrl}/free/course/${courseId}/recordings`);
  }

  /** A course's currently-active free live classes. */
  getCourseActiveFree(courseId: string): Observable<{ data: FreeLiveClass[] }> {
    return this.http.get<any>(`${this.baseUrl}/free/course/${courseId}/active`);
  }

  /** Teacher: how many free classes already created for a course (for the "3 free" warning). */
  freeCount(courseId: string): Observable<{ data: number }> {
    return this.http.get<any>(`${this.baseUrl}/free/count/${courseId}`);
  }

  // ── Course interest (follow free live classes) ─────────────────
  setInterest(courseId: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/free/interest/${courseId}`, {});
  }
  removeInterest(courseId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/free/interest/${courseId}`);
  }
  getInterest(courseId: string): Observable<{ data: { interested: boolean } }> {
    return this.http.get<any>(`${this.baseUrl}/free/interest/${courseId}`);
  }
  getMyInterests(): Observable<{ data: string[] }> {
    return this.http.get<any>(`${this.baseUrl}/free/my-interests`);
  }
}