import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, LearningApiService } from '../../Service/learning-api.service';

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

      this.myCourses.set(enrolledOnly);
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
    };
  }

  private normalizeLevel(level: string): EnrolledCourseView['level'] {
    if (level === 'Intermediate' || level === 'Advanced') {
      return level;
    }

    return 'Beginner';
  }
}
