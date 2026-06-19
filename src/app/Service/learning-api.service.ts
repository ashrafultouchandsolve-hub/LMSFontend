import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpEvent, HttpProgressEvent } from '@angular/common/http';
import { Observable, catchError, debounce, map, of, tap, throwError } from 'rxjs';
import { JwtService } from './jwt.service';
import { environment } from '../../environments/environments';

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
  enrollmentCount?: number;
  videoCount?: number;
  practiceCount?: number;
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
  /** UserId of the teacher the admin appoints to this course (primary). */
  teacherUserId?: string;
  /** UserIds of all teachers assigned to this course (first = primary). */
  teacherUserIds?: string[];
};

export type CourseTeacher = {
  id: string;
  userId?: string;
  fullName: string;
  bio?: string | null;
  profileImagePath?: string | null;
  facebookLink?: string | null;
  youtubeLink?: string | null;
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

export type StudentProfileDto = {
  id: string;
  fullName: string;
  email: string;
  profileImagePath: string | null;
  phone: string | null;
  bio: string | null;
  dateOfBirth: string | null;
  gender: string | null;
  address: string | null;
  institution: string | null;
  classOrGrade: string | null;
  guardianName: string | null;
  guardianPhone: string | null;
  facebookLink: string | null;
  linkedInLink: string | null;
};

export type StudentProfilePayload = {
  fullName: string;
  phone?: string | null;
  bio?: string | null;
  dateOfBirth?: string | null;
  gender?: string | null;
  address?: string | null;
  institution?: string | null;
  classOrGrade?: string | null;
  guardianName?: string | null;
  guardianPhone?: string | null;
  facebookLink?: string | null;
  linkedInLink?: string | null;
};

export type EnrollmentDto = {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: string;
  status: 'Active' | 'Completed' | 'Dropped';
};

export type CourseCommentDto = {
  id: string;
  courseId: string;
  userId: string;
  userName?: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
};

export type SaveCourseCommentPayload = {
  courseId: string;
  userId: string;
  content: string;
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


   private readonly primaryBaseUrl = environment.baseUrl;
  private readonly fallbackBaseUrl = environment.baseUrl;



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
  // quiz
  getQuizzesByLesson(lessonId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/quiz/getbylesson/${lessonId}`));
  }

  addQuiz(lessonId: string, dto: any): Observable<any> {
    return this.withFallback((base) => this.http.post<any>(`${base}/quiz/add/${lessonId}`, dto));
  }

  deleteQuiz(quizId: string): Observable<any> {
    return this.withFallback((base) => this.http.delete<any>(`${base}/quiz/delete/${quizId}`));
  }

  hasAttemptedQuiz(lessonId: string, userId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/quiz/hasattempted/${lessonId}/${userId}`));
  }

  submitQuiz(lessonId: string, dto: any): Observable<any> {
    return this.withFallback((base) => this.http.post<any>(`${base}/quiz/submit/${lessonId}`, dto));
  }

  getQuizProgress(lessonId: string, userId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/quiz/progress/${lessonId}/${userId}`));
  }

  getOverallQuizProgress(userId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/quiz/overall-progress/${userId}`));
  }

  // ── Student profile ──────────────────────────────────────
  getMyStudentProfile(): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/student/me`));
  }

  updateStudentProfile(dto: StudentProfilePayload): Observable<any> {
    return this.withFallback((base) => this.http.put<any>(`${base}/student/update-profile`, dto));
  }

  uploadStudentProfileImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.withFallback((base) => this.http.post<any>(`${base}/student/upload-profile-image`, formData));
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

  /** Teachers assigned to a course (primary + co-teachers) with their details. */
  getCourseTeachers(courseId: string): Observable<{ data: CourseTeacher[] }> {
    return this.withFallback((baseUrl) =>
      this.http.get<any>(`${baseUrl}/course/${courseId}/teachers`),
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

  getLessonsByCourse(courseId: string): Observable<any> {
    return this.withFallback((baseUrl) => this.http.get<any>(`${baseUrl}/lesson/getbycourse/${courseId}`));
  }

  getEnrollmentCount(courseId: string): Observable<{ courseId: string; totalEnrollment: number }> {
    return this.withFallback((baseUrl) =>
      this.http.get<{ courseId: string; totalEnrollment: number }>(`${baseUrl}/enrollment/count/${courseId}`),
    );
  }

  /** Public course-details stats: enrolled students, total videos, total practice materials. */
  getCourseStats(courseId: string): Observable<any> {
    return this.withFallback((baseUrl) => this.http.get<any>(`${baseUrl}/course/${courseId}/stats`));
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

  uploadLessonVideoWithProgress(lessonId: string, file: File): Observable<HttpEvent<ApiResponse<unknown>>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http
      .post<ApiResponse<unknown>>(`${this.primaryBaseUrl}/lesson/uploadvideo/${lessonId}`, formData, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
        tap(() => {
          this.activeBaseUrl = this.primaryBaseUrl;
        }),
        catchError((error) => {
          if (!this.isNetworkError(error)) {
            return throwError(() => error);
          }

          return this.http
            .post<ApiResponse<unknown>>(`${this.fallbackBaseUrl}/lesson/uploadvideo/${lessonId}`, formData, {
              reportProgress: true,
              observe: 'events',
            })
            .pipe(
              tap(() => {
                this.activeBaseUrl = this.fallbackBaseUrl;
              }),
            );
        }),
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

    const baseWithoutApi = this.activeBaseUrl.replace('/api', '');

    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    if (path.startsWith('/uploads/')) {
      return `${baseWithoutApi}${path}`;
    }

    return `${baseWithoutApi}/uploads/${path}`;
  }

  getBaseUrl(): string {
    return this.activeBaseUrl;
  }

  buildStreamUrl(path: string | null): string {
    if (!path) {
      return '';
    }

    const params = new HttpParams().set('path', path);
    return `${this.activeBaseUrl}/files/stream?${params.toString()}`;
  }

  saveVideoProgress(lessonId: string, dto: { userId: string; watchedSeconds: number; totalSeconds: number }): Observable<any> {
    return this.withFallback((base) => this.http.post<any>(`${base}/videoprogress/save/${lessonId}`, dto));
  }

  getVideoProgress(lessonId: string, userId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/videoprogress/get/${lessonId}/${userId}`));
  }

  getVideoHistory(userId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/videoprogress/history/${userId}`));
  }

  // ─── RATING ENDPOINTS ─────────────────────────────────
  addOrUpdateRating(courseId: string, userId: string, rating: number, feedback: string = ''): Observable<any> {
    return this.withFallback((base) =>
      this.http.post<any>(`${base}/courserating/add`, {
        courseId,
        userId,
        rating,
        feedback,
      }),
    );
  }

  getRatingSummary(courseId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/courserating/summary/${courseId}`));
  }

  getMyRatings(userId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/courserating/my-ratings/${userId}`));
  }

  getUserCourseRating(courseId: string, userId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/courserating/${courseId}/${userId}`));
  }

  deleteRating(ratingId: string, userId: string): Observable<any> {
    return this.withFallback((base) => this.http.delete<any>(`${base}/courserating/${ratingId}/${userId}`));
  }

  getCourseComments(courseId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/coursecomment/course/${courseId}`));
  }

  getCourseComment(commentId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/coursecomment/${commentId}`));
  }

  getUserComments(userId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/coursecomment/user/${userId}`));
  }

  addCourseComment(payload: SaveCourseCommentPayload): Observable<any> {
    return this.withFallback((base) => this.http.post<any>(`${base}/coursecomment/add`, payload));
  }

  updateCourseComment(commentId: string, payload: Partial<SaveCourseCommentPayload>): Observable<any> {
    return this.withFallback((base) => this.http.put<any>(`${base}/coursecomment/update/${commentId}`, payload));
  }

  deleteCourseComment(commentId: string): Observable<any> {
    return this.withFallback((base) => this.http.delete<any>(`${base}/coursecomment/delete/${commentId}`));
  }

  checkWishlist(courseId: string, userId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/wishlist/check/${courseId}/${userId}`));
  }

  toggleWishlist(courseId: string, userId: string): Observable<any> {
    return this.withFallback((base) => this.http.post<any>(`${base}/wishlist/toggle/${courseId}/${userId}`, {}));
  }

  getWishlist(userId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/wishlist/${userId}`));
  }

  getLeaderboard(): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/quiz/leaderboard`));
  }

  // নির্দিষ্ট course-এর leaderboard (student enrolled course গুলোর জন্য)
  getCourseLeaderboard(courseId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/quiz/leaderboard/course/${courseId}`));
  }

  // signup onboarding-এ সংরক্ষিত preference (SkillLevel, Goal, Language, Interests[])
  getUserPreferences(): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/UserPreference`));
  }

  // Enrolled students list (teacher এর জন্য)
  getEnrolledStudents(courseId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/enrollment/students/${courseId}`));
  }

  // Certificate issue করা (teacher করবে)
  getMyCertificates(userId: string): Observable<any> {
    return this.withFallback((base) =>
    this.http.get<any>(`${base}/certificate/my/${userId}`)
    );
  }

  issueCertificate(payload: {
    userId: string;
    courseId: string;
    studentName: string;
    courseName: string;
  }): Observable<any> {
    return this.withFallback((base) => this.http.post<any>(`${base}/certificate/issue`, payload));
  }

  getCourseCertificates(courseId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/certificate/course/${courseId}`));
  }

  // ─── INSTRUCTOR/TEACHER PROFILE ENDPOINTS ─────────────────────────────────
  getAllInstructors(): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/Instructor/all`));
  }

  getInstructorProfile(teacherId: string): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/Instructor/${teacherId}`));
  }

  /** Logged-in teacher's own profile (for the profile page). */
  getMyInstructorProfile(): Observable<any> {
    return this.withFallback((base) => this.http.get<any>(`${base}/Instructor/me`));
  }

  updateInstructorProfile(dto: { bio?: string; facebookLink?: string; youtubeLink?: string }): Observable<any> {
    return this.withFallback((base) =>
      this.http.put<any>(`${base}/Instructor/update-profile`, dto),
    );
  }

  uploadInstructorProfileImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.withFallback((base) =>
      this.http.post<any>(`${base}/Instructor/upload-profile-image`, formData),
    );
  }
  // ─── STORE ITEMS ENDPOINTS ───────────────────────────────────────────────────────────────────────────────
  getStoreItems(category?: string): Observable<any> {
    let params = new HttpParams();
    if (category) {
      params = params.set('category', category);
    }
    return this.withFallback((base) => this.http.get<any>(`${base}/store/items`, { params }));
  }

  addStoreItem(dto: { title: string; description: string; category: string; price: number; fileUrl?: string }): Observable<any> {
    return this.withFallback((base) =>
      this.http.post<any>(`${base}/store/add`, dto),
    );
  }

  uploadStoreItemImage(itemId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.withFallback((base) =>
      this.http.post<any>(`${base}/store/upload-image/${itemId}`, formData),
    );
  }

  uploadStoreItemPdf(itemId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.withFallback((base) =>
      this.http.post<any>(`${base}/store/upload-pdf/${itemId}`, formData),
    );
  }

  updateStoreItem(itemId: string, dto: { title: string; description: string; category: string; price: number; fileUrl?: string }): Observable<any> {
    return this.withFallback((base) =>
      this.http.put<any>(`${base}/store/update/${itemId}`, dto),
    );
  }

  deleteStoreItem(itemId: string): Observable<any> {
    return this.withFallback((base) =>
      this.http.delete<any>(`${base}/store/delete/${itemId}`),
    );
  }

  downloadStoreItemPdf(itemId: string): string {
    const base = this.activeBaseUrl;
    return `${base}/store/download-pdf/${itemId}`;
  }
getMyEnrollments(): Observable<any> {
  return this.withFallback((base) =>
    this.http.get<any>(`${base}/enrollment/my-enrollments`)
  );
}

initiatePayment(body: { courseId: string }): Observable<any> {
  return this.withFallback((base) =>
    this.http.post<any>(`${base}/payment/initiate`, body)
  );
}

getPaymentStatus(transactionId: string): Observable<any> {
  return this.withFallback((base) =>
    this.http.get<any>(`${base}/payment/status/${transactionId}`)
  );
}
 
}