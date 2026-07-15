import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminService, DashboardStats, AdminTeacher, AdminStudent, AdminCourse, AdminComment } from '../../Service/admin.service';
import { AuthService } from '../../Service/auth.service';
import { AdminItem } from '../admin-item/admin-item';
import { AnnouncementBanner } from '../announcement-banner/announcement-banner';
import { Announcement, AnnouncementService } from '../../Service/announcement-service';
import { LanguageService } from '../../Service/language.service';
import { Category, CategoryService, categoryIcon } from '../../Service/category.service';
import { LearningApiService } from '../../Service/learning-api.service';
import { Teacher } from '../../base/teacher/teacher';
import { AdminSettings } from '../admin-settings/admin-settings';
import { ParentReportService, ParentReportSummary } from '../../Service/parent-report.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

type Tab = 'dashboard' | 'teachers' | 'students' | 'courses' | 'categories' | 'comments' | 'store-items'|'announcements'|'settings'|'parent-reports';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, FormsModule, AdminItem, Teacher, AdminSettings],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {
  private readonly tabStorageKey = 'admin_dashboard_active_tab';

  private readonly adminService = inject(AdminService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly annSvc = inject(AnnouncementService);
  private readonly categoryService = inject(CategoryService);
  private readonly learningApi = inject(LearningApiService);
  private readonly parentReportService = inject(ParentReportService);
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly lang = inject(LanguageService);

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

  // ── Categories ──────────────────────────────────────
  categories     = signal<Category[]>([]);
  newCategoryName = signal('');
  editingCategoryId = signal<string | null>(null);
  editingCategoryName = signal('');
  // Add-category modal state
  showCategoryModal = signal(false);
  categoryModalError = signal('');
  isSavingCategory = signal(false);

  // ── Parent monthly reports ──────────────────────────
  // default = previous month (the scheduler's rule): report always covers a FINISHED month
  prMonth = signal(AdminDashboard.previousMonthStr());
  prForce = signal(false);
  prSending = signal(false);
  prSummary = signal<ParentReportSummary | null>(null);
  prPreviewHtml = signal<SafeHtml | null>(null);
  prPreviewName = signal('');
  prPreviewLoading = signal(false);
  prSearch = signal('');

  filteredPrStudents = computed(() => {
    const query = this.prSearch().toLowerCase().trim();
    if (!query) return this.students();
    return this.students().filter(s =>
      s.fullName.toLowerCase().includes(query) || s.email.toLowerCase().includes(query));
  });

  private static previousMonthStr(): string {
    const d = new Date();
    d.setMonth(d.getMonth() - 1);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  }

  /** "2026-07" → { year: 2026, month: 7 } (null when the picker is empty). */
  private prYearMonth(): { year: number; month: number } | null {
    const m = /^(\d{4})-(\d{2})$/.exec(this.prMonth());
    if (!m) return null;
    return { year: Number(m[1]), month: Number(m[2]) };
  }

  prMonthLabel(): string {
    const ym = this.prYearMonth();
    if (!ym) return '';
    const namesEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const namesBn = ['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
    return `${(this.lang.isBangla() ? namesBn : namesEn)[ym.month - 1]} ${ym.year}`;
  }

  sendParentReports() {
    const ym = this.prYearMonth();
    if (!ym) { this.showMessage(this.lang.isBangla() ? 'মাস নির্বাচন করো।' : 'Pick a month first.', 'error'); return; }
    const force = this.prForce();
    const ask = this.lang.isBangla()
      ? `${this.prMonthLabel()} মাসের রিপোর্ট সব অভিভাবকের ইমেইলে পাঠানো হবে${force ? ' (আগে পাঠানোগুলোও আবার যাবে!)' : ''}। নিশ্চিত?`
      : `Send ${this.prMonthLabel()} reports to all parent emails${force ? ' (already-sent ones will be RE-sent!)' : ''}?`;
    if (!confirm(ask)) return;

    this.prSending.set(true);
    this.prSummary.set(null);
    this.parentReportService.send(ym.year, ym.month, force).subscribe({
      next: (summary) => {
        this.prSending.set(false);
        this.prSummary.set(summary);
        const msg = this.lang.isBangla()
          ? `${summary.sent}টি পাঠানো হয়েছে, ${summary.skipped}টি আগেই পাঠানো, ${summary.failed}টি ব্যর্থ।`
          : `${summary.sent} sent, ${summary.skipped} already sent, ${summary.failed} failed.`;
        this.showMessage(msg, summary.failed > 0 ? 'error' : 'success');
      },
      error: (e) => {
        this.prSending.set(false);
        this.showMessage(e?.error?.message ?? (this.lang.isBangla() ? 'পাঠানো যায়নি।' : 'Send failed.'), 'error');
      },
    });
  }

  openPrPreview(student: AdminStudent) {
    const ym = this.prYearMonth();
    if (!ym) { this.showMessage(this.lang.isBangla() ? 'মাস নির্বাচন করো।' : 'Pick a month first.', 'error'); return; }
    this.prPreviewName.set(student.fullName);
    this.prPreviewLoading.set(true);
    this.prPreviewHtml.set(this.sanitizer.bypassSecurityTrustHtml(''));
    this.parentReportService.preview(student.id, ym.year, ym.month).subscribe({
      next: (html) => {
        this.prPreviewLoading.set(false);
        // trusted: HTML is rendered by OUR backend from data we store; shown inside a sandboxed iframe
        this.prPreviewHtml.set(this.sanitizer.bypassSecurityTrustHtml(html));
      },
      error: () => {
        this.prPreviewLoading.set(false);
        this.prPreviewHtml.set(null);
        this.showMessage(this.lang.isBangla() ? 'প্রিভিউ আনা যায়নি।' : 'Could not load the preview.', 'error');
      },
    });
  }

  closePrPreview() {
    this.prPreviewHtml.set(null);
    this.prPreviewName.set('');
    this.prPreviewLoading.set(false);
  }

  // Search filters for all sections
  searchQuery = signal('');
  teacherSearch = signal('');
  studentSearch = signal('');

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

  // The Courses tab now embeds the full course-manager (<app-teacher [embedded]>),
  // so the old per-category grouping/search/expand state lives there, not here.
  // `courses` + `categoryCourseCount` are still used by the Categories tab.

  // ── Dashboard charts (derived from the courses list — no extra endpoint) ──
  /** Validated categorical palette (fixed slot order — CVD-safe). */
  private readonly chartPalette = ['#2a78d6', '#1baf7a', '#eda100', '#008300', '#4a3aa7', '#e34948'];

  /** Top courses ranked by enrollments — single-hue horizontal bars. */
  topCourses = computed(() => {
    const ranked = [...this.courses()]
      .filter(c => c.enrollmentCount > 0)
      .sort((a, b) => b.enrollmentCount - a.enrollmentCount)
      .slice(0, 6);
    const max = Math.max(1, ...ranked.map(c => c.enrollmentCount));
    return ranked.map(c => ({
      title: c.title,
      count: c.enrollmentCount,
      pct: Math.max(3, Math.round((c.enrollmentCount / max) * 100)),
    }));
  });

  /** Course share per category — top 5 + "Other", stable palette slots. */
  categoryShare = computed(() => {
    const counts = new Map<string, number>();
    for (const c of this.courses()) {
      const key = (c.category || '').trim() || 'Other';
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
    const rows = sorted.slice(0, 5).map(([name, count], i) => ({ name, count, color: this.chartPalette[i] }));
    const tail = sorted.slice(5).reduce((sum, [, n]) => sum + n, 0);
    if (tail > 0) rows.push({ name: 'Other', count: tail, color: '#898781' });
    const total = rows.reduce((sum, r) => sum + r.count, 0) || 1;
    return rows.map(r => ({ ...r, pct: Math.round((r.count / total) * 1000) / 10 }));
  });

  // Comment edit state
  editingCommentId = signal<string | null>(null);
  editingContent   = signal('');

  /** Emoji for a category card (derived from its name — shared with home & courses pages). */
  catIcon(name: string): string {
    return categoryIcon(name);
  }
  categoryCourseCount(name: string): number {
    return this.courses().filter(c => c.category === name).length;
  }

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
      case 'dashboard': this.loadDashboard(); this.loadCourses(); break;   // courses feed the overview charts
      case 'teachers': this.loadTeachers(); break;
      case 'students': this.loadStudents(); break;
      case 'courses': this.loadCourses(); break;
      case 'categories': this.loadCourses(); this.loadCategories(); break;   // courses power per-category counts; categories are the admin-managed list
      case 'comments': this.loadComments(); break;
      case 'store-items': break;
      case 'announcements': this.loadAnnouncements(); break;
      case 'settings': break; // self-contained child component; no data preload needed
      case 'parent-reports': this.loadStudents(); break;   // student list powers per-student preview
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
      || value === 'categories'
      || value === 'comments'
      || value === 'store-items'
      || value === 'announcements'
      || value === 'settings'
      || value === 'parent-reports';
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

  // ── Categories ──────────────────────────────────────
  loadCategories() {
    this.isLoading.set(true);
    this.categoryService.getAll().subscribe({
      next: (res: any) => { this.categories.set(res?.data ?? res?.Data ?? []); this.isLoading.set(false); },
      error: () => this.isLoading.set(false)
    });
  }

  openCategoryModal() {
    this.newCategoryName.set('');
    this.categoryModalError.set('');
    this.showCategoryModal.set(true);
  }

  closeCategoryModal() {
    if (this.isSavingCategory()) return;   // don't close mid-save
    this.showCategoryModal.set(false);
    this.newCategoryName.set('');
    this.categoryModalError.set('');
  }

  createCategory() {
    const name = this.newCategoryName().trim();
    if (!name) { this.categoryModalError.set('Please type a category name.'); return; }
    // Block duplicates up-front (case-insensitive) so the admin gets instant, clear feedback
    // right inside the modal — the backend also rejects duplicates as a safety net.
    if (this.categories().some(c => c.name.toLowerCase() === name.toLowerCase())) {
      this.categoryModalError.set(`A category named "${name}" already exists.`);
      return;
    }
    this.isSavingCategory.set(true);
    this.categoryModalError.set('');
    this.categoryService.create(name).subscribe({
      next: () => {
        this.isSavingCategory.set(false);
        this.showCategoryModal.set(false);
        this.newCategoryName.set('');
        this.showMessage('Category created.', 'success');
        this.loadCategories();
      },
      error: (e) => {
        this.isSavingCategory.set(false);
        this.categoryModalError.set(this.categoryError(e, 'Failed to create category.'));
      }
    });
  }

  startEditCategory(cat: Category) {
    this.editingCategoryId.set(cat.id);
    this.editingCategoryName.set(cat.name);
  }

  cancelEditCategory() {
    this.editingCategoryId.set(null);
    this.editingCategoryName.set('');
  }

  saveCategory(id: string) {
    const name = this.editingCategoryName().trim();
    if (!name) { this.showMessage('Category name is required.', 'error'); return; }
    this.categoryService.update(id, name).subscribe({
      next: (res: any) => { this.showMessage(res?.message ?? res?.Message ?? 'Category updated.', 'success'); this.cancelEditCategory(); this.loadCategories(); },
      error: (e) => this.showMessage(this.categoryError(e, 'Failed to update category.'), 'error')
    });
  }

  deleteCategory(id: string) {
    if (!confirm('Delete this category? Courses in it keep their category name.')) return;
    this.categoryService.delete(id).subscribe({
      next: () => { this.showMessage('Category deleted.', 'success'); this.loadCategories(); },
      error: (e) => this.showMessage(this.categoryError(e, 'Failed to delete category.'), 'error')
    });
  }

  /** Pull the exact message the API returned (handles camelCase + PascalCase bodies). */
  private categoryError(e: any, fallback: string): string {
    return e?.error?.message ?? e?.error?.Message ?? fallback;
  }

  onCategoryImageSelected(event: Event, id: string) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.categoryService.uploadImage(id, file).subscribe({
      next: () => { this.showMessage('Image updated.', 'success'); this.loadCategories(); },
      error: () => this.showMessage('Failed to upload image.', 'error')
    });
    input.value = '';
  }

  categoryImageUrl(path?: string | null): string {
    return path ? this.learningApi.buildDownloadUrl(path) : '';
  }

  /** Open the course manager (reused teacher authoring) for a category, or for all courses. */
  manageCourses(categoryName?: string) {
    this.router.navigate(['/course-manager'], categoryName ? { queryParams: { category: categoryName } } : {});
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