import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import Hls from 'hls.js';
import { LiveClass, LiveClassService } from '../../Service/live-class-service';
import { LearningApiService } from '../../Service/learning-api.service';
import { JwtService } from '../../Service/jwt.service';
import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-course-recordings',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './course-recordings.html',
  styleUrl: './course-recordings.css',
})
export class CourseRecordings implements OnInit, OnDestroy {
  @Input({ required: true }) courseId!: string;
  /** When true, load the course's FREE live-class recordings instead of the paid ones. */
  @Input() free = false;

  private readonly liveClassService = inject(LiveClassService);
  private readonly learningApi = inject(LearningApiService);
  private readonly http = inject(HttpClient);
  private readonly jwt = inject(JwtService);
  protected readonly lang = inject(LanguageService);

  protected readonly recordings = signal<LiveClass[]>([]);
  protected readonly watching = signal<LiveClass | null>(null);
  private hls: any = null;
  private plyr: any = null;   // normal lesson player এর মতো same Plyr instance

  @ViewChild('recPlayer') recPlayer?: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    void this.load();
  }

  ngOnDestroy(): void {
    this.teardown();
  }

  private async load(): Promise<void> {
    try {
      const source$: Observable<any> = this.free
        ? this.liveClassService.getFreeCourseRecordings(this.courseId)
        : this.liveClassService.getCourseRecordings(this.courseId);
      const res: any = await firstValueFrom(source$);
      const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res?.Data) ? res.Data : [];
      this.recordings.set(arr.map((item: any) => ({
        id: item.id ?? item.Id ?? '',
        title: item.title ?? item.Title ?? '',
        description: item.description ?? item.Description ?? '',
        scheduledAt: item.scheduledAt ?? item.ScheduledAt ?? '',
        isActive: false,
        isEnded: true,
        roomUrl: '',
        recordingPath: item.recordingPath ?? item.RecordingPath ?? '',
        recordingStatus: item.recordingStatus ?? item.RecordingStatus ?? '',
      })));
    } catch {
      this.recordings.set([]);
    }
  }

  protected play(rec: LiveClass): void {
    if (!rec.recordingPath) return;
    this.watching.set(rec);
    // .m3u8 → HLS (legacy, ffmpeg hosts); anything else (mp4/webm) → direct token-stream.
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
    // আগের player সম্পূর্ণ teardown (Plyr আগে, তারপর HLS — blob restore error এড়াতে)
    this.teardown();

    const PlyrLib = (window as any).Plyr;

    // HLS playlist — hls.js + Plyr (normal lesson player এর মতোই)
    if (isHls && Hls.isSupported()) {
      // Plyr official pattern: আগে Plyr তৈরি করো, তারপর hls.attachMedia()
      if (PlyrLib) this.plyr = new PlyrLib(videoEl, this.getPlyrConfig());
      const hls = new Hls();
      this.hls = hls;
      hls.attachMedia(videoEl);
      hls.loadSource(url);
      hls.on(Hls.Events.MANIFEST_PARSED, () => videoEl.play().catch(() => {}));
      return;
    }

    // Raw MP4/WEBM (এখনকার default) বা Safari native HLS — সরাসরি src, Plyr দিয়ে wrap
    if (PlyrLib) this.plyr = new PlyrLib(videoEl, this.getPlyrConfig());
    videoEl.src = url;
    try { videoEl.load(); } catch { }
    videoEl.play().catch(() => {});
  }

  // normal lesson player (enrolled-course) এর হুবহু একই config — same look, same controls,
  // download বাটন নেই, right-click context menu বন্ধ।
  private getPlyrConfig() {
    return {
      controls: [
        'play-large', 'play', 'progress',
        'current-time', 'duration',
        'mute', 'volume', 'fullscreen',
      ],
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
    // ⚠️ order: Plyr আগে destroy, তারপর HLS — নাহলে Plyr dead blob restore করে error দেয়
    if (this.plyr) { try { this.plyr.destroy(); } catch { } this.plyr = null; }
    if (this.hls) { try { this.hls.destroy(); } catch { } this.hls = null; }
    const v = this.recPlayer?.nativeElement;
    if (v) { try { v.pause(); } catch { } v.removeAttribute('src'); try { v.load(); } catch { } }
  }
}
