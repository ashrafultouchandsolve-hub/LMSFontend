import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { LearningApiService } from '../../Service/learning-api.service';

type Student = {
  userId: string;
  fullName: string;
  email: string;
  enrolledAt: string;
};

@Component({
  selector: 'app-enrolled-students',
  imports: [CommonModule, RouterLink],
  templateUrl: './enrolled-students.html',
  styleUrl: './enrolled-students.css',
})
export class EnrolledStudents implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(LearningApiService);

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
}

  protected hasReceived(userId: string): boolean {
    return this.issuedUserIds().includes(String(userId));
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