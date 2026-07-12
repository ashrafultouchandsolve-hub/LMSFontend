import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';
import { ProgressService } from '../../Service/progress.service';

type Student = {
  userId: string;
  fullName: string;
  email: string;
  enrolledAt: string;
};

@Component({
  selector: 'app-enrolled-students',
  imports: [CommonModule],
  templateUrl: './enrolled-students.html',
  styleUrl: './enrolled-students.css',
})
export class EnrolledStudents implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly authService = inject(AuthService);
  private readonly api = inject(LearningApiService);
  private readonly progressService = inject(ProgressService);
  protected readonly lang = inject(LanguageService);

  /** userId → composite progress % (server-computed) — helps decide who earned a certificate. */
  protected readonly progressByUser = signal<Map<string, number>>(new Map());

  /** যেখান থেকে এসেছে (admin → course-manager, teacher → teacher panel) সেখানেই ফেরত। */
  protected goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
      return;
    }
    const role = this.authService.getCurrentUser()?.role;
    this.router.navigateByUrl(role === 2 ? '/course-manager' : '/teacher');
  }

  protected readonly students = signal<Student[]>([]);
  protected readonly issuedUserIds = signal<string[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly issuingId = signal<string | null>(null);
  protected readonly notice = signal('');
  protected readonly noticeType = signal<'success' | 'error'>('success');
  protected readonly courseId = signal('');
  protected readonly courseName = signal('');

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('courseId') ?? '';
    this.courseId.set(id);
    void this.loadData(id);
  }

private async loadData(courseId: string): Promise<void> {
  this.isLoading.set(true);
  try {
    // Enrolled students + course name load
    const res = await firstValueFrom(this.api.getEnrolledStudents(courseId));
    
    const data = res?.data ?? res?.Data ?? [];
    this.students.set(Array.isArray(data) ? data : []);

    const courseName = res?.courseName ?? res?.CourseName ?? '';
    
    this.courseName.set(courseName);

    // Already issued certificates load
    const certRes = await firstValueFrom(
      this.api.getCourseCertificates(courseId)
    ).catch(() => ({ data: [] }));
    const certData = (certRes as any)?.data ?? (certRes as any)?.Data ?? [];
    this.issuedUserIds.set(
      certData.map((c: any) => String(c.userId ?? c.UserId ?? ''))
    );
  } catch (err) {
    this.setNotice('ডেটা লোড করা যায়নি।', 'error');
  } finally {
    this.isLoading.set(false);
  }

  // Composite progress per student — best-effort, column just stays empty on failure.
  try {
    const rows = await firstValueFrom(this.progressService.getCourseStudentsProgress(courseId));
    this.progressByUser.set(new Map(rows.map((r) => [String(r.userId), Math.round(r.overallPercent)])));
  } catch {
    /* keep empty */
  }
}

  protected hasReceived(userId: string): boolean {
    return this.issuedUserIds().includes(String(userId));
  }

  protected hasProgress(userId: string): boolean {
    return this.progressByUser().has(String(userId));
  }

  protected progressFor(userId: string): number {
    return this.progressByUser().get(String(userId)) ?? 0;
  }


protected async issueCertificate(student: Student): Promise<void> {
  this.issuingId.set(student.userId);
  console.log('ISSUING:', {
    userId: student.userId,
    courseId: this.courseId(),
    studentName: student.fullName,
    courseName: this.courseName()  // ← এটা কী দেখাচ্ছে?
  });
  try {
    await firstValueFrom(this.api.issueCertificate({
      userId: student.userId,
      courseId: this.courseId(),
      studentName: student.fullName,
      courseName: this.courseName(),
    }));
    this.issuedUserIds.update(ids => [...ids, student.userId]);
    this.setNotice(`✅ ${student.fullName} কে certificate দেওয়া হয়েছে।`, 'success');
  } catch {
    this.setNotice('Certificate দেওয়া যায়নি।', 'error');
  } finally {
    this.issuingId.set(null);
  }
}
  protected getInitial(name: string): string {
    return (name ?? '?').charAt(0).toUpperCase();
  }

  private setNotice(msg: string, type: 'success' | 'error'): void {
    this.notice.set(msg);
    this.noticeType.set(type);
    setTimeout(() => this.notice.set(''), 4000);
  }
}