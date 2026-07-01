import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';
import { Category, CategoryService, categoryIcon } from '../../Service/category.service';
import { enrollmentWindow } from '../../Service/enrollment-window';
import { Navbar } from '../../shared/navbar/navbar';

/** A selectable option in the sidebar dropdown. */
type CategoryOption = { label: string; value: string; icon: string };

type CoursesViewItem = {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  instructorName: string;
  lessonCount: number;
  enrollmentCount: number;
  videoCount: number;
  practiceCount: number;
  durationMinutes: number;
  price: number;
  isEnrolled: boolean;
  isCompleted: boolean;
  isWishlisted: boolean;
  thumbnailUrl: string;
  averageRating?: number;
  totalRatings?: number;
  startDate?: string | null;
  endDate?: string | null;
};

@Component({
  selector: 'app-courses',
  imports: [RouterLink, Navbar],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Courses {
  private readonly authService  = inject(AuthService);
  private readonly learningApi  = inject(LearningApiService);
  private readonly categoryService = inject(CategoryService);
  private readonly route        = inject(ActivatedRoute);
  readonly lang                 = inject(LanguageService);

  protected readonly isLoadingCourses  = signal(false);
  protected readonly searchTerm        = signal('');
  protected readonly courses           = signal<CoursesViewItem[]>([]);
  protected readonly wishlistToggleId  = signal<string | null>(null);

  // ✅ Active category — homepage থেকে queryParam আসলে সেটা set হবে
  protected readonly activeCategory = signal('All');

  // ✅ Admin-managed categories (loaded from backend — shared with home page & admin)
  protected readonly dynamicCategories = signal<Category[]>([]);

  /** Category names that have a dedicated entry; anything else falls under "Other". */
  private readonly knownCategoryNames = computed(
    () => new Set(this.dynamicCategories().map(c => c.name)),
  );

  // ✅ Sidebar category dropdown open/close state
  protected readonly categoryDropdownOpen = signal(false);

  /** Active category-র icon/label (dropdown toggle-এ দেখানোর জন্য)। */
  protected readonly activeCategoryMeta = computed<CategoryOption>(() => {
    const val = this.activeCategory();
    return this.availableCategories().find(c => c.value === val)
        ?? { label: val, value: val, icon: categoryIcon(val) };
  });

  protected readonly hasCourses = computed(() => this.courses().length > 0);

  // ✅ category + search দুটো মিলিয়ে filter
  protected readonly filteredCourses = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const cat  = this.activeCategory();

    return this.courses().filter((course) => {
      const matchesCat  = cat === 'All'
        ? true
        : cat === 'Other'
          ? !this.knownCategoryNames().has(course.category)   // anything without a dedicated category
          : course.category === cat;
      const matchesTerm = !term || [
        course.title, course.description,
        course.category, course.instructorName, course.level,
      ].join(' ').toLowerCase().includes(term);

      return matchesCat && matchesTerm;
    });
  });

  protected readonly hasFilteredCourses = computed(() => this.filteredCourses().length > 0);

  // ✅ Check if current user is a teacher
  protected readonly isTeacher = computed(() => {
    const currentUser = this.authService.getCurrentUser();
    return currentUser?.role === 1;
  });

  // ✅ Staff = teacher (role 1) or admin (role 2). Staff manage courses — they
  //    don't enroll or wishlist, so those buttons are hidden for them.
  protected readonly isStaff = computed(() => {
    const role = this.authService.getCurrentUser()?.role;
    return role === 1 || role === 2;
  });

  // ✅ Sidebar dropdown: All + admin-managed categories that actually HAVE courses
  //    (empty categories are hidden from students), + Other only if some course
  //    has a category that's no longer in the managed list.
  protected readonly availableCategories = computed<CategoryOption[]>(() => {
    const courseCategoryNames = new Set(this.courses().map(c => c.category));
    const opts: CategoryOption[] = [{ label: 'All', value: 'All', icon: '🗂' }];
    for (const c of this.dynamicCategories()) {
      if (courseCategoryNames.has(c.name)) {
        opts.push({ label: c.name, value: c.name, icon: categoryIcon(c.name) });
      }
    }
    const hasOther = this.courses().some(c => !this.knownCategoryNames().has(c.category));
    if (hasOther) opts.push({ label: 'Other', value: 'Other', icon: '📦' });
    return opts;
  });

  /** Course count per category pill (handles All / Other / specific). */
  protected categoryCount(value: string): number {
    const list = this.courses();
    if (value === 'All') return list.length;
    if (value === 'Other') return list.filter(c => !this.knownCategoryNames().has(c.category)).length;
    return list.filter(c => c.category === value).length;
  }

  constructor() {
    void this.loadAllCourses();
    this.loadCategories();
  }

  private loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (res: any) => this.dynamicCategories.set(res?.data ?? res?.Data ?? []),
      error: () => this.dynamicCategories.set([]),
    });
  }

  // ✅ Category select করো (select করলে dropdown বন্ধ হয়ে যাবে)
  protected setCategory(value: string): void {
    this.activeCategory.set(value);
    this.categoryDropdownOpen.set(false);
  }

  // ✅ Category dropdown খোলা/বন্ধ
  protected toggleCategoryDropdown(): void {
    this.categoryDropdownOpen.update(open => !open);
  }

  protected closeCategoryDropdown(): void {
    this.categoryDropdownOpen.set(false);
  }

  protected updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }

  protected formatPrice(price: number): string {
    return price <= 0 ? 'Free' : `৳${price}`;
  }

  /** Enrollment window (countdown / closed) for a course's start date. Shared helper. */
  protected readonly enrollWindow = enrollmentWindow;

  protected buildPaymentQueryParams(course: CoursesViewItem): Record<string, string | number> {
    return { courseId: course.id, courseTitle: course.title, amount: course.price };
  }

  protected async toggleWishlist(course: CoursesViewItem): Promise<void> {
    const currentUser = this.authService.getCurrentUser();
    const userId = currentUser?.id != null ? String(currentUser.id) : '';
    if (!userId) return;

    this.wishlistToggleId.set(course.id);
    try {
      const response = await firstValueFrom(this.learningApi.toggleWishlist(course.id, userId));
      const nextState = (response as any)?.data ?? (response as any)?.Data;
      const updatedState = typeof nextState === 'boolean' ? nextState : !course.isWishlisted;
      this.courses.update(items => items.map(item =>
        item.id === course.id ? { ...item, isWishlisted: updatedState } : item
      ));
    } catch {}
    finally { this.wishlistToggleId.set(null); }
  }

  protected getLevelClass(level: CoursesViewItem['level']): string {
    if (level === 'Advanced')    return 'course-badge-adv';
    if (level === 'Intermediate') return 'course-badge-int';
    return 'course-badge-beg';
  }

  protected getCardColor(index: number): string {
    const colors = ['#ec4899','#7c3aed','#06b6d4','#f97316','#10b981','#3b82f6','#f59e0b','#8b5cf6'];
    return colors[index % colors.length];
  }

  protected getImageClass(level: CoursesViewItem['level']): string {
    if (level === 'Advanced')    return 'track-img-adv';
    if (level === 'Intermediate') return 'track-img-int';
    return 'track-img-beg';
  }

  protected getImageUrl(thumbnailPath: string | null): string {
    if (!thumbnailPath) return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
    return this.learningApi.buildDownloadUrl(thumbnailPath);
  }

  protected onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = this.getImageUrl(null);
  }

  private async loadAllCourses(): Promise<void> {
    this.isLoadingCourses.set(true);
    try {
      // ✅ Homepage থেকে category queryParam আসলে set করো
      const catParam = this.route.snapshot.queryParams['category'];
      if (catParam) this.activeCategory.set(catParam);

      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const raw = Array.isArray(response.data)
        ? response.data
        : ((response as any).Data ?? []);

      let mapped = raw.map((c: CourseDto) => this.mapCourseForView(c));
      mapped = await this.attachEnrollmentState(mapped);
      mapped = await this.attachWishlistState(mapped);
      mapped = await this.attachRatings(mapped);
      this.courses.set(mapped);
    } catch {
      this.courses.set([]);
    } finally {
      this.isLoadingCourses.set(false);
    }
  }

  private mapCourseForView(dto: CourseDto): CoursesViewItem {
    return {
      id: dto.id, title: dto.title, description: dto.description,
      level: this.normalizeLevel(dto.level), category: dto.category,
      instructorName: dto.instructorName, lessonCount: dto.lessonCount ?? 0,
      enrollmentCount: dto.enrollmentCount ?? 0,
      videoCount: dto.videoCount ?? 0,
      practiceCount: dto.practiceCount ?? 0,
      durationMinutes: dto.durationMinutes, price: dto.price,
      isEnrolled: false, isWishlisted: false,
      isCompleted: dto.isCompleted ?? false,
      thumbnailUrl: this.getImageUrl(dto.thumbnailPath),
      startDate: dto.startDate ?? null,
      endDate: dto.endDate ?? null,
    };
  }

  private async attachEnrollmentState(courses: CoursesViewItem[]): Promise<CoursesViewItem[]> {
    if (!this.authService.isLoggedIn()) return courses;
    return Promise.all(courses.map(async (c) => {
      try { return { ...c, isEnrolled: await firstValueFrom(this.learningApi.checkMyEnrollment(c.id)) }; }
      catch { return { ...c, isEnrolled: false }; }
    }));
  }

  private async attachWishlistState(courses: CoursesViewItem[]): Promise<CoursesViewItem[]> {
    if (!this.authService.isLoggedIn()) return courses;
    const userId = this.authService.getCurrentUser()?.id;
    if (!userId) return courses;
    try {
      const response = await firstValueFrom(this.learningApi.getWishlist(String(userId)));
      const items = (response as any)?.data ?? (response as any)?.Data ?? response ?? [];
      const ids = new Set<string>(
        Array.isArray(items) ? items.map((i: any) => String(i?.courseId ?? i?.id ?? '')).filter(Boolean) : []
      );
      return courses.map(c => ({ ...c, isWishlisted: ids.has(c.id) }));
    } catch { return courses; }
  }

  private async attachRatings(courses: CoursesViewItem[]): Promise<CoursesViewItem[]> {
    return Promise.all(courses.map(async (c) => {
      try {
        const res = await firstValueFrom(this.learningApi.getRatingSummary(c.id));
        const d = (res as any)?.data ?? (res as any)?.Data;
        if (d) return { ...c, averageRating: parseFloat(d.averageRating) || 0, totalRatings: d.totalRatings || 0 };
      } catch {}
      return c;
    }));
  }

  private normalizeLevel(level: string): CoursesViewItem['level'] {
    if (level === 'Intermediate' || level === 'Advanced') return level;
    return 'Beginner';
  }
}