import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Service, LoginRequest, RegisterRequest, LoginResponse } from './service';
import { JwtService } from './jwt.service';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly service = inject(Service);
  private readonly jwtService = inject(JwtService);
  private readonly http = inject(HttpClient);

  // sliding-session keep-alive: token expire হওয়ার একটু আগে নিজে থেকে refresh করে,
  // যাতে active user কাজ করতে করতে হঠাৎ log out না হয়।
  private refreshTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly REFRESH_LEAD_MS = 2 * 60 * 1000; // expiry-র ২ মিনিট আগে
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
    // page reload-এ token থাকলে refresh schedule আবার চালু করো।
    if (this.jwtService.hasToken() && !this.jwtService.isTokenExpired()) {
      this.scheduleTokenRefresh();
    }
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
          this.scheduleTokenRefresh();
        }
      })
    );
  }

  // Register করুন — parent/guardian info এখন post-registration onboarding modal-এ নেওয়া হয়
  register(fullName: string, email: string, password: string, role: number = 1, mobileNumber?: string, group?: string): Observable<LoginResponse> {
    return this.service.register({
      FullName: fullName,
      Email: email,
      Password: password,
      Role: role,
      MobileNumber: mobileNumber,
      Group: group
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
          this.scheduleTokenRefresh();
        }
      })
    );
  }

  // Logout করুন
  logout(): void {
    this.clearRefreshTimer();
    this.jwtService.clear();
    this.cleanupLegacyAuthStorage();
    this.clearLocalEnrollmentCache();
    this.isLoggedInSubject.next(false);
    this.currentUserSubject.next(null);
  }

  // ── Sliding-session token refresh ──
  private scheduleTokenRefresh(): void {
    this.clearRefreshTimer();
    const decoded = this.jwtService.decodeToken();
    if (!decoded?.exp) return;

    const expiresAtMs = decoded.exp * 1000;
    // expiry-র REFRESH_LEAD_MS আগে; কিন্তু অন্তত ১০ সেকেন্ড পরে (edge case guard)।
    const delay = Math.max(expiresAtMs - Date.now() - this.REFRESH_LEAD_MS, 10_000);
    this.refreshTimer = setTimeout(() => this.performTokenRefresh(), delay);
  }

  private performTokenRefresh(): void {
    // token না থাকলে (logout হয়ে গেছে) কিছু করো না।
    if (!this.jwtService.hasToken()) return;

    // JwtInterceptor স্বয়ংক্রিয়ভাবে Bearer header যোগ করবে।
    this.http.post<any>(`${environment.baseUrl}/Register/Refresh`, {}).subscribe({
      next: (res) => {
        const token = res?.token ?? res?.Token;
        if (token) {
          this.jwtService.setToken(token);
          this.scheduleTokenRefresh(); // নতুন exp অনুযায়ী আবার schedule
        }
      },
      // ব্যর্থ হলে চুপচাপ — পরে 401 এলে ErrorInterceptor logout + /login handle করবে।
      error: () => { /* silent */ },
    });
  }

  private clearRefreshTimer(): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
  }

  // Current user get করুন
  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  // Profile edit এর পরে cached name/fields update করুন (token অপরিবর্তিত)
  updateCurrentUser(patch: Record<string, any>): void {
    const current = this.currentUserSubject.value;
    if (!current) return;
    const updated = { ...current, ...patch };
    this.jwtService.setUser(updated);
    this.currentUserSubject.next(updated);
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
