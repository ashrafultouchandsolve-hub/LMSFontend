import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private tokenKey = 'auth_token';
  private userKey = 'auth_user';

  // Token save করুন
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Token retrieve করুন
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Token আছে কিনা check করুন
  hasToken(): boolean {
    return !!this.getToken();
  }

  // Token delete করুন
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
 
  // User info save করুন
  setUser(user: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  // User info retrieve করুন
  getUser(): any {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  // User info delete করুন
  removeUser(): void {
    localStorage.removeItem(this.userKey);
  }

  // সব data clear করুন (logout এর সময়)
  clear(): void {
    this.removeToken();
    this.removeUser();
  }

  // Token decode করুন (payload check করবার জন্য)
  decodeToken(): any {
    const token = this.getToken();
    if (!token) return null;

    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Token decode এ error:', error);
      return null;
    }
  }

  // Token expire হয়েছে কিনা check করুন
  isTokenExpired(): boolean {
    const decoded = this.decodeToken();
    if (!decoded || !decoded.exp) return true;

    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  }
}
