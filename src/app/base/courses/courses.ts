import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';

type CoursesViewItem = {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  instructorName: string;
  lessonCount: number;
  durationMinutes: number;
  price: number;
  isEnrolled: boolean;
  thumbnailUrl: string;
};

@Component({
  selector: 'app-courses',
  imports: [RouterLink],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Courses {
  private readonly authService = inject(AuthService);
  private readonly learningApi = inject(LearningApiService);
readonly lang = inject(LanguageService);
  protected readonly isLoadingCourses = signal(false);
  protected readonly searchTerm = signal('');
  protected readonly courses = signal<CoursesViewItem[]>([]);
  protected readonly hasCourses = computed(() => this.courses().length > 0);
  protected readonly filteredCourses = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();

    if (!term) {
      return this.courses();
    }

    return this.courses().filter((course) => {
      const searchableText = [
        course.title,
        course.description,
        course.category,
        course.instructorName,
        course.level,
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(term);
    });
  });

  protected getCardColor(index: number): string {
  const colors = ['#ec4899','#7c3aed','#06b6d4','#f97316','#10b981','#3b82f6','#f59e0b','#8b5cf6'];
  return colors[index % colors.length];
}
  protected readonly hasFilteredCourses = computed(() => this.filteredCourses().length > 0);

  constructor() {
    void this.loadAllCourses();
  }

  protected formatPrice(price: number): string {
    if (price <= 0) {
      return 'Free';
    }

    return `৳${price}`;
  }

  protected buildPaymentQueryParams(course: CoursesViewItem): Record<string, string | number> {
    return {
      courseId: course.id,
      courseTitle: course.title,
      amount: course.price,
    };
  }

  protected updateSearchTerm(term: string): void {
    this.searchTerm.set(term);
  }

  protected getLevelClass(level: CoursesViewItem['level']): string {
    if (level === 'Advanced') {
      return 'course-badge-adv';
    }

    if (level === 'Intermediate') {
      return 'course-badge-int';
    }

    return 'course-badge-beg';
  }

  protected getCardToneClass(index: number): string {
    const tones = ['course-card-tone-1', 'course-card-tone-2', 'course-card-tone-3', 'course-card-tone-4'];
    return tones[index % tones.length];
  }

  protected getImageClass(level: CoursesViewItem['level']): string {
    if (level === 'Advanced') {
      return 'track-img-adv';
    }

    if (level === 'Intermediate') {
      return 'track-img-int';
    }

    return 'track-img-beg';
  }

  protected getImageUrl(thumbnailPath: string | null): string {
    if (!thumbnailPath) {
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
    }

    return this.learningApi.buildDownloadUrl(thumbnailPath);
  }

  protected onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = this.getImageUrl(null);
  }

  private async loadAllCourses(): Promise<void> {
    this.isLoadingCourses.set(true);

    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const responseWithAlternativeShape = response as { Data?: CourseDto[] };
      const rawCourses = Array.isArray(response.data)
        ? response.data
        : (Array.isArray(responseWithAlternativeShape.Data) ? responseWithAlternativeShape.Data : []);

      const mappedCourses = rawCourses.map((course) => this.mapCourseForView(course));
      this.courses.set(await this.attachEnrollmentState(mappedCourses));
    } catch {
      this.courses.set([]);
    } finally {
      this.isLoadingCourses.set(false);
    }
  }

  private mapCourseForView(dto: CourseDto): CoursesViewItem {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      level: this.normalizeLevel(dto.level),
      category: dto.category,
      instructorName: dto.instructorName,
      lessonCount: dto.lessonCount ?? 0,
      durationMinutes: dto.durationMinutes,
      price: dto.price,
      isEnrolled: false,
      thumbnailUrl: this.getImageUrl(dto.thumbnailPath),
    };
  }

  private async attachEnrollmentState(courses: CoursesViewItem[]): Promise<CoursesViewItem[]> {
    if (!this.authService.isLoggedIn()) {
      return courses;
    }

    return Promise.all(
      courses.map(async (course) => {
        try {
          const isEnrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(course.id));
          return {
            ...course,
            isEnrolled,
          };
        } catch {
          return {
            ...course,
            isEnrolled: false,
          };
        }
      }),
    );
  }

  private normalizeLevel(level: string): CoursesViewItem['level'] {
    if (level === 'Intermediate' || level === 'Advanced') {
      return level;
    }

    return 'Beginner';
  }
}
