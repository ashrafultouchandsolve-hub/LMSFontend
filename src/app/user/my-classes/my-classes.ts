import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, LearningApiService } from '../../Service/learning-api.service';
import { LiveClass, LiveClassService } from '../../Service/live-class-service';
import { Navbar } from '../../shared/navbar/navbar';
import { LanguageService } from '../../Service/language.service';

type CourseWithLive = {
  id: string;
  title: string;
  instructorName: string;
  category: string;
  liveClasses: LiveClass[];
  isLoadingLive: boolean;
  isFollowed?: boolean;   // followed (un-enrolled) course → live-only, no recordings
};

@Component({
  selector: 'app-my-classes',
  imports: [RouterLink, Navbar],
  templateUrl: './my-classes.html',
  styleUrl: './my-classes.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyClasses {
  private readonly learningApi = inject(LearningApiService);
  private readonly liveClassService = inject(LiveClassService);
  private readonly authService = inject(AuthService);
  protected readonly lang = inject(LanguageService);

  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly courses = signal<CourseWithLive[]>([]);

  // সব course এর মধ্যে যেগুলোতে active live class আছে
  protected readonly activeLiveClasses = computed(() =>
    this.courses().flatMap(c =>
      c.liveClasses
        .filter(lc => lc.isActive)
        .map(lc => ({ ...lc, courseTitle: c.title }))
    )
  );

  // সব upcoming live class (active না, ended না)
  protected readonly upcomingLiveClasses = computed(() =>
    this.courses().flatMap(c =>
      c.liveClasses
        .filter(lc => !lc.isActive && !lc.isEnded)
        .map(lc => ({ ...lc, courseTitle: c.title }))
    ).sort((a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime())
  );

  // "By course" breakdown এ শুধু enrolled course দেখাবে। followed (un-enrolled) course এর
  // জন্য আলাদা card দরকার নেই — তারা শুধু লাইভ চললে উপরের "Live now" banner থেকে join করবে।
  protected readonly breakdownCourses = computed(() =>
    this.courses().filter(c => !c.isFollowed)
  );

  constructor() {
    void this.load();
  }

  private async load(): Promise<void> {
    if (!this.authService.isLoggedIn()) {
      this.errorMessage.set('Live classes দেখতে হলে আগে login করতে হবে।');
      this.isLoading.set(false);
      return;
    }

    try {
      // ১. সব course আনো
      const response = await firstValueFrom(this.learningApi.getAllCourses());
      const alt = response as { Data?: CourseDto[] };
      const allCourses = Array.isArray(response.data) ? response.data
        : Array.isArray(alt.Data) ? alt.Data : [];

      // ২. enrolled কিনা check করো
      const enrolledChecks = await Promise.all(
        allCourses.map(async (course) => {
          try {
            const enrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(course.id));
            return { course, enrolled };
          } catch {
            return { course, enrolled: false };
          }
        })
      );

      const enrolledCourses = enrolledChecks
        .filter(x => x.enrolled)
        .map(x => ({
          id: x.course.id,
          title: x.course.title,
          instructorName: x.course.instructorName,
          category: x.course.category,
          liveClasses: [] as LiveClass[],
          isLoadingLive: true,
        }));

      this.courses.set(enrolledCourses);
      this.isLoading.set(false);

      // ৩. প্রতিটা course এর live class আলাদাভাবে load করো
      await Promise.all(
        enrolledCourses.map(async (course, index) => {
          try {
            const res = await firstValueFrom(this.liveClassService.getByCourse(course.id));
            const anyRes = res as any;
            const arr = Array.isArray(anyRes?.data) ? anyRes.data
              : Array.isArray(anyRes?.Data) ? anyRes.Data : [];

            const liveClasses: LiveClass[] = arr.map((item: any) => ({
              id: item.id ?? item.Id ?? '',
              title: item.title ?? item.Title ?? '',
              description: item.description ?? item.Description ?? '',
              scheduledAt: item.scheduledAt ?? item.ScheduledAt ?? '',
              isActive: Boolean(item.isActive ?? item.IsActive),
              isEnded: Boolean(item.isEnded ?? item.IsEnded),
              roomUrl: item.roomUrl ?? item.RoomUrl ?? '',
            }));

            this.courses.update(list =>
              list.map((c, i) => i === index ? { ...c, liveClasses, isLoadingLive: false } : c)
            );
          } catch {
            this.courses.update(list =>
              list.map((c, i) => i === index ? { ...c, isLoadingLive: false } : c)
            );
          }
        })
      );

      // ৪. Followed (interested, non-enrolled) courses → show their FREE live classes too
      try {
        const intRes: any = await firstValueFrom(this.liveClassService.getMyInterests());
        const interestedIds: string[] = (intRes?.data ?? intRes?.Data ?? []) as string[];
        const enrolledIds = new Set(enrolledCourses.map(c => c.id));
        const followedCourses = allCourses.filter(c => interestedIds.includes(c.id) && !enrolledIds.has(c.id));

        await Promise.all(followedCourses.map(async (course) => {
          try {
            const res: any = await firstValueFrom(this.liveClassService.getCourseActiveFree(course.id));
            const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res?.Data) ? res.Data : [];
            const liveClasses: LiveClass[] = arr.map((item: any) => ({
              id: item.id ?? item.Id ?? '',
              title: item.title ?? item.Title ?? '',
              description: item.description ?? item.Description ?? '',
              scheduledAt: item.createdAt ?? item.CreatedAt ?? '',
              isActive: true,
              isEnded: false,
              roomUrl: '',
              isFree: true,
            }));
            this.courses.update(list => [...list, {
              id: course.id, title: course.title, instructorName: course.instructorName,
              category: course.category, liveClasses, isLoadingLive: false, isFollowed: true,
            }]);
          } catch { /* ignore a course's free-class load failure */ }
        }));
      } catch { /* not logged in / no interests */ }

    } catch {
      this.errorMessage.set('Classes লোড করা যায়নি।');
      this.isLoading.set(false);
    }
  }

  protected formatScheduled(value: string): string {
    const d = new Date(value);
    if (isNaN(d.getTime())) return value;
    return d.toLocaleString('en-BD', { dateStyle: 'medium', timeStyle: 'short' });
  }

  protected totalLive(course: CourseWithLive): number {
    return course.liveClasses.filter(lc => !lc.isEnded).length;
  }
}