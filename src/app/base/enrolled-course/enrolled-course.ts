import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LearningApiService, LessonDto } from '../../Service/learning-api.service';
import { DomSanitizer } from '@angular/platform-browser';

type LessonView = {
  id: string;
  title: string;
  description: string;
  orderIndex: number;
  durationMinutes: number;
  videoUrl: string;
};

type CourseMetaView = {
  title: string;
  instructorName: string;
};

@Component({
  selector: 'app-enrolled-course',
  imports: [RouterLink],
  templateUrl: './enrolled-course.html',
  styleUrl: './enrolled-course.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnrolledCourse {
  private readonly route = inject(ActivatedRoute, { optional: true });
  private readonly learningApi = inject(LearningApiService);
  private readonly authService = inject(AuthService);

  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly courseId = signal('');
  protected readonly lessons = signal<LessonView[]>([]);
  protected readonly selectedLessonId = signal('');
  protected readonly courseMeta = signal<CourseMetaView | null>(null);

  protected readonly selectedLesson = computed(() => {
    const currentSelectedId = this.selectedLessonId();
    return this.lessons().find((lesson) => lesson.id === currentSelectedId) ?? null;
  });

  protected readonly selectedVideoUrl = computed(() => this.selectedLesson()?.videoUrl ?? '');
  protected readonly instructorInitial = computed(() => {
    const name = this.courseMeta()?.instructorName ?? '';
    return name.trim().charAt(0).toUpperCase() || 'I';
  });

  constructor(private readonly sanitizer: DomSanitizer) {
    void this.loadLessons();
  }

  protected selectLesson(lessonId: string): void {
    this.selectedLessonId.set(lessonId);
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

  private async loadLessons(): Promise<void> {
    if (!this.authService.isLoggedIn()) {
      this.errorMessage.set('Please login first to view enrolled course lessons.');
      this.isLoading.set(false);
      return;
    }

    const id = this.route?.snapshot.paramMap.get('id') ?? this.route?.snapshot.queryParamMap.get('id') ?? '';

    if (!id) {
      this.errorMessage.set('Course ID পাওয়া যায়নি। আবার চেষ্টা করুন।');
      this.isLoading.set(false);
      return;
    }

    this.courseId.set(id);
    this.isLoading.set(true);
    this.errorMessage.set('');

    try {
      const isEnrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(id));
      if (!isEnrolled) {
        this.errorMessage.set('You are not enrolled in this course yet.');
        this.lessons.set([]);
        return;
      }

      this.courseMeta.set(await this.loadCourseMeta(id));

      const response = await firstValueFrom(this.learningApi.getLessonsByCourse(id));
      const responseWithAlternativeShape = response as { Data?: LessonDto[] };
      const rawLessons = Array.isArray(response.data)
        ? response.data
        : (Array.isArray(responseWithAlternativeShape.Data) ? responseWithAlternativeShape.Data : []);

      const orderedLessons = [...rawLessons].sort((a, b) => a.orderIndex - b.orderIndex);
      const mappedLessons = orderedLessons.map((lesson) => this.mapLessonForView(lesson));

      this.lessons.set(mappedLessons);
      this.selectedLessonId.set(mappedLessons[0]?.id ?? '');
    } catch {
      this.errorMessage.set('Lessons লোড করা যায়নি। একটু পরে আবার চেষ্টা করুন।');
      this.lessons.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  private async loadCourseMeta(id: string): Promise<CourseMetaView | null> {
    try {
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const responseWithAlternativeShape = response as { Data?: Array<{ id: string; title: string; instructorName: string }> };
      const rawCourses = Array.isArray(response.data)
        ? response.data
        : (Array.isArray(responseWithAlternativeShape.Data) ? responseWithAlternativeShape.Data : []);

      const matchedCourse = rawCourses.find((course) => course.id === id);
      if (!matchedCourse) {
        return null;
      }

      return {
        title: matchedCourse.title,
        instructorName: matchedCourse.instructorName,
      };
    } catch {
      return null;
    }
  }

  private mapLessonForView(lesson: LessonDto): LessonView {
    const hasExternalVideo = typeof lesson.videoUrl === 'string' && lesson.videoUrl.length > 0;
    const hasUploadedVideo = typeof lesson.videoPath === 'string' && lesson.videoPath.length > 0;

    return {
      id: lesson.id,
      title: lesson.title,
      description: lesson.description,
      orderIndex: lesson.orderIndex,
      durationMinutes: lesson.durationMinutes,
      videoUrl: hasExternalVideo
        ? lesson.videoUrl as string
        : (hasUploadedVideo ? this.learningApi.buildDownloadUrl(lesson.videoPath) : ''),
    };
  }

  isYoutube(url: string): boolean {
  return url?.includes('youtube.com') || url?.includes('youtu.be');
}

getSafeYoutubeUrl(url: string) {
  const videoId = this.extractVideoId(url);
  return this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.youtube.com/embed/${videoId}`
  );
}

extractVideoId(url: string): string {
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : '';
}
}
