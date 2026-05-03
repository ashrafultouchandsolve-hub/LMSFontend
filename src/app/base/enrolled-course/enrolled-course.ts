import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, OnDestroy, signal, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LearningApiService, LessonDto } from '../../Service/learning-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LanguageService } from '../../Service/language.service';

type LessonView = {
  id: string;
  title: string;
  description: string;
  orderIndex: number;
  durationMinutes: number;
  videoUrl: string;
  thumbnailUrl: string;
  hasQuiz:boolean;
 QuizAttempted: boolean; 
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
export class EnrolledCourse implements OnDestroy {
  private readonly route = inject(ActivatedRoute, { optional: true });
  private readonly learningApi = inject(LearningApiService);
  private readonly authService = inject(AuthService);
readonly lang = inject(LanguageService);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly courseId = signal('');
  protected readonly lessons = signal<LessonView[]>([]);
  protected readonly selectedLessonId = signal('');
  protected readonly courseMeta = signal<CourseMetaView | null>(null);
  private saveProgressInterval: any;

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
  ngOnDestroy() {
  clearInterval(this.saveProgressInterval);
}

protected selectLesson(lessonId: string): void {
  // আগের interval clear করো
  clearInterval(this.saveProgressInterval);
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
    this.errorMessage.set('Please login first.');
    this.isLoading.set(false);
    return;
  }

  const id = this.route?.snapshot.paramMap.get('id') ??
    this.route?.snapshot.queryParamMap.get('id') ?? '';

  if (!id) {
    this.errorMessage.set('Course ID পাওয়া যায়নি।');
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
    const anyRes = response as any;
    const rawLessons = Array.isArray(anyRes?.data) ? anyRes.data
      : Array.isArray(anyRes?.Data) ? anyRes.Data : [];

    const orderedLessons = [...rawLessons].sort((a, b) => a.orderIndex - b.orderIndex);
    const mappedLessons = orderedLessons.map((lesson) => this.mapLessonForView(lesson));

    const userId = this.authService.getCurrentUser()?.id ?? '';

    // প্রতিটি lesson এর quiz আছে কিনা এবং attempt হয়েছে কিনা check করো
    const lessonsWithQuizInfo = await Promise.all(
      mappedLessons.map(async (lesson) => {
        try {
          // quiz count check
          const quizRes = await firstValueFrom(
            this.learningApi.getQuizzesByLesson(lesson.id)
          );
          const quizData = (quizRes as any)?.Data ?? (quizRes as any)?.data ?? [];
          const hasQuiz = Array.isArray(quizData) && quizData.length > 0;

          // attempt check — quiz থাকলেই check করো
          let quizAttempted = false;
          if (hasQuiz && userId) {
            const attemptRes = await firstValueFrom(
              this.learningApi.hasAttemptedQuiz(lesson.id, userId)
            );
            quizAttempted = (attemptRes as any)?.Data ?? false;
          }

          return { ...lesson, hasQuiz, QuizAttempted: quizAttempted };
        } catch {
          return { ...lesson, hasQuiz: false, QuizAttempted: false };
        }
      })
    );

    this.lessons.set(lessonsWithQuizInfo);
    
    // Check if lessonId is in query params (coming from video history resume)
    const resumeLessonId = this.route?.snapshot.queryParamMap.get('lessonId') ?? '';
    if (resumeLessonId && lessonsWithQuizInfo.some(l => l.id === resumeLessonId)) {
      this.selectedLessonId.set(resumeLessonId);
    } else {
      this.selectedLessonId.set(lessonsWithQuizInfo[0]?.id ?? '');
    }

  } catch {
    this.errorMessage.set('Lessons লোড করা যায়নি।');
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

private mapLessonForView(lesson: any): LessonView {
  const videoPath = lesson.videoPath ?? lesson.VideoPath ?? null;
  const videoUrl = lesson.videoUrl ?? lesson.VideoUrl ?? null;
  const thumbnailPath = lesson.thumbnailPath ?? lesson.ThumbnailPath ?? null;
  
  const hasUploadedVideo = typeof videoPath === 'string' && videoPath.length > 0;
  const hasExternalVideo = typeof videoUrl === 'string' &&
    videoUrl.length > 0 &&
    (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') || videoUrl.startsWith('http'));

  return {
    id: lesson.id ?? lesson.Id,
    title: lesson.title ?? lesson.Title,
    description: lesson.description ?? lesson.Description ?? '',
    orderIndex: lesson.orderIndex ?? lesson.OrderIndex ?? 0,
    durationMinutes: lesson.durationMinutes ?? lesson.DurationMinutes ?? 0,
    videoUrl: hasUploadedVideo
      ? this.learningApi.buildDownloadUrl(videoPath)
      : (hasExternalVideo ? videoUrl : ''),
    thumbnailUrl: this.learningApi.buildDownloadUrl(thumbnailPath),
   hasQuiz: false,
  QuizAttempted: false
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


@ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

// Video load হলে saved position থেকে শুরু
async onVideoLoaded(event: Event, lessonId: string): Promise<void> {
  const video = event.target as HTMLVideoElement;
  const userId = this.authService.getCurrentUser()?.id ?? '';
  if (!userId) return;

  // আগের interval clear করো
  clearInterval(this.saveProgressInterval);

  try {
    // Check if resumeAt query param exists (coming from video history)
    const resumeAtParam = this.route?.snapshot.queryParamMap.get('resumeAt');
    let resumeSeconds = resumeAtParam ? parseFloat(resumeAtParam) : null;

    // If no query param, get from saved progress
    if (resumeSeconds === null || isNaN(resumeSeconds)) {
      const res = await firstValueFrom(
        this.learningApi.getVideoProgress(lessonId, userId)
      );
      const progress = (res as any)?.Data;
      resumeSeconds = progress?.watchedSeconds ?? null;
    }

    if (resumeSeconds !== null && resumeSeconds > 5) {
      // seeked event দিয়ে নিশ্চিত করো
      const trySetTime = () => {
        if (video.readyState >= 2) {
          video.currentTime = resumeSeconds;
        } else {
          video.addEventListener('canplay', () => {
            video.currentTime = resumeSeconds;
          }, { once: true });
        }
      };
      trySetTime();
    }
  } catch { }

  // প্রতি ৫ সেকেন্ডে save
  this.saveProgressInterval = setInterval(async () => {
    if (video.paused || video.ended) return;
    const uid = this.authService.getCurrentUser()?.id ?? '';
    if (!uid) return;
    await firstValueFrom(
      this.learningApi.saveVideoProgress(lessonId, {
        userId: uid,
        watchedSeconds: video.currentTime,
        totalSeconds: video.duration || 0
      })
    ).catch(() => {});
  }, 5000);
}

// Video শেষ হলে complete mark করো
async onVideoEnded(event: Event, lessonId: string): Promise<void> {
  const video = event.target as HTMLVideoElement;
  const userId = this.authService.getCurrentUser()?.id ?? '';
  if (!userId) return;

  await firstValueFrom(
    this.learningApi.saveVideoProgress(lessonId, {
      userId,
      watchedSeconds: video.duration,
      totalSeconds: video.duration
    })
  ).catch(() => {});

  clearInterval(this.saveProgressInterval);
}
}
