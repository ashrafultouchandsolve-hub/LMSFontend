import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environments';

/** Outcome of one monthly batch send (mirrors backend ParentReportSendSummary). */
export interface ParentReportSummary {
  year: number;
  month: number;
  eligible: number;   // students having a ParentEmail
  sent: number;
  skipped: number;    // already sent for this month
  failed: number;
  errors: string[];
}

@Injectable({ providedIn: 'root' })
export class ParentReportService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.baseUrl + '/ParentReport';

  /** Admin: render one student's report-card HTML (nothing is sent or logged). */
  preview(userId: string, year: number, month: number): Observable<string> {
    return this.http.get(`${this.baseUrl}/preview/${userId}`, {
      params: { year, month },
      responseType: 'text',
    });
  }

  /** Admin: send the month's reports to every student with a ParentEmail. force re-sends. */
  send(year: number, month: number, force: boolean): Observable<ParentReportSummary> {
    return this.http.post<{ data: ParentReportSummary }>(
      `${this.baseUrl}/send`, null, { params: { year, month, force } })
      .pipe(map((r) => r.data));
  }
}
