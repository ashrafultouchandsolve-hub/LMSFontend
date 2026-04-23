import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { JwtService } from './jwt.service';

type ApiResponse<T> = {
  message: string;
  data: T;
};

export type CourseDto = {
  id: string;
  title: string;
  description: string;
  category: string;
  instructorName: string;
  level: string;
  price: number;
  durationMinutes: number;
  thumbnailPath: string | null;
  isPublished: boolean;
  lessonCount?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type LessonDto = {
  id: string;
  courseId: string;
  title: string;
  description: string;
  orderIndex: number;
  videoType: string;
  videoUrl: string | null;
  videoPath: string | null;
  thumbnailPath: string | null;
  durationMinutes: number;
  resourceUrl: string | null;
  isFreePreview: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type SaveCoursePayload = {
  title: string;
  description: string;
  category: string;
  instructorName: string;
  level: string;
  price: number;
  durationMinutes: number;
  isPublished: boolean;
};

export type SaveLessonPayload = {
  courseId: string;
  title: string;
  description: string;
  orderIndex: number;
  videoType: string;
  videoUrl: string;
  durationMinutes: number;
  resourceUrl: string;
  isFreePreview: boolean;
};

export type EnrollmentDto = {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: string;
  status: 'Active' | 'Completed' | 'Dropped';
};

export type SaveEnrollmentPayload = {
  courseId: string;
};

@Injectable({
  providedIn: 'root',
})
export class LearningApiService {
  private readonly http = inject(HttpClient);
  private readonly jwtService = inject(JwtService);
  private readonly primaryBaseUrl = 'https://localhost:7002/api';
  private readonly fallbackBaseUrl = 'https://localhost:7236/api';
  private activeBaseUrl = this.primaryBaseUrl;
  private readonly localEnrollmentKeyPrefix = 'enrolled_course_ids';
  private enrollmentByCourseEndpointAvailable: boolean | null = null;

  private isNetworkError(error: unknown): boolean {
    return error instanceof HttpErrorResponse && error.status === 0;
  }

  private withFallback<T>(requestFactory: (baseUrl: string) => Observable<T>): Observable<T> {
    return requestFactory(this.primaryBaseUrl).pipe(
      tap(() => {
        this.activeBaseUrl = this.primaryBaseUrl;
      }),
      catchError((error) => {
        if (!this.isNetworkError(error)) {
          return throwError(() => error);
        }

        return requestFactory(this.fallbackBaseUrl).pipe(
          tap(() => {
            this.activeBaseUrl = this.fallbackBaseUrl;
          }),
        );
      }),
    );
  }

  getTeacherCourses(): Observable<ApiResponse<CourseDto[]>> {
    return this.withFallback((baseUrl) =>
      this.http.get<ApiResponse<CourseDto[]>>(`${baseUrl}/course/getbyteacher`),
    );
  }

  getAllCourses(): Observable<ApiResponse<CourseDto[]>> {
    return this.withFallback((baseUrl) =>
      this.http.get<ApiResponse<CourseDto[]>>(`${baseUrl}/course/getall`),
    );
  }

  createCourse(payload: SaveCoursePayload): Observable<ApiResponse<string>> {
    return this.withFallback((baseUrl) =>
      this.http.post<ApiResponse<string>>(`${baseUrl}/course/create`, payload),
    );
  }

  updateCourse(courseId: string, payload: SaveCoursePayload): Observable<ApiResponse<string>> {
    return this.withFallback((baseUrl) =>
      this.http.put<ApiResponse<string>>(`${baseUrl}/course/update/${courseId}`, payload),
    );
  }

  deleteCourse(courseId: string): Observable<ApiResponse<unknown>> {
    return this.withFallback((baseUrl) =>
      this.http.delete<ApiResponse<unknown>>(`${baseUrl}/course/delete/${courseId}`),
    );
  }

  uploadCourseThumbnail(courseId: string, file: File): Observable<ApiResponse<unknown>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.withFallback((baseUrl) =>
      this.http.post<ApiResponse<unknown>>(`${baseUrl}/course/uploadthumbnail/${courseId}`, formData),
    );
  }

  getLessonsByCourse(courseId: string): Observable<ApiResponse<LessonDto[]>> {
    return this.withFallback((baseUrl) =>
      this.http.get<ApiResponse<LessonDto[]>>(`${baseUrl}/lesson/getbycourse/${courseId}`),
    );
  }

  createLesson(payload: SaveLessonPayload): Observable<ApiResponse<string>> {
    return this.withFallback((baseUrl) =>
      this.http.post<ApiResponse<string>>(`${baseUrl}/lesson/create`, payload),
    );
  }

  updateLesson(lessonId: string, payload: SaveLessonPayload): Observable<ApiResponse<unknown>> {
    return this.withFallback((baseUrl) =>
      this.http.put<ApiResponse<unknown>>(`${baseUrl}/lesson/update/${lessonId}`, payload),
    );
  }

  deleteLesson(lessonId: string): Observable<ApiResponse<unknown>> {
    return this.withFallback((baseUrl) =>
      this.http.delete<ApiResponse<unknown>>(`${baseUrl}/lesson/delete/${lessonId}`),
    );
  }

  uploadLessonThumbnail(lessonId: string, file: File): Observable<ApiResponse<unknown>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.withFallback((baseUrl) =>
      this.http.post<ApiResponse<unknown>>(`${baseUrl}/lesson/uploadthumbnail/${lessonId}`, formData),
    );
  }

  uploadLessonVideo(lessonId: string, file: File): Observable<ApiResponse<unknown>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.withFallback((baseUrl) =>
      this.http.post<ApiResponse<unknown>>(`${baseUrl}/lesson/uploadvideo/${lessonId}`, formData),
    );
  }

  setLessonVideoUrl(lessonId: string, videoUrl: string): Observable<ApiResponse<unknown>> {
    // Some backend builds expose this route with a slightly different spelling.
    // Try the newer route first, then fall back to the legacy one on 404.
    return this.withFallback((baseUrl) =>
      this.http.post<ApiResponse<unknown>>(`${baseUrl}/lesson/setvideourl/${lessonId}`, { videoUrl }),
    ).pipe(
      catchError((error) => {
        if (!(error instanceof HttpErrorResponse) || error.status !== 404) {
          return throwError(() => error);
        }

        return this.withFallback((baseUrl) =>
          this.http.post<ApiResponse<unknown>>(`${baseUrl}/lesson/setvideurl/${lessonId}`, { videoUrl }),
        );
      }),
    );
  }

  createEnrollment(payload: SaveEnrollmentPayload): Observable<ApiResponse<EnrollmentDto>> {
    return this.withFallback((baseUrl) =>
      this.http.post<ApiResponse<EnrollmentDto>>(`${baseUrl}/enrollment/create`, payload),
    );
  }

  getMyEnrollmentByCourse(courseId: string): Observable<ApiResponse<EnrollmentDto | null>> {
    return this.withFallback((baseUrl) =>
      this.http.get<ApiResponse<EnrollmentDto | null>>(`${baseUrl}/enrollment/by-course/${courseId}`),
    );
  }

  markCourseAsEnrolledLocally(courseId: string): void {
    const ids = this.getLocalEnrolledCourseIds();
    ids.add(courseId);
    this.saveLocalEnrolledCourseIds(ids);
  }

  isCourseEnrolledLocally(courseId: string): boolean {
    return this.getLocalEnrolledCourseIds().has(courseId);
  }

  checkMyEnrollment(courseId: string): Observable<boolean> {
    if (this.enrollmentByCourseEndpointAvailable === false) {
      return of(this.isCourseEnrolledLocally(courseId));
    }

    return this.getMyEnrollmentByCourse(courseId).pipe(
      map((response) => {
        const enrolled = Boolean(response.data);
        if (enrolled) {
          this.markCourseAsEnrolledLocally(courseId);
        }
        this.enrollmentByCourseEndpointAvailable = true;
        return enrolled || this.isCourseEnrolledLocally(courseId);
      }),
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 404) {
          this.enrollmentByCourseEndpointAvailable = false;
        }

        return of(this.isCourseEnrolledLocally(courseId));
      }),
    );
  }

  private getLocalEnrolledCourseIds(): Set<string> {
    const raw = localStorage.getItem(this.getLocalEnrollmentKey());
    if (!raw) {
      return new Set<string>();
    }

    try {
      const parsed = JSON.parse(raw) as string[];
      if (!Array.isArray(parsed)) {
        return new Set<string>();
      }

      return new Set(parsed.filter((id) => typeof id === 'string' && id.length > 0));
    } catch {
      return new Set<string>();
    }
  }

  private saveLocalEnrolledCourseIds(ids: Set<string>): void {
    localStorage.setItem(this.getLocalEnrollmentKey(), JSON.stringify([...ids]));
  }

  private getLocalEnrollmentKey(): string {
    const user = this.jwtService.getUser() as { id?: string | number } | null;
    const rawUserId = user?.id;
    const userId = typeof rawUserId === 'string' || typeof rawUserId === 'number'
      ? String(rawUserId)
      : 'anonymous';

    return `${this.localEnrollmentKeyPrefix}_${userId}`;
  }

  buildDownloadUrl(path: string | null): string {
    if (!path) {
      return '';
    }

    // Backend serves uploads outside /api path.
    // Extract base URL without /api (e.g., https://localhost:7002)
    const baseWithoutApi = this.activeBaseUrl.replace('/api', '');
    
    if (path.startsWith('/')) {
      return `${baseWithoutApi}${path}`;
    }

    if (!path.startsWith('http://') && !path.startsWith('https://')) {
      return `${baseWithoutApi}/${path}`;
    }

    return path;
  }

  buildStreamUrl(path: string | null): string {
    if (!path) {
      return '';
    }

    const params = new HttpParams().set('path', path);
    return `${this.activeBaseUrl}/files/stream?${params.toString()}`;
  }
}
