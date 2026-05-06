import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';
import { firstValueFrom } from 'rxjs';
import jsPDF from 'jspdf';

interface CertificateItem {
  id: string;
  courseId: string;
  courseName: string;
  studentName: string;
  issuedAt?: string;
  isIssued: boolean;
}

@Component({
  selector: 'app-certificates',
  imports: [CommonModule, RouterLink],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css',
})
export class Certificates implements OnInit {
  private auth = inject(AuthService);
  private api = inject(LearningApiService);
  private router = inject(Router);
  readonly lang = inject(LanguageService);

  protected certs = signal<CertificateItem[]>([]);
  protected isLoading = signal(true);
  protected isLoggedIn = signal(false);
  protected userName = signal('');
  protected userRole = signal<number | null>(null);
  protected isTeacher = computed(() => this.userRole() === 1);
  protected userInitial = computed(() => this.userName().charAt(0).toUpperCase());

  ngOnInit() {
    // Subscribe to auth state changes
    this.auth.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn.set(isLoggedIn);
    });

    this.auth.currentUser$.subscribe((user) => {
      if (user && user.fullName) {
        this.userName.set(user.fullName);
      }
      this.userRole.set(typeof user?.role === 'number' ? user.role : null);
    });

    const userId = this.auth.getCurrentUser()?.id;
    if (userId) void this.load(String(userId));
  }

  private async load(userId: string) {
    try {
      // Get all courses
      const response = await firstValueFrom(this.api.getAllCourses());
      const alternative = response as { Data?: CourseDto[] };
      const rawCourses = Array.isArray(response.data)
        ? response.data
        : (Array.isArray(alternative.Data) ? alternative.Data : []);

      // Check which courses are enrolled
      const enrollmentChecks = await Promise.all(
        rawCourses.map(async (course) => {
          try {
            const isEnrolled = await firstValueFrom(this.api.checkMyEnrollment(course.id));
            return {
              course,
              isEnrolled,
            };
          } catch {
            return {
              course,
              isEnrolled: false,
            };
          }
        }),
      );

      // Get issued certificates
      const certRes = await firstValueFrom(this.api.getMyCertificates(userId));
      const issuedCerts = certRes?.data ?? certRes?.Data ?? [];

      // Create certificate items only for enrolled courses
      const certificateItems: CertificateItem[] = enrollmentChecks
        .filter((item) => item.isEnrolled)
        .map((item) => {
          const course = item.course;
          const issuedCert = issuedCerts.find((cert: any) => cert.courseId === course.id);
          return {
            id: issuedCert?.id || `${course.id}-locked`,
            courseId: course.id,
            courseName: course.title,
            studentName: this.auth.getCurrentUser()?.name || 'Student',
            issuedAt: issuedCert?.issuedAt,
            isIssued: !!issuedCert
          };
        });

      this.certs.set(certificateItems);
    } catch (error) {
      console.error('Error loading certificates:', error);
      this.certs.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  protected goToCourses() {
    this.router.navigate(['/courses']);
  }

  protected logout() {
    this.auth.logout();
  }

  protected downloadCertificate(cert: any) {
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const W = 297, H = 210;

    // Background
    doc.setFillColor(245, 248, 255);
    doc.rect(0, 0, W, H, 'F');

    // Gold border
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(3);
    doc.rect(10, 10, W - 20, H - 20);
    doc.setLineWidth(1);
    doc.rect(14, 14, W - 28, H - 28);

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(36);
    doc.setTextColor(30, 60, 120);
    doc.text('Certificate of Completion', W / 2, 55, { align: 'center' });

    // Subtitle line
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.8);
    doc.line(60, 62, W - 60, 62);

    // "This is to certify that"
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(14);
    doc.setTextColor(80, 80, 80);
    doc.text('This is to certify that', W / 2, 78, { align: 'center' });

    // Student Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(30);
    doc.setTextColor(20, 20, 80);
    doc.text(cert.studentName, W / 2, 100, { align: 'center' });

    // Underline name
    const nameWidth = doc.getTextWidth(cert.studentName);
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.5);
    doc.line((W - nameWidth) / 2, 104, (W + nameWidth) / 2, 104);

    // "has successfully completed"
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(14);
    doc.setTextColor(80, 80, 80);
    doc.text('has successfully completed the course', W / 2, 118, { align: 'center' });

    // Course Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(30, 60, 120);
    doc.text(`"${cert.courseName}"`, W / 2, 135, { align: 'center' });

    // Date
    const date = new Date(cert.issuedAt).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Issued on: ${date}`, W / 2, 155, { align: 'center' });

    // Platform name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(30, 60, 120);
    doc.text('Nirvoor Nije Sikhi', W / 2, 175, { align: 'center' });

    doc.save(`certificate-${cert.studentName}-${cert.courseName}.pdf`);
  }
}