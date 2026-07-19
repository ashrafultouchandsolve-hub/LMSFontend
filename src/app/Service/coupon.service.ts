import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environments';

/** Matches the backend CouponDiscountType enum (serialised as a number). */
export enum CouponDiscountType {
  Percent = 0,
  Flat = 1,
}

export interface CouponCourseRef {
  id: string;
  title: string;
}

export interface Coupon {
  id: string;
  code: string;
  discountType: CouponDiscountType;
  discountValue: number;
  startDate: string;
  endDate: string;
  maxUses: number | null;
  usedCount: number;
  /** Inside its date window right now (BD time, server-computed). */
  isRunning: boolean;
  /** MaxUses reached — no redemptions left. */
  isExhausted: boolean;
  createdAt: string;
  courses: CouponCourseRef[];
}

/** A course in the admin picker, carrying its live discount-campaign state. */
export interface CouponSelectableCourse {
  id: string;
  title: string;
  category: string;
  price: number;
  discountPercent: number | null;
  discountStartDate: string | null;
  discountEndDate: string | null;
  discountActive: boolean;
  effectivePrice: number;
}

export interface CouponValidation {
  valid: boolean;
  message: string;
  code: string;
  discountType: CouponDiscountType;
  discountValue: number;
  /** Price before the coupon — already includes any running course campaign. */
  originalPrice: number;
  discountAmount: number;
  finalPrice: number;
}

export interface CouponPayload {
  code: string;
  discountType: CouponDiscountType;
  discountValue: number;
  startDate: string;
  endDate: string;
  maxUses: number | null;
  courseIds: string[];
}

@Injectable({ providedIn: 'root' })
export class CouponService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl + '/Coupon';

  // ── Student ────────────────────────────────────────
  /** Ask whether a code works on a course and what it would cost. */
  validate(code: string, courseId: string): Observable<CouponValidation> {
    return this.http.post<CouponValidation>(`${this.baseUrl}/validate`, { code, courseId });
  }

  // ── Admin ──────────────────────────────────────────
  getAll(): Observable<Coupon[]> {
    return this.http
      .get<any>(`${this.baseUrl}/admin/list`)
      .pipe(map((r) => r?.data ?? r?.Data ?? []));
  }

  getSelectableCourses(): Observable<CouponSelectableCourse[]> {
    return this.http
      .get<any>(`${this.baseUrl}/admin/courses`)
      .pipe(map((r) => r?.data ?? r?.Data ?? []));
  }

  create(payload: CouponPayload): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/admin/create`, payload);
  }

  update(id: string, payload: CouponPayload): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/admin/${id}`, payload);
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/admin/${id}`);
  }
}
