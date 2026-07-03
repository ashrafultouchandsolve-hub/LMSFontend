import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtService } from './jwt.service';

/**
 * Global HTTP error handling — সব API call এর জন্য একটাই জায়গায়।
 * - 401  → session শেষ: token clear + /login redirect (silent-fail বন্ধ)।
 * - 429  → rate limit: server বার্তা toast।
 * - 5xx  → server error toast।
 * - 0    → network/connection error toast।
 * - GET timeout (~30s) → অনন্তকাল hang বন্ধ (upload/POST বাদ, যেন বড় ভিডিও আপলোড না ভাঙে)।
 *
 * error সবসময় re-throw করা হয় — তাই component-এর নিজস্ব catch/error state আগের মতোই কাজ করে;
 * এটা শুধু একটা global safety + user-feedback layer।
 *
 * NOTE: AuthService inject করা হয়নি ইচ্ছাকৃতভাবে (AuthService → Service → HttpClient →
 * interceptor circular DI এড়াতে)। token clear-এর জন্য pure JwtService যথেষ্ট — clear করলে
 * isTokenExpired() true হয়ে যায়, তাই guard গুলো স্বয়ংক্রিয়ভাবে logout ধরে নেয়।
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private readonly jwtService = inject(JwtService);
  private readonly router = inject(Router);
  private readonly toastr = inject(ToastrService);

  private readonly GET_TIMEOUT_MS = 30_000;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // upload/mutation request-এ timeout বসাই না — বড় ফাইল আপলোড ৩০ সেকেন্ডের বেশি নিতে পারে।
    const stream$ =
      request.method === 'GET'
        ? next.handle(request).pipe(timeout(this.GET_TIMEOUT_MS))
        : next.handle(request);

    return stream$.pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          this.handleHttpError(error, request);
        } else if (error instanceof TimeoutError) {
          this.toastr.error('The request took too long. Please try again.');
        }
        // component-এর catch যেন আগের মতোই পায় — error গিলে ফেলি না।
        return throwError(() => error);
      }),
    );
  }

  private handleHttpError(error: HttpErrorResponse, request: HttpRequest<any>): void {
    const serverMsg = (error.error && (error.error.message || error.error.Message)) || '';
    const isAuthRequest = /\/register\//i.test(request.url); // Login/Register/SeedAdmin — এদের 401 নিজেরাই handle করে

    switch (error.status) {
      case 0:
        this.toastr.error('Cannot reach the server. Please check your connection.');
        break;

      case 401:
        // সত্যিকারের session-expiry: হাতে token ছিল কিন্তু server প্রত্যাখ্যান করল।
        // login/register এর 401 (ভুল পাসওয়ার্ড) এখানে ধরি না — ওই page নিজেই বার্তা দেখায়।
        if (!isAuthRequest && this.jwtService.hasToken()) {
          this.jwtService.clear();
          this.toastr.info('Your session has expired. Please log in again.');
          this.router.navigate(['/login']);
        }
        break;

      case 429:
        this.toastr.warning(serverMsg || 'Too many requests. Please slow down and try again shortly.');
        break;

      default:
        if (error.status >= 500) {
          this.toastr.error(serverMsg || 'Something went wrong on the server. Please try again.');
        }
    }
  }
}
