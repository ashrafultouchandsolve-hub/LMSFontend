import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import Hls from 'hls.js';
import { LiveClass, LiveClassService } from '../../Service/live-class-service';
import { LiveExamAvailable, LiveExamService } from '../../Service/live-exam.service';
import { LearningApiService } from '../../Service/learning-api.service';
import { JwtService } from '../../Service/jwt.service';
import { LanguageService } from '../../Service/language.service';

/** One live class with its (optional) recording and its (optional) exam grouped together. */
type ClassworkRow = {
  liveClassId: string;
  title: string;
  date: string;
  recording: LiveClass | null;
  exam: LiveExamAvailable | null;
};

/**
 * Student "Class work" — one card per live class showing BOTH the class recording
 * and the exam for that same class, so it's always obvious which exam belongs to
 * which class (the exam covers what was taught in that class).
 */
@Component({
  selector: 'app-course-classwork',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './course-classwork.html',
  styleUrl: './course-classwork.css',
})
export class CourseClasswork implements OnInit, OnDestroy {
  @Input({ required: true }) courseId!: string;

  private readonly liveClassService = inject(LiveClassService);
  private readonly liveExamService = inject(LiveExamService);
  private readonly learningApi = inject(LearningApiService);
  private readonly http = inject(HttpClient);
  private readonly jwt = inject(JwtService);
  protected readonly lang = inject(LanguageService);

  protected readonly rows = signal<ClassworkRow[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly watching = signal<LiveClass | null>(null);

  protected readonly pendingExams = computed(() =>
    this.rows().filter((r) => r.exam && r.exam.status === 1 && (r.exam.myStatus === -1 || r.exam.myStatus === 0)).length);

  private hls: any = null;
  private plyr: any = null;
  @ViewChild('recPlayer') recPlayer?: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    void this.load();
  }

  ngOnDestroy(): void {
    this.teardown();
  }

  private async load(): Promise<void> {
    this.isLoading.set(true);
    try {
      const [recRes, exRes] = await Promise.all([
        firstValueFrom(this.liveClassService.getCourseRecordings(this.courseId)).catch(() => null),
        firstValueFrom(this.liveExamService.available(this.courseId)).catch(() => null),
      ]);

      const recArr: any[] = (recRes as any)?.data ?? (recRes as any)?.Data ?? [];
      const exArr: LiveExamAvailable[] = (exRes as any)?.data ?? (exRes as any)?.Data ?? [];

      // Merge recordings + exams keyed by live class id.
      const map = new Map<string, ClassworkRow>();
      for (const item of recArr) {
        const id = item.id ?? item.Id ?? '';
        if (!id) continue;
        map.set(id, {
          liveClassId: id,
          title: item.title ?? item.Title ?? 'Live class',
          date: item.scheduledAt ?? item.ScheduledAt ?? '',
          recording: {
            id,
            title: item.title ?? item.Title ?? '',
            description: item.description ?? item.Description ?? '',
            scheduledAt: item.scheduledAt ?? item.ScheduledAt ?? '',
            isActive: false, isEnded: true, roomUrl: '',
            recordingPath: item.recordingPath ?? item.RecordingPath ?? '',
            recordingStatus: item.recordingStatus ?? item.RecordingStatus ?? '',
          },
          exam: null,
        });
      }
      for (const ex of (Array.isArray(exArr) ? exArr : [])) {
        const existing = map.get(ex.liveClassId);
        if (existing) existing.exam = ex;
        else map.set(ex.liveClassId, {
          liveClassId: ex.liveClassId,
          title: ex.liveClassTitle || 'Live class',
          date: ex.publishedAt ?? '',
          recording: null,
          exam: ex,
        });
      }

      const list = Array.from(map.values()).sort((a, b) => {
        // open exams first, then newest class date
        const aw = a.exam && a.exam.status === 1 && (a.exam.myStatus === -1 || a.exam.myStatus === 0) ? 0 : 1;
        const bw = b.exam && b.exam.status === 1 && (b.exam.myStatus === -1 || b.exam.myStatus === 0) ? 0 : 1;
        if (aw !== bw) return aw - bw;
        return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
      });
      this.rows.set(list);
    } catch {
      this.rows.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  // ── recording playback (same token-stream + Plyr pattern as course-recordings) ──
  protected play(rec: LiveClass | null): void {
    if (!rec?.recordingPath) return;
    this.watching.set(rec);
    const isHls = rec.recordingPath.toLowerCase().endsWith('.m3u8');
    const authToken = this.jwt.getToken();
    const headers = new HttpHeaders(authToken ? { Authorization: `Bearer ${authToken}` } : {});
    const params = new HttpParams().set('path', rec.recordingPath);
    this.http.get<any>(`${this.learningApi.getBaseUrl()}/files/video-token?${params.toString()}`, { headers })
      .subscribe({
        next: (res) => {
          const streamParams = new HttpParams()
            .set('path', rec.recordingPath!)
            .set('token', res.token)
            .set('exp', String(res.exp));
          const endpoint = isHls ? 'files/hls/playlist' : 'files/stream';
          const url = `${this.learningApi.getBaseUrl()}/${endpoint}?${streamParams.toString()}`;
          this.attach(url, isHls);
        },
        error: () => {},
      });
  }

  private attach(url: string, isHls: boolean, attempt = 0): void {
    const videoEl = this.recPlayer?.nativeElement;
    if (!videoEl) {
      if (attempt > 20) return;
      requestAnimationFrame(() => this.attach(url, isHls, attempt + 1));
      return;
    }
    this.teardown();
    const PlyrLib = (window as any).Plyr;
    if (isHls && Hls.isSupported()) {
      if (PlyrLib) this.plyr = new PlyrLib(videoEl, this.getPlyrConfig());
      const hls = new Hls();
      this.hls = hls;
      hls.attachMedia(videoEl);
      hls.loadSource(url);
      hls.on(Hls.Events.MANIFEST_PARSED, () => videoEl.play().catch(() => {}));
      return;
    }
    if (PlyrLib) this.plyr = new PlyrLib(videoEl, this.getPlyrConfig());
    videoEl.src = url;
    try { videoEl.load(); } catch {}
    videoEl.play().catch(() => {});
  }

  private getPlyrConfig() {
    return {
      controls: ['play-large', 'play', 'progress', 'current-time', 'duration', 'mute', 'volume', 'fullscreen'],
      settings: ['speed'],
      speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] },
      keyboard: { focused: true, global: false },
      tooltips: { controls: true, seek: true },
      disableContextMenu: true,
    };
  }

  protected close(): void {
    this.teardown();
    this.watching.set(null);
  }

  private teardown(): void {
    if (this.plyr) { try { this.plyr.destroy(); } catch {} this.plyr = null; }
    if (this.hls) { try { this.hls.destroy(); } catch {} this.hls = null; }
    const v = this.recPlayer?.nativeElement;
    if (v) { try { v.pause(); } catch {} v.removeAttribute('src'); try { v.load(); } catch {} }
  }
}
