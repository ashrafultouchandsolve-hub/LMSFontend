import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  FullName: string;
  Email: string;
  Password: string;
  Role: number;
  MobileNumber?: string;
};

export type LoginResponse = {
  message?: string;
  token?: string;
  userId?: number;
  email?: string;
  fullName?: string;
  role?: number;
};

@Injectable({
  providedIn: 'root',
})
export class Service {
  private readonly http = inject(HttpClient);

   private readonly baseUrl = environment.baseUrl;


  private readonly loginUrl = `${this.baseUrl}/register/login`;
  private readonly registerUrl = `${this.baseUrl}/register/register`;

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, payload);
  }

  register(payload: RegisterRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.registerUrl, payload);
  }
  savePreferences(data: any) {
    return this.http.post(`${this.baseUrl}/UserPreference`, data);
    //return this.http.post('http://lmslands.runasp.net/api/UserPreference', data);
    }

  }
