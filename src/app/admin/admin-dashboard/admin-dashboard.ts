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
import { ConfirmService } from '../../Service/confirm.service';
import { Coupon, CouponDiscountType, CouponSelectableCourse, CouponService } from '../../Service/coupon.service';
import { ToastrService } from 'ngx-toastr';
import { apiError } from '../../Service/api-error';

type Tab = 'dashboard' | 'teachers' | 'students' | 'courses' | 'categories' | 'comments' | 'store-items'|'announcements'|'settings'|'parent-reports'|'coupons';

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
  private readonly confirmDialog = inject(ConfirmService);
  private readonly couponService = inject(CouponService);
  private readonly toastr = inject(ToastrService);
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

  async sendParentReports() {
    const ym = this.prYearMonth();
    if (!ym) { this.showMessage(this.lang.isBangla() ? 'মাস নির্বাচন করো।' : 'Pick a month first.', 'error'); return; }
    const force = this.prForce();
    const ask = this.lang.isBangla()
      ? `${this.prMonthLabel()} মাসের রিপোর্ট সব অভিভাবকের ইমেইলে পাঠানো হবে${force ? ' (আগে পাঠানোগুলোও আবার যাবে!)' : ''}।`
      : `Send ${this.prMonthLabel()} reports to all parent emails${force ? ' (already-sent ones will be RE-sent!)' : ''}?`;
    if (!(await this.confirmDialog.confirm({
      title: this.lang.isBangla() ? 'রিপোর্ট পাঠাবেন?' : 'Send reports?',
      message: ask,
      icon: '📧',
      confirmText: this.lang.isBangla() ? 'পাঠান' : 'Send',
    }))) return;

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
      case 'coupons': this.loadCoupons(); this.loadCouponCourses(); break;   // courses feed the picker
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
      || value === 'parent-reports'
      || value === 'coupons';
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

  async deleteCategory(id: string) {
    if (!(await this.confirmDialog.confirm({
      title: 'Delete category?',
      message: 'Courses in it keep their category name.',
      tone: 'danger',
      confirmText: 'Delete',
    }))) return;
    this.categoryService.delete(id).subscribe({
      next: () => { this.showMessage('Category deleted.', 'success'); this.loadCategories(); },
      error: (e) => this.showMessage(this.categoryError(e, 'Failed to delete category.'), 'error')
    });
  }

  /** Kept as a thin alias so existing call sites read naturally; delegates to the shared extractor. */
  private categoryError(e: any, fallback: string): string {
    return apiError(e, fallback);
  }

  onCategoryImageSelected(event: Event, id: string) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.categoryService.uploadImage(id, file).subscribe({
      next: () => { this.showMessage('Image updated.', 'success'); this.loadCategories(); },
      error: (e) => this.showMessage(this.apiErr(e, 'Could not upload the image. Please try again.'), 'error')
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
      error: (e) => this.showMessage(this.apiErr(e, 'Could not approve this teacher. Please try again.'), 'error')
    });
  }

  blockTeacher(id: string) {
    this.adminService.blockTeacher(id).subscribe({
      next: () => { this.showMessage('Teacher blocked.', 'success'); this.loadTeachers(); },
      error: (e) => this.showMessage(this.apiErr(e, 'Could not block this teacher. Please try again.'), 'error')
    });
  }

  blockStudent(id: string) {
    this.adminService.blockStudent(id).subscribe({
      next: () => { this.showMessage('Student blocked.', 'success'); this.loadStudents(); },
      error: (e) => this.showMessage(this.apiErr(e, 'Could not block this student. Please try again.'), 'error')
    });
  }

  unblockStudent(id: string) {
    this.adminService.unblockStudent(id).subscribe({
      next: () => { this.showMessage('Student unblocked.', 'success'); this.loadStudents(); },
      error: (e) => this.showMessage(this.apiErr(e, 'Could not unblock this student. Please try again.'), 'error')
    });
  }

  async deleteCourse(id: string) {
    // Irreversible full delete — DB rows + all uploaded files on the server. Warn hard.
    if (!(await this.confirmDialog.confirm({
      title: this.lang.isBangla() ? 'কোর্স ডিলিট করবেন?' : 'Delete course?',
      message: this.lang.t().courseDeleteConfirm,
      tone: 'danger',
      confirmText: this.lang.isBangla() ? 'ডিলিট' : 'Delete',
    }))) return;
    this.adminService.deleteCourse(id).subscribe({
      next: () => { this.showMessage(this.lang.t().courseDeleted, 'success'); this.loadCourses(); },
      error: (e) => this.showMessage(this.apiErr(e, 'Could not delete this course. Please try again.'), 'error')
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
      error: (e) => this.showMessage(this.apiErr(e, 'Could not update this comment. Please try again.'), 'error')
    });
  }

  async deleteComment(id: string) {
    if (!(await this.confirmDialog.confirm({
      title: 'Delete comment?',
      message: 'This comment will be removed permanently.',
      tone: 'danger',
      confirmText: 'Delete',
    }))) return;
    this.adminService.deleteComment(id).subscribe({
      next: () => { this.showMessage('Comment deleted.', 'success'); this.loadComments(); },
      error: (e) => this.showMessage(this.apiErr(e, 'Could not delete this comment. Please try again.'), 'error')
    });
  }

  // ── Coupons ─────────────────────────────────────────
  // Admin binds a code to one or more courses. Each course card shows whether that course
  // already has a discount campaign running, because the coupon stacks on top of it — the
  // admin needs to see the real starting price before choosing a value.
  readonly couponTypes = [
    { value: CouponDiscountType.Percent, label: 'Percent', icon: '%' },
    { value: CouponDiscountType.Flat, label: 'Flat', icon: '৳' },
  ] as const;

  coupons = signal<Coupon[]>([]);
  couponCourses = signal<CouponSelectableCourse[]>([]);
  couponCourseSearch = signal('');

  cpEditingId = signal<string | null>(null);
  cpCode = signal('');
  cpType = signal<CouponDiscountType>(CouponDiscountType.Percent);
  cpValue = signal<number | null>(null);
  cpStart = signal(AdminDashboard.todayStr());
  cpEnd = signal('');
  cpMaxUses = signal<number | null>(null);
  cpSelectedCourseIds = signal<string[]>([]);
  cpSaving = signal(false);
  cpError = signal('');

  private static todayStr(): string {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  filteredCouponCourses = computed(() => {
    const query = this.couponCourseSearch().toLowerCase().trim();
    if (!query) return this.couponCourses();
    return this.couponCourses().filter(c =>
      c.title.toLowerCase().includes(query) || (c.category ?? '').toLowerCase().includes(query));
  });

  /** The courses currently ticked — drives the live "students will pay" preview. */
  cpSelectedCourses = computed(() => {
    const ids = this.cpSelectedCourseIds();
    return this.couponCourses().filter(c => ids.includes(c.id));
  });

  /** Percent vs flat — read by the template for the unit symbol and the 100 cap. */
  cpIsPercent = computed(() => this.cpType() === CouponDiscountType.Percent);

  isCourseSelected(courseId: string): boolean {
    return this.cpSelectedCourseIds().includes(courseId);
  }

  toggleCouponCourse(courseId: string) {
    this.cpSelectedCourseIds.update(ids =>
      ids.includes(courseId) ? ids.filter(id => id !== courseId) : [...ids, courseId]);
    this.cpError.set('');
  }

  selectAllCouponCourses() {
    this.cpSelectedCourseIds.set(this.filteredCouponCourses().map(c => c.id));
  }

  clearCouponCourses() {
    this.cpSelectedCourseIds.set([]);
  }

  /** What a student would pay for this course with the coupon as currently typed. */
  couponFinalPrice(course: CouponSelectableCourse): number {
    const base = course.effectivePrice;
    const value = this.cpValue() ?? 0;
    if (base <= 0 || value <= 0) return base;
    const off = this.cpType() === CouponDiscountType.Percent
      ? (base * Math.min(value, 100)) / 100
      : value;
    return Math.round(Math.max(0, base - Math.min(off, base)) * 100) / 100;
  }

  /** "20% off" / "৳500 off" — used on both the form preview and the coupon list. */
  couponValueLabel(type: CouponDiscountType, value: number): string {
    return type === CouponDiscountType.Percent ? `${value}% off` : `৳${value} off`;
  }

  couponStatus(coupon: Coupon): { label: string; tone: 'live' | 'scheduled' | 'ended' | 'used-up' } {
    if (coupon.isExhausted) return { label: 'Used up', tone: 'used-up' };
    if (coupon.isRunning) return { label: 'Live', tone: 'live' };
    // Not running and not exhausted → either not started yet or the window has passed.
    const startsInFuture = new Date(coupon.startDate).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0);
    return startsInFuture ? { label: 'Scheduled', tone: 'scheduled' } : { label: 'Ended', tone: 'ended' };
  }

  loadCoupons() {
    this.isLoading.set(true);
    this.couponService.getAll().subscribe({
      next: (data) => { this.coupons.set(data); this.isLoading.set(false); },
      error: () => this.isLoading.set(false),
    });
  }

  loadCouponCourses() {
    this.couponService.getSelectableCourses().subscribe({
      next: (data) => this.couponCourses.set(data),
      error: () => this.couponCourses.set([]),
    });
  }

  resetCouponForm() {
    this.cpEditingId.set(null);
    this.cpCode.set('');
    this.cpType.set(CouponDiscountType.Percent);
    this.cpValue.set(null);
    this.cpStart.set(AdminDashboard.todayStr());
    this.cpEnd.set('');
    this.cpMaxUses.set(null);
    this.cpSelectedCourseIds.set([]);
    this.cpError.set('');
  }

  editCoupon(coupon: Coupon) {
    this.cpEditingId.set(coupon.id);
    this.cpCode.set(coupon.code);
    this.cpType.set(coupon.discountType);
    this.cpValue.set(coupon.discountValue);
    this.cpStart.set(coupon.startDate.slice(0, 10));
    this.cpEnd.set(coupon.endDate.slice(0, 10));
    this.cpMaxUses.set(coupon.maxUses);
    this.cpSelectedCourseIds.set(coupon.courses.map(c => c.id));
    this.cpError.set('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  submitCoupon() {
    const code = this.cpCode().trim().toUpperCase();
    const value = this.cpValue() ?? 0;

    // Mirror the backend rules so the admin gets instant feedback; the API re-checks anyway.
    if (!code) { this.cpError.set('Coupon code is required.'); return; }
    if (value <= 0) { this.cpError.set('Discount value must be greater than 0.'); return; }
    if (this.cpType() === CouponDiscountType.Percent && value > 100) {
      this.cpError.set('A percentage discount cannot be more than 100%.'); return;
    }
    if (!this.cpStart() || !this.cpEnd()) { this.cpError.set('Start and end dates are required.'); return; }
    if (this.cpEnd() < this.cpStart()) { this.cpError.set('End date cannot be before the start date.'); return; }
    if (this.cpSelectedCourseIds().length === 0) { this.cpError.set('Select at least one course.'); return; }

    const payload = {
      code,
      discountType: this.cpType(),
      discountValue: value,
      startDate: this.cpStart(),
      endDate: this.cpEnd(),
      maxUses: this.cpMaxUses() && this.cpMaxUses()! > 0 ? this.cpMaxUses() : null,
      courseIds: this.cpSelectedCourseIds(),
    };

    this.cpSaving.set(true);
    this.cpError.set('');

    const editingId = this.cpEditingId();
    const request$ = editingId
      ? this.couponService.update(editingId, payload)
      : this.couponService.create(payload);

    request$.subscribe({
      next: () => {
        this.cpSaving.set(false);
        this.showMessage(editingId ? 'Coupon updated.' : 'Coupon created.', 'success');
        this.resetCouponForm();
        this.loadCoupons();
      },
      error: (e) => {
        this.cpSaving.set(false);
        this.cpError.set(e?.error?.message ?? e?.error?.Message ?? 'Could not save the coupon.');
      },
    });
  }

  async deleteCoupon(coupon: Coupon) {
    if (!(await this.confirmDialog.confirm({
      title: 'Delete coupon?',
      message: `"${coupon.code}" will stop working immediately. Students who already used it keep their enrollment.`,
      tone: 'danger',
      icon: '🎟️',
      confirmText: 'Delete',
    }))) return;

    this.couponService.delete(coupon.id).subscribe({
      next: () => {
        this.showMessage('Coupon deleted.', 'success');
        if (this.cpEditingId() === coupon.id) this.resetCouponForm();
        this.loadCoupons();
      },
      error: (e) => this.showMessage(this.apiErr(e, 'Could not delete the coupon. Please try again.'), 'error'),
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  private showMessage(msg: string, type: 'success' | 'error') {
    // Unified with the rest of the app: transient feedback goes through toastr (the live-exam
    // pattern) instead of the old inline banner.
    if (type === 'error') this.toastr.error(msg);
    else this.toastr.success(msg);
  }

  /** Backend message with a friendly fallback — shared app-wide extractor. */
  private apiErr(e: unknown, fallback: string): string {
    return apiError(e, fallback);
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
    error: (e) => { this.showMessage(this.apiErr(e, 'Could not create the announcement. Please try again.'), 'error'); this.annSubmitting.set(false); }
  });
}

deactivateAnn(id: string) {
  this.annSvc.deactivate(id).subscribe({
    next: () => { this.showMessage('Deactivated.', 'success'); this.loadAnnouncements(); },
    error: (e) => this.showMessage(this.apiErr(e, 'Could not deactivate the announcement. Please try again.'), 'error')
  });
}

async deleteAnn(id: string) {
  if (!(await this.confirmDialog.confirm({
    title: 'Delete announcement?',
    message: 'This announcement will be removed permanently.',
    tone: 'danger',
    confirmText: 'Delete',
  }))) return;
  this.annSvc.delete(id).subscribe({
    next: () => { this.showMessage('Deleted.', 'success'); this.loadAnnouncements(); },
    error: (e) => this.showMessage(this.apiErr(e, 'Could not delete the announcement. Please try again.'), 'error')
  });
}
 
getAnnTypeLabel(type: string): string {
  const m: Record<string, string> = { info: '📢 Info', warning: '⚠️ Warning', success: '✅ Success', urgent: '🚨 Urgent' };
  return m[type] ?? type;
}
}