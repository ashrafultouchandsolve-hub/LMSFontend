import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';

type CourseDetailsView = {
  id: string;
  title: string;
  description: string;
  category: string;
  instructorName: string;
  level: string;
  price: number;
  durationMinutes: number;
  thumbnailUrl: string;
  isPublished: boolean;
  lessonCount: number;
  createdAt: string | null;
};

@Component({
  selector: 'app-course-details',
  imports: [RouterLink],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetails {
  private readonly route = inject(ActivatedRoute, { optional: true });
  private readonly learningApi = inject(LearningApiService);
  private readonly authService = inject(AuthService);

  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly course = signal<CourseDetailsView | null>(null);
  protected readonly isDescriptionExpanded = signal(false);
  protected readonly isImageBroken = signal(false);
  protected readonly isLoggedIn = signal(false);
  protected readonly isEnrolled = signal(false);
  protected readonly isCheckingEnrollment = signal(false);
readonly lang = inject(LanguageService);
  protected readonly shortDescriptionLimit = 280;

  protected readonly imageAvailable = computed(() => {
    const currentCourse = this.course();
    return Boolean(currentCourse?.thumbnailUrl) && !this.isImageBroken();
  });

  protected readonly displayDescription = computed(() => {
    const currentCourse = this.course();
    if (!currentCourse) {
      return '';
    }

    if (this.isDescriptionExpanded()) {
      return currentCourse.description;
    }

    return currentCourse.description.slice(0, this.shortDescriptionLimit);
  });

  protected readonly canToggleDescription = computed(() => {
    const currentCourse = this.course();
    if (!currentCourse) {
      return false;
    }

    return currentCourse.description.length > this.shortDescriptionLimit;
  });

  constructor() {
    void this.loadCourseDetails();
  }

  protected toggleDescription(): void {
    this.isDescriptionExpanded.update((expanded) => !expanded);
  }

  protected onImageError(): void {
    this.isImageBroken.set(true);
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

  protected getInstructorInitial(name: string): string {
    return name.trim().charAt(0).toUpperCase() || 'I';
  }

  private async loadCourseDetails(): Promise<void> {
    this.isLoggedIn.set(this.authService.isLoggedIn());

    const courseId = this.route?.snapshot.paramMap.get('id') ?? this.route?.snapshot.queryParamMap.get('id');

    if (!courseId) {
      this.errorMessage.set('Course ID পাওয়া যায়নি। Home page থেকে আবার চেষ্টা করুন।');
      this.isLoading.set(false);
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const responseWithAlternativeShape = response as { Data?: CourseDto[] };
      const rawCourses = Array.isArray(response.data)
        ? response.data
        : (Array.isArray(responseWithAlternativeShape.Data) ? responseWithAlternativeShape.Data : []);

      const matchedCourse = rawCourses.find((course) => course.id === courseId);

      if (!matchedCourse) {
        this.errorMessage.set('এই course টি পাওয়া যায়নি বা এখন available না।');
        this.course.set(null);
        return;
      }

      this.course.set(this.mapCourseForView(matchedCourse));
      this.isImageBroken.set(false);

      if (this.isLoggedIn()) {
        await this.checkEnrollment(courseId);
      }
    } catch {
      this.errorMessage.set('Course details লোড করা যায়নি। একটু পরে আবার চেষ্টা করুন।');
      this.course.set(null);
    } finally {
      this.isLoading.set(false);
    }
  }

  private mapCourseForView(course: CourseDto): CourseDetailsView {
    return {
      id: course.id,
      title: course.title,
      description: course.description,
      category: course.category,
      instructorName: course.instructorName,
      level: course.level,
      price: course.price,
      durationMinutes: course.durationMinutes,
      thumbnailUrl: this.learningApi.buildDownloadUrl(course.thumbnailPath),
      isPublished: course.isPublished,
      lessonCount: course.lessonCount ?? 0,
      createdAt: course.createdAt ?? null,
    };
  }

  private async checkEnrollment(courseId: string): Promise<void> {
    this.isCheckingEnrollment.set(true);

    try {
      const isEnrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(courseId));
      this.isEnrolled.set(isEnrolled);
    } catch {
      this.isEnrolled.set(false);
    } finally {
      this.isCheckingEnrollment.set(false);
    }
  }
}
