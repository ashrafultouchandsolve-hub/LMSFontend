import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Service, LoginRequest, RegisterRequest, LoginResponse } from './service';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly service = inject(Service);
  private readonly jwtService = inject(JwtService);
  private readonly legacyAuthKeys: readonly string[] = [
    'auth_logged_in',
    'auth_user_email',
    'refreshToken',
    'token',
    'user',
  ];

  private isLoggedInSubject = new BehaviorSubject<boolean>(
    this.jwtService.hasToken() && !this.jwtService.isTokenExpired()
  );
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private currentUserSubject = new BehaviorSubject<any>(this.jwtService.getUser());
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    this.cleanupLegacyAuthStorage();
  }

  // Login করুন
  login(email: string, password: string): Observable<LoginResponse> {
    return this.service.login({ email, password }).pipe(
      tap((response) => {
        if (response.token) {
          this.jwtService.setToken(response.token);
          
          // User info save করুন
          const user = {
            id: response.userId,
            email: response.email,
            fullName: response.fullName,
            role: response.role,
          };
          this.jwtService.setUser(user);
          this.cleanupLegacyAuthStorage();
          this.currentUserSubject.next(user);
          this.isLoggedInSubject.next(true);
        }
      })
    );
  }

  // Register করুন
  register(fullName: string, email: string, password: string, role: number = 1): Observable<LoginResponse> {
    return this.service.register({
      FullName: fullName,
      Email: email,
      Password: password,
      Role: role
    }).pipe(
      tap((response) => {
        if (response.token) {
          this.jwtService.setToken(response.token);
          
          // User info save করুন
          const user = {
            id: response.userId,
            email: response.email,
            fullName: response.fullName,
            role: response.role
          };
          this.jwtService.setUser(user);
          this.cleanupLegacyAuthStorage();
          this.currentUserSubject.next(user);
          this.isLoggedInSubject.next(true);
        }
      })
    );
  }

  // Logout করুন
  logout(): void {
    this.jwtService.clear();
    this.cleanupLegacyAuthStorage();
    this.clearLocalEnrollmentCache();
    this.isLoggedInSubject.next(false);
    this.currentUserSubject.next(null);
  }

  // Current user get করুন
  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  // Logged in আছেন কিনা check করুন
  isLoggedIn(): boolean {
    return this.isLoggedInSubject.value && !this.jwtService.isTokenExpired();
  }

  // Token get করুন
  getToken(): string | null {
    return this.jwtService.getToken();
  }

  private hasLocalStorage(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  private cleanupLegacyAuthStorage(): void {
    if (!this.hasLocalStorage()) {
      return;
    }

    for (const key of this.legacyAuthKeys) {
      localStorage.removeItem(key);
    }
  }

  private clearLocalEnrollmentCache(): void {
    if (!this.hasLocalStorage()) {
      return;
    }

    const enrollmentPrefix = 'enrolled_course_ids_';
    for (let index = localStorage.length - 1; index >= 0; index -= 1) {
      const key = localStorage.key(index);
      if (key?.startsWith(enrollmentPrefix)) {
        localStorage.removeItem(key);
      }
    }
  }
}
