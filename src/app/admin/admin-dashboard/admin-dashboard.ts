import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminService, DashboardStats, AdminTeacher, AdminStudent, AdminCourse, AdminComment } from '../../Service/admin.service';
import { AuthService } from '../../Service/auth.service';
import { AdminItem } from '../admin-item/admin-item';
import { AnnouncementBanner } from '../announcement-banner/announcement-banner';
import { Announcement, AnnouncementService } from '../../Service/announcement-service';

type Tab = 'dashboard' | 'teachers' | 'students' | 'courses' | 'comments' | 'store-items'|'announcements';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, FormsModule, AdminItem],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {
  private readonly tabStorageKey = 'admin_dashboard_active_tab';

  private readonly adminService = inject(AdminService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly annSvc = inject(AnnouncementService);

  readonly annTypes = [
    { value: 'info', label: 'Info', icon: '📢' },
    { value: 'success', label: 'Success', icon: '✅' },
    { value: 'warning', label: 'Warning', icon: '⚠️' },
    { value: 'urgent', label: 'Urgent', icon: '🚨' },
  ] as const;

getAnnIcon(type: string): string {
  const map: Record<string, string> = {
    'info':    '📢',
    'success': '✅',
    'warning': '⚠️',
    'urgent':  '🚨'
  };
  return map[type] ?? '📢';
}
 
announcements  = signal<Announcement[]>([]);
annTitle       = signal('');
annMessage     = signal('');
annType        = signal('info');
annExpiry      = signal('');
annSubmitting  = signal(false);

  activeTab = signal<Tab>('dashboard');
  isLoading = signal(false);
  message = signal('');
  messageType = signal<'success' | 'error'>('success');

  stats    = signal<DashboardStats | null>(null);
  teachers = signal<AdminTeacher[]>([]);
  students = signal<AdminStudent[]>([]);
  courses  = signal<AdminCourse[]>([]);
  comments = signal<AdminComment[]>([]);   // ✅

  // Search filters for all sections
  searchQuery = signal('');
  teacherSearch = signal('');
  studentSearch = signal('');
  courseSearch = signal('');

  // Sorted comments with flagged on top
  sortedComments = computed(() => {
    const allComments = this.comments();
    return [...allComments].sort((a, b) => {
      if (a.isFlagged && !b.isFlagged) return -1;
      if (!a.isFlagged && b.isFlagged) return 1;
      return 0;
    });
  });

  // Filtered and sorted comments
  filteredComments = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.sortedComments();
    
    return this.sortedComments().filter(comment =>
      comment.userName.toLowerCase().includes(query) ||
      comment.courseTitle.toLowerCase().includes(query) ||
      comment.content.toLowerCase().includes(query)
    );
  });

  // Filtered teachers
  filteredTeachers = computed(() => {
    const query = this.teacherSearch().toLowerCase().trim();
    if (!query) return this.teachers();
    
    return this.teachers().filter(teacher =>
      teacher.fullName.toLowerCase().includes(query) ||
      teacher.email.toLowerCase().includes(query)
    );
  });

  // Filtered students
  filteredStudents = computed(() => {
    const query = this.studentSearch().toLowerCase().trim();
    if (!query) return this.students();
    
    return this.students().filter(student =>
      student.fullName.toLowerCase().includes(query) ||
      student.email.toLowerCase().includes(query)
    );
  });

  // Filtered courses
  filteredCourses = computed(() => {
    const query = this.courseSearch().toLowerCase().trim();
    if (!query) return this.courses();
    
    return this.courses().filter(course =>
      course.title.toLowerCase().includes(query) ||
      course.teacherName.toLowerCase().includes(query)
    );
  });

  // Comment edit state
  editingCommentId = signal<string | null>(null);
  editingContent   = signal('');

  ngOnInit() {
    const savedTab = this.getStoredTab();
    this.activeTab.set(savedTab);
    this.loadTabData(savedTab);
  }

  setTab(tab: Tab) {
    this.activeTab.set(tab);
    this.saveTab(tab);
    this.message.set('');
    this.editingCommentId.set(null);
    this.loadTabData(tab);
  }

  private loadTabData(tab: Tab) {
    switch (tab) {
      case 'dashboard': this.loadDashboard(); break;
      case 'teachers': this.loadTeachers(); break;
      case 'students': this.loadStudents(); break;
      case 'courses': this.loadCourses(); break;
      case 'comments': this.loadComments(); break;
      case 'store-items': break;
      case 'announcements': this.loadAnnouncements(); break;
    }
  }

  private getStoredTab(): Tab {
    const storedTab = localStorage.getItem(this.tabStorageKey);
    return this.isTab(storedTab) ? storedTab : 'dashboard';
  }

  private saveTab(tab: Tab) {
    localStorage.setItem(this.tabStorageKey, tab);
  }

  private isTab(value: string | null): value is Tab {
    return value === 'dashboard'
      || value === 'teachers'
      || value === 'students'
      || value === 'courses'
      || value === 'comments'
      || value === 'store-items'
      || value === 'announcements';
  }

  loadDashboard() {
    this.isLoading.set(true);
    this.adminService.getDashboard().subscribe({
      next: (data) => { this.stats.set(data); this.isLoading.set(false); },
      error: () => this.isLoading.set(false)
    });
  }

  loadTeachers() {
    this.isLoading.set(true);
    this.adminService.getTeachers().subscribe({
      next: (data) => { this.teachers.set(data); this.isLoading.set(false); },
      error: () => this.isLoading.set(false)
    });
  }

  loadStudents() {
    this.isLoading.set(true);
    this.adminService.getStudents().subscribe({
      next: (data) => { this.students.set(data); this.isLoading.set(false); },
      error: () => this.isLoading.set(false)
    });
  }

  loadCourses() {
    this.isLoading.set(true);
    this.adminService.getCourses().subscribe({
      next: (data) => { this.courses.set(data); this.isLoading.set(false); },
      error: () => this.isLoading.set(false)
    });
  }

  loadComments() {
    this.isLoading.set(true);
    this.adminService.getComments().subscribe({
      next: (data) => { this.comments.set(data); this.isLoading.set(false); },
      error: () => this.isLoading.set(false)
    });
  }

  approveTeacher(id: string) {
    this.adminService.approveTeacher(id).subscribe({
      next: () => { this.showMessage('Teacher approved!', 'success'); this.loadTeachers(); },
      error: () => this.showMessage('Failed.', 'error')
    });
  }

  blockTeacher(id: string) {
    this.adminService.blockTeacher(id).subscribe({
      next: () => { this.showMessage('Teacher blocked.', 'success'); this.loadTeachers(); },
      error: () => this.showMessage('Failed.', 'error')
    });
  }

  blockStudent(id: string) {
    this.adminService.blockStudent(id).subscribe({
      next: () => { this.showMessage('Student blocked.', 'success'); this.loadStudents(); },
      error: () => this.showMessage('Failed.', 'error')
    });
  }

  unblockStudent(id: string) {
    this.adminService.unblockStudent(id).subscribe({
      next: () => { this.showMessage('Student unblocked.', 'success'); this.loadStudents(); },
      error: () => this.showMessage('Failed.', 'error')
    });
  }

  deleteCourse(id: string) {
    if (!confirm('Delete this course?')) return;
    this.adminService.deleteCourse(id).subscribe({
      next: () => { this.showMessage('Course deleted.', 'success'); this.loadCourses(); },
      error: () => this.showMessage('Failed.', 'error')
    });
  }

  // ── Comment actions ──────────────────────────────

  startEdit(comment: AdminComment) {
    this.editingCommentId.set(comment.id);
    this.editingContent.set(comment.content);
  }

  cancelEdit() {
    this.editingCommentId.set(null);
    this.editingContent.set('');
  }

  saveEdit(id: string) {
    if (!this.editingContent().trim()) return;
    this.adminService.editComment(id, this.editingContent()).subscribe({
      next: () => {
        this.showMessage('Comment updated.', 'success');
        this.editingCommentId.set(null);
        this.loadComments();
      },
      error: () => this.showMessage('Failed to update.', 'error')
    });
  }

  deleteComment(id: string) {
    if (!confirm('Delete this comment?')) return;
    this.adminService.deleteComment(id).subscribe({
      next: () => { this.showMessage('Comment deleted.', 'success'); this.loadComments(); },
      error: () => this.showMessage('Failed.', 'error')
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  private showMessage(msg: string, type: 'success' | 'error') {
    this.message.set(msg);
    this.messageType.set(type);
    setTimeout(() => this.message.set(''), 3000);
  }

  loadAnnouncements() {
  this.isLoading.set(true);
  this.annSvc.getAll().subscribe({
    next: (r) => { this.announcements.set(r.data ?? []); this.isLoading.set(false); },
    error: () => this.isLoading.set(false)
  });
}
 
createAnnouncement() {
  if (!this.annMessage().trim()) return;
  this.annSubmitting.set(true);
  this.annSvc.create({
    title: this.annTitle(),
    message: this.annMessage(),
    type: this.annType(),
    expiresAt: this.annExpiry() ? this.annExpiry() + ':00' : null
  }).subscribe({
    next: () => {
      this.showMessage('Announcement created!', 'success');
      this.annTitle.set(''); this.annMessage.set('');
      this.annType.set('info'); this.annExpiry.set('');
      this.annSubmitting.set(false);
      this.loadAnnouncements();
    },
    error: () => { this.showMessage('Failed.', 'error'); this.annSubmitting.set(false); }
  });
}
 
deactivateAnn(id: string) {
  this.annSvc.deactivate(id).subscribe({
    next: () => { this.showMessage('Deactivated.', 'success'); this.loadAnnouncements(); },
    error: () => this.showMessage('Failed.', 'error')
  });
}
 
deleteAnn(id: string) {
  if (!confirm('Delete this announcement?')) return;
  this.annSvc.delete(id).subscribe({
    next: () => { this.showMessage('Deleted.', 'success'); this.loadAnnouncements(); },
    error: () => this.showMessage('Failed.', 'error')
  });
}
 
getAnnTypeLabel(type: string): string {
  const m: Record<string, string> = { info: '📢 Info', warning: '⚠️ Warning', success: '✅ Success', urgent: '🚨 Urgent' };
  return m[type] ?? type;
}
}