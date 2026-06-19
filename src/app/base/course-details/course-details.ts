import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, CourseTeacher, LearningApiService } from '../../Service/learning-api.service';
import { LanguageService } from '../../Service/language.service';
import { Navbar } from '../../shared/navbar/navbar';
import { LiveClassService } from '../../Service/live-class-service';

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
  imports: [RouterLink, Navbar],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDetails {
  private readonly route = inject(ActivatedRoute, { optional: true });
  private readonly learningApi = inject(LearningApiService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly liveClass = inject(LiveClassService);

  // Free live class interest (follow)
  protected readonly isInterested = signal(false);
  protected readonly isTogglingInterest = signal(false);
  /** Free live-class section shows for everyone EXCEPT enrolled students / staff. */
  protected readonly showFreeSection = computed(() => !this.isEnrolled() && !this.isTeacher() && !this.isAdmin());

  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly course = signal<CourseDetailsView | null>(null);
  protected readonly isDescriptionExpanded = signal(false);
  protected readonly isImageBroken = signal(false);
  protected readonly isLoggedIn = signal(false);
  protected readonly userName = signal('');
  protected readonly userRole = signal<number | null>(null);
  protected readonly isTeacher = computed(() => this.userRole() === 1);
  protected readonly isAdmin = computed(() => this.userRole() === 2);
  protected readonly userInitial = computed(() => this.userName().charAt(0).toUpperCase());
  protected readonly isEnrolled = signal(false);
  protected readonly isCheckingEnrollment = signal(false);
  protected readonly teachers = signal<CourseTeacher[]>([]);
  
  // Rating signals
  protected readonly averageRating = signal(0);
  protected readonly totalRatings = signal(0);
  protected readonly userRating = signal(0);
  protected readonly userFeedback = signal('');
  protected readonly isSubmittingRating = signal(false);
  protected readonly showRatingForm = signal(false);
  protected readonly ratingMessage = signal('');
  protected readonly isWishlisted = signal(false);
protected readonly isTogglingWishlist = signal(false);

  // Course-details card stats
  protected readonly enrollmentCount = signal(0);
  protected readonly videoCount = signal(0);
  protected readonly practiceCount = signal(0);
  
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
    // Sync auth state for navbar helpers
    this.authService.isLoggedIn$.subscribe((v) => this.isLoggedIn.set(v));
    this.authService.currentUser$.subscribe((u) => {
      if (u && u.fullName) {
        this.userName.set(u.fullName);
      }
      this.userRole.set(typeof u?.role === 'number' ? u.role : null);
    });

    const user = this.authService.getCurrentUser();
    if (user) {
      this.userName.set(user.fullName || user.email);
      this.userRole.set(typeof user.role === 'number' ? user.role : null);
      this.isLoggedIn.set(this.authService.isLoggedIn());
    }

    void this.loadCourseDetails();
  }

  protected logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
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
    return (name ?? '').trim().charAt(0).toUpperCase() || 'I';
  }

  protected teacherImageUrl(path: string | null | undefined): string {
    return this.learningApi.buildDownloadUrl(path ?? '');
  }

  private async loadTeachers(courseId: string): Promise<void> {
    try {
      const res: any = await firstValueFrom(this.learningApi.getCourseTeachers(courseId));
      const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res?.Data) ? res.Data : [];
      this.teachers.set(arr.map((t: any) => ({
        id: t.id ?? t.Id,
        fullName: t.fullName ?? t.FullName ?? 'Instructor',
        bio: t.bio ?? t.Bio ?? null,
        profileImagePath: t.profileImagePath ?? t.ProfileImagePath ?? null,
        facebookLink: t.facebookLink ?? t.FacebookLink ?? null,
        youtubeLink: t.youtubeLink ?? t.YoutubeLink ?? null,
      })));
    } catch {
      this.teachers.set([]);
    }
  }

  private async loadStats(courseId: string): Promise<void> {
    try {
      const res: any = await firstValueFrom(this.learningApi.getCourseStats(courseId));
      const d = res?.data ?? res?.Data ?? null;
      if (d) {
        this.enrollmentCount.set(d.enrollmentCount ?? d.EnrollmentCount ?? 0);
        this.videoCount.set(d.videoCount ?? d.VideoCount ?? 0);
        this.practiceCount.set(d.practiceCount ?? d.PracticeCount ?? 0);
      }
    } catch { /* stats are best-effort */ }
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
      void this.loadTeachers(courseId);
      void this.loadStats(courseId);

      const currentUserId = this.authService.getCurrentUser()?.id ?? '';
      if (currentUserId) {
        try {
          const wishRes = await firstValueFrom(this.learningApi.checkWishlist(courseId, currentUserId));
          this.isWishlisted.set(Boolean((wishRes as any)?.data ?? (wishRes as any)?.Data));
        } catch {
          this.isWishlisted.set(false);
        }
      }

      // Load ratings
      await this.loadRatingSummary(courseId);

      if (this.isLoggedIn()) {
        await this.checkEnrollment(courseId);
        await this.loadUserRating(courseId);
        await this.loadInterest(courseId);
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

  protected setRating(stars: number): void {
    this.userRating.set(stars);
  }

  protected async loadRatingSummary(courseId: string): Promise<void> {
    try {
      const res = await firstValueFrom(this.learningApi.getRatingSummary(courseId));
      const data = (res as any)?.data ?? (res as any)?.Data;
      if (data) {
        this.averageRating.set(parseFloat(data.averageRating) || 0);
        this.totalRatings.set(data.totalRatings || 0);
      }
    } catch (error) {
      console.error('Error loading rating summary:', error);
    }
  }

  private async loadInterest(courseId: string): Promise<void> {
    try {
      const res: any = await firstValueFrom(this.liveClass.getInterest(courseId));
      this.isInterested.set(Boolean(res?.data?.interested ?? res?.Data?.interested ?? false));
    } catch { /* ignore */ }
  }

  /** Follow / unfollow this course's free live classes. Logged-out users are sent to login. */
  protected async toggleInterest(): Promise<void> {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }
    const course = this.course();
    if (!course) return;
    this.isTogglingInterest.set(true);
    try {
      if (this.isInterested()) {
        await firstValueFrom(this.liveClass.removeInterest(course.id));
        this.isInterested.set(false);
      } else {
        await firstValueFrom(this.liveClass.setInterest(course.id));
        this.isInterested.set(true);
      }
    } catch { /* ignore */ }
    finally { this.isTogglingInterest.set(false); }
  }

  protected async loadUserRating(courseId: string): Promise<void> {
    if (!this.isLoggedIn()) return;
    
    const userId = this.authService.getCurrentUser()?.id ?? '';
    if (!userId) return;

    try {
      // Use my-ratings list to avoid 404 for courses that are not rated yet.
      const res = await firstValueFrom(this.learningApi.getMyRatings(userId));
      const list = ((res as any)?.data ?? (res as any)?.Data ?? []) as Array<any>;
      const found = Array.isArray(list)
        ? list.find((item) => item?.courseId === courseId)
        : null;

      if (found) {
        this.userRating.set(found.rating ?? 0);
        this.userFeedback.set(found.feedback || '');
      } else {
        this.userRating.set(0);
        this.userFeedback.set('');
      }
    } catch {
      // No rating yet, that's fine
    }
  }

  protected async submitRating(courseId: string): Promise<void> {
    if (!this.isEnrolled()) {
      this.ratingMessage.set('You must be enrolled to rate this course.');
      return;
    }

    if (this.userRating() === 0) {
      this.ratingMessage.set('Please select at least 1 star.');
      return;
    }

    const userId = this.authService.getCurrentUser()?.id ?? '';
    if (!userId) {
      this.ratingMessage.set('Please login to rate.');
      return;
    }

    this.isSubmittingRating.set(true);
    this.ratingMessage.set('');

    try {
      await firstValueFrom(
        this.learningApi.addOrUpdateRating(
          courseId,
          userId,
          this.userRating(),
          this.userFeedback()
        )
      );
      this.ratingMessage.set('✅ Your rating has been saved successfully!');
      this.showRatingForm.set(false);
      await this.loadRatingSummary(courseId);
    } catch (error) {
      console.error('Error submitting rating:', error);
      this.ratingMessage.set('❌ An error occurred while saving your rating.');
    } finally {
      this.isSubmittingRating.set(false);
    }
  }

  protected getStarArray(count: number = 5): number[] {
    return Array.from({ length: count }, (_, i) => i + 1);
  }

  protected async toggleWishlist(): Promise<void> {
    const currentCourse = this.course();
    const userId = this.authService.getCurrentUser()?.id ?? '';

    if (!currentCourse || !userId) {
      return;
    }

    this.isTogglingWishlist.set(true);

    try {
      const res = await firstValueFrom(this.learningApi.toggleWishlist(currentCourse.id, userId));
      const nextState = (res as any)?.data ?? (res as any)?.Data;
      this.isWishlisted.set(Boolean(nextState));
    } catch (error) {
      console.error('Error toggling wishlist:', error);
    } finally {
      this.isTogglingWishlist.set(false);
    }
  }
}
