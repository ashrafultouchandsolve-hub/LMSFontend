import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';

type EnrolledCourseView = {
  id: string;
  title: string;
  description: string;
  instructorName: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessonCount: number;
  durationMinutes: number;
  price: number;
  thumbnailUrl: string;
  averageRating?: number;
  totalRatings?: number;
};

@Component({
  selector: 'app-my-courses',
  imports: [RouterLink],
  templateUrl: './my-courses.html',
  styleUrl: './my-courses.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCourses {
  private readonly learningApi = inject(LearningApiService);
  private readonly authService = inject(AuthService);
  protected readonly lang = inject(LanguageService);

  protected readonly isLoading = signal(false);
  protected readonly errorMessage = signal('');
  protected readonly searchTerm = signal('');
  protected readonly myCourses = signal<EnrolledCourseView[]>([]);

  protected readonly filteredCourses = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) {
      return this.myCourses();
    }

    return this.myCourses().filter((course) => {
      const searchable = [
        course.title,
        course.description,
        course.category,
        course.instructorName,
        course.level,
      ]
        .join(' ')
        .toLowerCase();

      return searchable.includes(term);
    });
  });

  protected readonly hasCourses = computed(() => this.myCourses().length > 0);
  protected readonly hasFilteredCourses = computed(() => this.filteredCourses().length > 0);
  protected readonly totalLessons = computed(() =>
    this.myCourses().reduce((sum, course) => sum + course.lessonCount, 0),
  );
  protected readonly totalMinutes = computed(() =>
    this.myCourses().reduce((sum, course) => sum + course.durationMinutes, 0),
  );

  constructor() {
    void this.loadMyCourses();
  }

  protected updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }

  protected formatPrice(price: number): string {
    if (price <= 0) {
      return 'Free';
    }

    return `৳${price}`;
  }

  protected formatDuration(totalMinutes: number): string {
    if (totalMinutes <= 0) {
      return 'N/A';
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours === 0) {
      return `${minutes} min`;
    }

    if (minutes === 0) {
      return `${hours} hr`;
    }

    return `${hours} hr ${minutes} min`;
  }

  private async loadMyCourses(): Promise<void> {
    this.isLoading.set(true);
    this.errorMessage.set('');

    if (!this.authService.isLoggedIn()) {
      this.errorMessage.set('My Courses দেখতে হলে আগে login করতে হবে।');
      this.isLoading.set(false);
      return;
    }

    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const alternative = response as { Data?: CourseDto[] };
      const rawCourses = Array.isArray(response.data)
        ? response.data
        : (Array.isArray(alternative.Data) ? alternative.Data : []);

      const enrollmentChecks = await Promise.all(
        rawCourses.map(async (course) => {
          try {
            const isEnrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(course.id));
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

      const enrolledOnly = enrollmentChecks
        .filter((item) => item.isEnrolled)
        .map((item) => this.mapToView(item.course));

      let enriched = await this.attachRatings(enrolledOnly);
      this.myCourses.set(enriched);
    } catch {
      this.errorMessage.set('Enrolled courses লোড করা যায়নি। একটু পরে আবার চেষ্টা করুন।');
      this.myCourses.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  private mapToView(dto: CourseDto): EnrolledCourseView {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      instructorName: dto.instructorName,
      category: dto.category,
      level: this.normalizeLevel(dto.level),
      lessonCount: dto.lessonCount ?? 0,
      durationMinutes: dto.durationMinutes,
      price: dto.price,
      thumbnailUrl: this.getImageUrl(dto.thumbnailPath),
    };
  }

  private normalizeLevel(level: string): EnrolledCourseView['level'] {
    if (level === 'Intermediate' || level === 'Advanced') {
      return level;
    }

    return 'Beginner';
  }

  protected getImageUrl(thumbnailPath: string | null): string {
    if (!thumbnailPath) return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
    return this.learningApi.buildDownloadUrl(thumbnailPath);
  }

  protected onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = this.getImageUrl(null);
  }

  protected getLevelClass(level: EnrolledCourseView['level']): string {
    if (level === 'Advanced')    return 'course-badge-adv';
    if (level === 'Intermediate') return 'course-badge-int';
    return 'course-badge-beg';
  }

  protected getCardColor(index: number): string {
    const colors = ['#ec4899','#7c3aed','#06b6d4','#f97316','#10b981','#3b82f6','#f59e0b','#8b5cf6'];
    return colors[index % colors.length];
  }

  protected getImageClass(level: EnrolledCourseView['level']): string {
    if (level === 'Advanced')    return 'track-img-adv';
    if (level === 'Intermediate') return 'track-img-int';
    return 'track-img-beg';
  }

  private async attachRatings(courses: EnrolledCourseView[]): Promise<EnrolledCourseView[]> {
    return Promise.all(courses.map(async (c) => {
      try {
        const res = await firstValueFrom(this.learningApi.getRatingSummary(c.id));
        const d = (res as any)?.data ?? (res as any)?.Data;
        if (d) return { ...c, averageRating: parseFloat(d.averageRating) || 0, totalRatings: d.totalRatings || 0 };
      } catch {}
      return c;
    }));
  }
}
