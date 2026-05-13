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
  OnDestroy,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';

type LearningHighlight = { title: string; description: string; };

type HomeCourse = {
  id: string; title: string; description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string; instructorName: string;
  lessonCount: number; durationMinutes: number;
  price: number; thumbnailUrl: string; isEnrolled: boolean;
  averageRating?: number; totalRatings?: number;
};

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit, AfterViewInit, OnDestroy {
  private readonly authService  = inject(AuthService);
  private readonly router       = inject(Router);
  private readonly learningApi  = inject(LearningApiService);
  readonly lang                 = inject(LanguageService);

  @ViewChild('courseTrackViewport')
  private courseTrackViewport?: ElementRef<HTMLDivElement>;

  protected readonly isLoggedIn       = signal(false);
  protected readonly userName         = signal('');
  protected readonly userRole         = signal<number | null>(null);
  protected readonly isLoadingCourses = signal(false);
  protected readonly courses          = signal<HomeCourse[]>([]);
  protected readonly isTeacher        = computed(() => this.userRole() === 1);
  protected readonly userInitial      = computed(() => this.userName().charAt(0).toUpperCase());
  protected readonly activeReview = signal(0);
private reviewInterval: any;

  // ✅ Hero Slider state
  protected readonly activeSlide = signal(0);
  private sliderInterval: any;
  private readonly TOTAL_SLIDES = 3;

  ngOnInit(): void {
    this.startReviewTimer();
    this.authService.isLoggedIn$.subscribe((v) => this.isLoggedIn.set(v));
    this.authService.currentUser$.subscribe((user) => {
      if (user?.fullName) this.userName.set(user.fullName);
      this.userRole.set(typeof user?.role === 'number' ? user.role : null);
    });

    const user = this.authService.getCurrentUser();
    if (user) {
      this.userName.set(user.fullName || user.email);
      this.userRole.set(typeof user.role === 'number' ? user.role : null);
    }

    void this.loadAllCourses();

    // ✅ Auto-slide every 5 seconds
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  ngAfterViewInit(): void {
    queueMicrotask(() => this.syncCourseCarouselState());
  }

  ngOnDestroy(): void {
    clearInterval(this.sliderInterval);
    clearInterval(this.reviewInterval);
  }

  // ── Slider methods ──────────────────────────────

  protected nextSlide(): void {
    this.activeSlide.update(s => (s + 1) % this.TOTAL_SLIDES);
  }

  protected prevSlide(): void {
    this.activeSlide.update(s => (s - 1 + this.TOTAL_SLIDES) % this.TOTAL_SLIDES);
  }

  protected goToSlide(index: number): void {
    this.activeSlide.set(index);
    // reset timer on manual nav
    clearInterval(this.sliderInterval);
    this.sliderInterval = setInterval(() => this.nextSlide(), 5000);
  }

  // ── Existing methods ─────────────────────────────

  protected logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  protected getCardColor(index: number): string {
    const colors = ['#ec4899','#7c3aed','#06b6d4','#f97316','#10b981','#3b82f6','#f59e0b','#8b5cf6'];
    return colors[index % colors.length];
  }

  protected buildPaymentQueryParams(course: HomeCourse): Record<string, string | number> {
    return { courseId: course.id, courseTitle: course.title, amount: course.price };
  }

  protected formatPrice(price: number): string {
    return price <= 0 ? 'Free' : `৳${price}`;
  }

  protected getImageUrl(thumbnailPath: string | null): string {
    if (!thumbnailPath) return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
    return this.learningApi.buildDownloadUrl(thumbnailPath);
  }

  protected onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = this.getImageUrl(null);
  }

  protected scrollCourses(direction: 'previous' | 'next'): void {
    const viewport = this.courseTrackViewport?.nativeElement;
    if (!viewport) return;
    const cardWidth = viewport.querySelector<HTMLElement>('.track-card')?.getBoundingClientRect().width ?? 320;
    viewport.scrollBy({ left: direction === 'next' ? (cardWidth + 18) * 1.05 : -(cardWidth + 18) * 1.05, behavior: 'smooth' });
  }

  private async loadAllCourses(): Promise<void> {
    this.isLoadingCourses.set(true);
    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const raw = Array.isArray(response.data) ? response.data : ((response as any).Data ?? []);
      let mapped = raw.map((c: CourseDto) => this.mapCourseForHome(c));
      mapped = await this.attachEnrollmentState(mapped);
      mapped = await this.attachRatings(mapped);
      this.courses.set(mapped);
    } catch { this.courses.set([]); }
    finally {
      this.isLoadingCourses.set(false);
      queueMicrotask(() => this.syncCourseCarouselState());
    }
  }

  private syncCourseCarouselState(): void { void this.courseTrackViewport?.nativeElement?.scrollLeft; }

  private mapCourseForHome(dto: CourseDto): HomeCourse {
    return {
      id: dto.id, title: dto.title, description: dto.description,
      level: this.normalizeLevel(dto.level), category: dto.category,
      instructorName: dto.instructorName, lessonCount: dto.lessonCount ?? 0,
      durationMinutes: dto.durationMinutes, price: dto.price,
      thumbnailUrl: this.learningApi.buildDownloadUrl(dto.thumbnailPath),
      isEnrolled: false,
    };
  }

  private async attachEnrollmentState(courses: HomeCourse[]): Promise<HomeCourse[]> {
    if (!this.authService.isLoggedIn()) return courses;
    return Promise.all(courses.map(async (c) => {
      try { return { ...c, isEnrolled: await firstValueFrom(this.learningApi.checkMyEnrollment(c.id)) }; }
      catch { return { ...c, isEnrolled: false }; }
    }));
  }

  private async attachRatings(courses: HomeCourse[]): Promise<HomeCourse[]> {
    return Promise.all(courses.map(async (c) => {
      try {
        const res = await firstValueFrom(this.learningApi.getRatingSummary(c.id));
        const d = (res as any)?.data ?? (res as any)?.Data;
        if (d) return { ...c, averageRating: parseFloat(d.averageRating) || 0, totalRatings: d.totalRatings || 0 };
      } catch {}
      return c;
    }));
  }

  private normalizeLevel(level: string): HomeCourse['level'] {
    if (level === 'Intermediate' || level === 'Advanced') return level;
    return 'Beginner';
  }

  protected readonly reviews = [
  {
    name: 'রাহেলা আক্তার',
    role: 'SSC 2025 — GPA 5.00',
    quote: 'অল্প খরচে এত ভালো Teacher, আমাদের স্বপ্নের চেয়ে বেশি, আশার চেয়ে বড়।',
    rating: 5,
    image: '',           // ← image URL দাও অথবা খালি রাখো
    videoUrl: '',        // ← YouTube link দাও অথবা খালি রাখো
    videoCaption: 'SSC 2025 তে GPA-5 অর্জনের গল্প',
  },
  {
    name: 'তানভীর হোসেন',
    role: 'HSC 2024 — Golden A+',
    quote: 'Nirvor Nije Sikhi আমার জীবন পরিবর্তন করে দিয়েছে। শিক্ষকরা অনেক আন্তরিক এবং সবসময় সাহায্য করেন।',
    rating: 5,
    image: '',
    videoUrl: '',
    videoCaption: 'HSC তে Golden A+ পাওয়ার অভিজ্ঞতা',
  },
  {
    name: 'সুমাইয়া ইসলাম',
    role: 'Admission — ঢাকা বিশ্ববিদ্যালয়',
    quote: 'Admission English কোর্সটা না করলে ঢাকা বিশ্ববিদ্যালয়ে চান্স পেতাম না। অসাধারণ পড়ানোর ধরন।',
    rating: 5,
    image: '',
    videoUrl: '',
    videoCaption: 'ঢাকা বিশ্ববিদ্যালয়ে ভর্তির সাফল্য',
  },
  {
    name: 'মুশফিকের মা',
    role: 'সুন্দরবনের বেদকামী — SSC ২৫ GPA-5',
    quote: 'অল্প খরচে এত ভালো টিচার, আমাদের স্বপ্নের চেয়ে বেশি, আশার চেয়ে বড়।',
    rating: 5,
    image: '',
    videoUrl: '',
    videoCaption: 'সুন্দরবন থেকে নটর ডেম — মুশফিকের স্বপ্ন পূরণের গল্প!',
  },
];
 
protected nextReview(): void {
  this.activeReview.update(s => (s + 1) % this.reviews.length);
  this.resetReviewTimer();
}
 
protected prevReview(): void {
  this.activeReview.update(s => (s - 1 + this.reviews.length) % this.reviews.length);
  this.resetReviewTimer();
}
 
protected goToReview(index: number): void {
  this.activeReview.set(index);
  this.resetReviewTimer();
}
 
private startReviewTimer(): void {
  this.reviewInterval = setInterval(() => {
    this.activeReview.update(s => (s + 1) % this.reviews.length);
  }, 6000);
}
 
private resetReviewTimer(): void {
  clearInterval(this.reviewInterval);
  this.startReviewTimer();
}
}



