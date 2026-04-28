import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  computed,
  inject,
  signal,
  OnInit,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';


type LearningHighlight = {
  title: string;
  description: string;
};

type HomeCourse = {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  instructorName: string;
  lessonCount: number;
  durationMinutes: number;
  price: number;
  thumbnailUrl: string;
  isEnrolled: boolean;
};

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit, AfterViewInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly learningApi = inject(LearningApiService);
   readonly lang = inject(LanguageService);

  @ViewChild('courseTrackViewport')
  private courseTrackViewport?: ElementRef<HTMLDivElement>;

  protected readonly isLoggedIn = signal(false);
  protected readonly userName = signal('');
  protected readonly userRole = signal<number | null>(null);
  protected readonly isLoadingCourses = signal(false);
  protected readonly courses = signal<HomeCourse[]>([]);
  protected readonly isTeacher = computed(() => this.userRole() === 1);
  protected readonly userInitial = computed(() => this.userName().charAt(0).toUpperCase());

  protected readonly stats = [
    { value: '350+', label: 'Structured lessons' },
    { value: '42k+', label: 'Active learners' },
    { value: '1.2M+', label: 'Practice submissions' },
  ] as const;

  protected readonly highlights: LearningHighlight[] = [
    {
      title: 'Outcome-based curriculum',
      description: 'Follow role-focused modules designed around practical, job-ready outcomes.',
    },
    {
      title: 'Progress and performance analytics',
      description: 'Track completion, assessment scores, and learning consistency in one dashboard.',
    },
    {
      title: 'Mentor-guided growth',
      description: 'Get structured feedback and guidance to accelerate your learning path.',
    },
  ];

  ngOnInit(): void {
    // Subscribe to auth state changes
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn.set(isLoggedIn);
    });

    this.authService.currentUser$.subscribe((user) => {
      if (user && user.fullName) {
        this.userName.set(user.fullName);
      }

      this.userRole.set(typeof user?.role === 'number' ? user.role : null);
    });

    // Check current state
    const user = this.authService.getCurrentUser();
    if (user) {
      this.userName.set(user.fullName || user.email);
      this.userRole.set(typeof user.role === 'number' ? user.role : null);
    }

    void this.loadAllCourses();
  }

  ngAfterViewInit(): void {
    queueMicrotask(() => this.syncCourseCarouselState());
  }

  protected logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  protected getLevelClass(level: HomeCourse['level']): string {
    if (level === 'Advanced') {
      return 'track-badge-adv';
    }

    if (level === 'Intermediate') {
      return 'track-badge-int';
    }

    return 'track-badge-beg';
  }

  protected getImageClass(level: HomeCourse['level']): string {
    if (level === 'Advanced') {
      return 'track-img-adv';
    }

    if (level === 'Intermediate') {
      return 'track-img-int';
    }

    return 'track-img-beg';
  }

  protected getCardToneClass(index: number): string {
    const tones = ['track-card-tone-1', 'track-card-tone-2', 'track-card-tone-3', 'track-card-tone-4'];
    return tones[index % tones.length];
  }

  protected buildPaymentQueryParams(course: HomeCourse): Record<string, string | number> {
    return {
      courseId: course.id,
      courseTitle: course.title,
      amount: course.price,
    };
  }

  protected formatPrice(price: number): string {
    if (price <= 0) {
      return 'Free';
    }

    return `৳${price}`;
  }

  protected getImageUrl(thumbnailPath: string | null): string {
    if (!thumbnailPath) {
      // Return a data URL for a simple placeholder or use assets fallback
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
    }

   return this.learningApi.buildDownloadUrl(thumbnailPath);
  }

  protected onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = this.getImageUrl(null);
  }

  protected scrollCourses(direction: 'previous' | 'next'): void {
    const viewport = this.courseTrackViewport?.nativeElement;
    if (!viewport) {
      return;
    }

    const cardWidth = viewport.querySelector<HTMLElement>('.track-card')?.getBoundingClientRect().width ?? 320;
    const gap = 18;
    const scrollAmount = (cardWidth + gap) * 1.05;
    const offset = direction === 'next' ? scrollAmount : -scrollAmount;

    viewport.scrollBy({ left: offset, behavior: 'smooth' });
  }

  private async loadAllCourses(): Promise<void> {
    this.isLoadingCourses.set(true);

    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const responseWithAlternativeShape = response as { Data?: CourseDto[] };
      const rawCourses = Array.isArray(response.data)
        ? response.data
        : (Array.isArray(responseWithAlternativeShape.Data) ? responseWithAlternativeShape.Data : []);

      const mappedCourses = rawCourses.map((course) => this.mapCourseForHome(course));
      this.courses.set(await this.attachEnrollmentState(mappedCourses));
    } catch {
      this.courses.set([]);
    } finally {
      this.isLoadingCourses.set(false);
      queueMicrotask(() => this.syncCourseCarouselState());
    }
  }

  private syncCourseCarouselState(): void {
    const viewport = this.courseTrackViewport?.nativeElement;
    if (!viewport) {
      return;
    }

    // Keep the browser from jumping when cards re-render; current UI only needs scroll position preserved.
    void viewport.scrollLeft;
  }

  private mapCourseForHome(dto: CourseDto): HomeCourse {
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
      thumbnailUrl: this.learningApi.buildDownloadUrl(dto.thumbnailPath),
      isEnrolled: false,
    };
  }

  private async attachEnrollmentState(courses: HomeCourse[]): Promise<HomeCourse[]> {
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

  private normalizeLevel(level: string): HomeCourse['level'] {
    if (level === 'Intermediate' || level === 'Advanced') {
      return level;
    }

    return 'Beginner';
  }
}

