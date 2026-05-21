import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseDto, LearningApiService } from '../../Service/learning-api.service';
import { LiveClass, LiveClassService } from '../../Service/live-class-service';
import { Navbar } from '../../shared/navbar/navbar';

type CourseWithLive = {
  id: string;
  title: string;
  instructorName: string;
  category: string;
  liveClasses: LiveClass[];
  isLoadingLive: boolean;
};

@Component({
  selector: 'app-my-classes',
  imports: [RouterLink,Navbar], 
  templateUrl: './my-classes.html',
  styleUrl: './my-classes.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyClasses {
  private readonly learningApi = inject(LearningApiService);
  private readonly liveClassService = inject(LiveClassService);
  private readonly authService = inject(AuthService);

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