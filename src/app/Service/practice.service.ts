import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export type PracticeType = 'Board' | 'ModelTest';

export interface PracticeMaterial {
  id: string;
  title: string;
  description: string;
  hasFile: boolean;
  fileType: string;   // 'PDF' | 'DOC' | 'DOCX'
  type: PracticeType; // 'Board' = Previous Board Question, 'ModelTest' = Special Model Test Question
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class PracticeService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl + '/Practice';

  getCourseMaterials(courseId: string): Observable<{ data: PracticeMaterial[] }> {
    return this.http.get<any>(`${this.baseUrl}/course/${courseId}`);
  }

  /** Admin: add a material (name + description + type + 1 file). */
  create(courseId: string, title: string, description: string, type: PracticeType, file: File): Observable<any> {
    const fd = new FormData();
    fd.append('courseId', courseId);
    fd.append('title', title);
    fd.append('description', description ?? '');
    fd.append('type', type);
    fd.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/create`, fd);
  }

  /** Admin: edit title/description/type (+ optionally replace the file). */
  update(id: string, title: string, description: string, type: PracticeType, file?: File | null): Observable<any> {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description ?? '');
    fd.append('type', type);
    if (file) fd.append('file', file);
    return this.http.put<any>(`${this.baseUrl}/update/${id}`, fd);
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}`);
  }

  /** Open the material's file (blob keeps the JWT header → open in a new tab). */
  viewFile(id: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/file/${id}`, { responseType: 'blob' });
  }
}
