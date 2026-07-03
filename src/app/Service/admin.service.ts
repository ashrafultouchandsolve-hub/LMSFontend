import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface DashboardStats {
  totalStudents: number;
  totalTeachers: number;
  pendingTeachers: number;
  totalCourses: number;
  totalEnrollments: number;
}

export interface AdminTeacher {
  id: string;
  fullName: string;
  email: string;
  status: string;
  courseCount: number;
}

export interface AdminStudent {
  id: string;
  fullName: string;
  email: string;
  status: string;
  enrolledCourses: number;
}

export interface AdminCourse {
  id: string;
  title: string;
  category: string;
  price: number;
  teacherName: string;
  enrollmentCount: number;
}

export interface AdminComment {  
  id: string;
  userName: string;
  isFlagged: boolean;
  courseTitle: string;
  content: string;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);
  // private readonly baseUrl = 'http://160.191.150.185:8071/api/Admin';

     private readonly baseUrl = environment.baseUrl + '/Admin';

  getDashboard(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.baseUrl}/dashboard`);
  }

  // Teachers
  getTeachers(): Observable<AdminTeacher[]> {
    return this.http.get<AdminTeacher[]>(`${this.baseUrl}/teachers`);
  }
  approveTeacher(userId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/teacher/approve/${userId}`, {});
  }
  blockTeacher(userId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/teacher/block/${userId}`, {});
  }
  getTeacherCourses(userId: string): Observable<AdminCourse[]> {
    return this.http.get<AdminCourse[]>(`${this.baseUrl}/teacher/${userId}/courses`);
  }

  // Students
  getStudents(): Observable<AdminStudent[]> {
    return this.http.get<AdminStudent[]>(`${this.baseUrl}/students`);
  }
  blockStudent(userId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/student/block/${userId}`, {});
  }
  unblockStudent(userId: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/student/unblock/${userId}`, {});
  }

  // Courses
  getCourses(): Observable<AdminCourse[]> {
    return this.http.get<AdminCourse[]>(`${this.baseUrl}/courses`);
  }
  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/course/delete/${courseId}`);
  }

  // Comments ✅
  getComments(): Observable<AdminComment[]> {
    return this.http.get<AdminComment[]>(`${this.baseUrl}/comments`);
  }
  deleteComment(commentId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/comment/delete/${commentId}`);
  }
  editComment(commentId: string, content: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/comment/edit/${commentId}`, JSON.stringify(content), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // ── Admin account (Settings) ──
  changeAdminPassword(currentPassword: string, newPassword: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/change-password`, { currentPassword, newPassword });
  }
  changeAdminEmail(currentPassword: string, newEmail: string): Observable<{ message: string; token: string; email: string }> {
    return this.http.put<{ message: string; token: string; email: string }>(`${this.baseUrl}/change-email`, { currentPassword, newEmail });
  }
}