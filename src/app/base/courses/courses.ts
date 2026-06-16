import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';
import { Navbar } from '../../shared/navbar/navbar';

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
  isWishlisted: boolean;
  thumbnailUrl: string;
  averageRating?: number;
  totalRatings?: number;
};

// ✅ সব category গুলো এখানে define করা আছে
const CATEGORIES = [
  { label: 'All',                value: 'All',                icon: '🗂' },
  { label: 'SSC 2027',           value: 'SSC 2027',           icon: '📘' },
  { label: 'SSC 2026',           value: 'SSC 2026',           icon: '📘' },
  { label: 'HSC 2027',           value: 'HSC 2027',           icon: '📗' },
  { label: 'HSC 2026',           value: 'HSC 2026',           icon: '📗' },
  { label: 'Admission English',  value: 'Admission English',  icon: '🎯' },
  { label: 'Admission Science',  value: 'Admission Science',  icon: '🎯' },
  { label: 'Skills Development', value: 'Skills Development', icon: '⚡' },
  { label: 'Communication',      value: 'Communication',      icon: '💬' },
  { label: 'General',            value: 'General',            icon: '📚' },
];

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
  private readonly route        = inject(ActivatedRoute);
  readonly lang                 = inject(LanguageService);

  protected readonly isLoadingCourses  = signal(false);
  protected readonly searchTerm        = signal('');
  protected readonly courses           = signal<CoursesViewItem[]>([]);
  protected readonly wishlistToggleId  = signal<string | null>(null);

  // ✅ Active category — homepage থেকে queryParam আসলে সেটা set হবে
  protected readonly activeCategory = signal('All');
  protected readonly categories = CATEGORIES;

  protected readonly hasCourses = computed(() => this.courses().length > 0);

  // ✅ category + search দুটো মিলিয়ে filter
  protected readonly filteredCourses = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const cat  = this.activeCategory();

    return this.courses().filter((course) => {
      const matchesCat  = cat === 'All' || course.category === cat;
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

  // ✅ Sidebar এ শুধু course আছে এমন category দেখাবে
  protected readonly availableCategories = computed(() => {
    const existing = new Set(this.courses().map(c => c.category));
    return CATEGORIES.filter(c => c.value === 'All' || existing.has(c.value));
  });

  constructor() {
    void this.loadAllCourses();
  }

  // ✅ Category select করো
  protected setCategory(value: string): void {
    this.activeCategory.set(value);
  }

  protected updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }

  protected formatPrice(price: number): string {
    return price <= 0 ? 'Free' : `৳${price}`;
  }

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
      thumbnailUrl: this.getImageUrl(dto.thumbnailPath),
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