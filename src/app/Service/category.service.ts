import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface Category {
  id: string;
  name: string;
  thumbnailPath?: string | null;
  createdAt?: string;
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
