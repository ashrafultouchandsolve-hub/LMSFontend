import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  FullName: string;
  Email: string;
  Password: string;
  Role: number;
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
  private readonly loginUrl = 'http://160.191.150.185:8071/api/register/login';
  private readonly registerUrl = 'http://160.191.150.185:8071/api/register/register';

  //private readonly loginUrl = 'https://localhost:7002/api/register/login';
   //private readonly registerUrl = 'https://localhost:7002/api/register/register';

  //   private readonly loginUrl = 'http://lmslands.runasp.net/api/register/login';
  // private readonly registerUrl = 'http://lmslands.runasp.net/api/register/register';


  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, payload);
  }

  register(payload: RegisterRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.registerUrl, payload);
  }
  savePreferences(data: any){
     return this.http.post('http://160.191.150.185:8071/api/UserPreference', data);
    //return this.http.post('https://localhost:7002/api/UserPreference', data);
    //return this.http.post('http://lmslands.runasp.net/api/UserPreference', data);
    }

  }
