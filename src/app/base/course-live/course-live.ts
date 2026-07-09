import { Component, Input, OnInit, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { LiveClass, LiveClassService } from '../../Service/live-class-service';
import { LiveExamAvailable, LiveExamService } from '../../Service/live-exam.service';
import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-course-live',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './course-live.html',
  styleUrl: './course-live.css',
})
export class CourseLive implements OnInit {
  @Input({ required: true }) courseId!: string;

  private readonly liveClassService = inject(LiveClassService);
  private readonly liveExamService = inject(LiveExamService);
  protected readonly lang = inject(LanguageService);

  protected readonly liveClasses = signal<LiveClass[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly activeLiveClass = computed(() => this.liveClasses().find((lc) => lc.isActive) ?? null);

  // Published/closed exams of this course, keyed by live class (Google-Forms-style live exams)
  protected readonly examsByClass = signal<Map<string, LiveExamAvailable>>(new Map());

  protected examFor(liveClassId: string): LiveExamAvailable | null {
    return this.examsByClass().get(liveClassId) ?? null;
  }

  ngOnInit(): void {
    void this.load();
    void this.loadExams();
  }

  private async loadExams(): Promise<void> {
    try {
      const res: any = await firstValueFrom(this.liveExamService.available(this.courseId));
      const rows: LiveExamAvailable[] = res?.data ?? res?.Data ?? [];
      this.examsByClass.set(new Map(rows.map((r) => [r.liveClassId, r])));
    } catch {
      this.examsByClass.set(new Map());
    }
  }

  private async load(): Promise<void> {
    this.isLoading.set(true);
    try {
      const res: any = await firstValueFrom(this.liveClassService.getByCourse(this.courseId));
      const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res?.Data) ? res.Data : [];
      this.liveClasses.set(arr.map((item: any) => ({
        id: item.id ?? item.Id ?? '',
        title: item.title ?? item.Title ?? '',
        description: item.description ?? item.Description ?? '',
        scheduledAt: item.scheduledAt ?? item.ScheduledAt ?? '',
        isActive: Boolean(item.isActive ?? item.IsActive),
        isEnded: Boolean(item.isEnded ?? item.IsEnded),
        roomUrl: item.roomUrl ?? item.RoomUrl ?? '',
      })));
    } catch {
      this.liveClasses.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }
}
