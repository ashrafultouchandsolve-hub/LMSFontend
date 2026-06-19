import {
  Component, inject, signal,
  OnDestroy, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpEventType } from '@angular/common/http';
import { LiveClassService } from '../../Service/live-class-service';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';

declare const JitsiMeetExternalAPI: any; // Jitsi global API

type RecState = 'idle' | 'recording' | 'uploading';

@Component({
  selector: 'app-live-class-room',
  imports: [CommonModule, RouterLink],
  templateUrl: './live-class-room.html',
  styleUrl: './live-class-room.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LiveClassRoom implements AfterViewInit, OnDestroy {
  private readonly route   = inject(ActivatedRoute);
  private readonly router  = inject(Router);
  private readonly svc     = inject(LiveClassService);
  private readonly authSvc = inject(AuthService);
  protected readonly lang  = inject(LanguageService);

  readonly isLoading = signal(true);
  readonly error     = signal('');
  readonly title     = signal('');
  readonly host      = signal('');
  readonly isTeacher = signal(false);
  readonly isFree    = signal(false);
  readonly classId   = signal('');

  // ── Recording state (teacher, course classes only) ──────────────
  readonly showRecordPrompt = signal(false);
  readonly recState         = signal<RecState>('idle');
  readonly recNote          = signal('');
  readonly uploadPct        = signal(0);

  private jitsiApi: any = null;
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];
  private recordedBlob: Blob | null = null;
  private displayStream: MediaStream | null = null;
  private micStream: MediaStream | null = null;
  private audioCtx: AudioContext | null = null;

  ngAfterViewInit() {
    const id    = this.route.snapshot.paramMap.get('id') ?? '';
    const free  = this.route.snapshot.data['free'] === true;
    const guest = this.route.snapshot.queryParamMap.get('name') ?? '';
    const user  = this.authSvc.getCurrentUser() as any;
    this.classId.set(id);
    this.isFree.set(free);
    this.isTeacher.set(user?.role === 1);

    // Free classes join anonymously (no login); course classes use the authed endpoint.
    const join$ = free ? this.svc.joinFree(id, guest) : this.svc.join(id);

    join$.subscribe({
      next: (res: any) => {
        const roomUrl  = res.roomUrl  ?? res.RoomUrl  ?? '';
        const userName = res.userName ?? res.UserName ?? (free ? 'Guest' : 'Student');
        this.title.set(res.title ?? res.Title ?? 'Live Class');
        this.host.set(res.hostName ?? res.HostName ?? '');

        // Extract room name from "https://meet.jit.si/tands-abc123"
        const roomName = roomUrl.replace('https://meet.jit.si/', '');

        this.isLoading.set(false);

        // Auto-prompt the host to record — both course AND free classes are recorded now.
        if (this.isTeacher()) {
          this.showRecordPrompt.set(true);
        }

        // Load Jitsi after DOM update
        setTimeout(() => this.loadJitsi(roomName, userName), 0);
      },
      error: (err: any) => {
        const msg = err?.error?.message ?? err?.error?.Message ?? 'Could not join live class.';
        this.error.set(msg);
        this.isLoading.set(false);
      }
    });
  }

  private loadJitsi(roomName: string, displayName: string) {
    const container = document.getElementById('jitsi-container');
    if (!container) return;

    this.jitsiApi = new JitsiMeetExternalAPI('meet.jit.si', {
      roomName:   roomName,
      parentNode: container,
      width:      '100%',
      height:     '100%',
      userInfo: {
        displayName: displayName
      },
      configOverwrite: {
        startWithAudioMuted: false,
        startWithVideoMuted: false,
        disableDeepLinking:  true,
      },
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK:  false,
        SHOW_BRAND_WATERMARK:  false,
        TOOLBAR_BUTTONS: [
          'microphone', 'camera', 'desktop', 'chat',
          'raisehand', 'tileview', 'fullscreen', 'hangup'
        ],
      }
    });
  }

  // ── Recording ───────────────────────────────────────────────────

  private pickMimeType(): string {
    const candidates = [
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm',
    ];
    for (const c of candidates) {
      if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(c)) return c;
    }
    return 'video/webm';
  }

  /** Teacher clicks "Start recording" — the user gesture browsers require for getDisplayMedia. */
  async startRecording(): Promise<void> {
    this.recNote.set('');
    try {
      const display = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });

      // Mic is best-effort — without it only the screen + tab audio is captured.
      let mic: MediaStream | null = null;
      try { mic = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch { mic = null; }

      // Mix tab audio + mic into one audio track via Web Audio.
      const tracks: MediaStreamTrack[] = [...display.getVideoTracks()];
      const ctx = new AudioContext();
      const dest = ctx.createMediaStreamDestination();
      if (display.getAudioTracks().length) {
        ctx.createMediaStreamSource(new MediaStream(display.getAudioTracks())).connect(dest);
      }
      if (mic && mic.getAudioTracks().length) {
        ctx.createMediaStreamSource(new MediaStream(mic.getAudioTracks())).connect(dest);
      }
      tracks.push(...dest.stream.getAudioTracks());

      const combined = new MediaStream(tracks);
      this.displayStream = display;
      this.micStream = mic;
      this.audioCtx = ctx;

      const recorder = new MediaRecorder(combined, { mimeType: this.pickMimeType() });
      this.recordedChunks = [];
      this.recordedBlob = null;
      recorder.ondataavailable = (e) => { if (e.data && e.data.size > 0) this.recordedChunks.push(e.data); };
      recorder.onstop = () => {
        this.recordedBlob = new Blob(this.recordedChunks, { type: recorder.mimeType || 'video/webm' });
      };
      this.mediaRecorder = recorder;
      recorder.start(1000); // gather data every 1s so long classes don't lose everything

      this.recState.set('recording');
      this.showRecordPrompt.set(false);

      // If the teacher stops sharing from the browser's own bar, finalize gracefully.
      const vTrack = display.getVideoTracks()[0];
      if (vTrack) {
        vTrack.addEventListener('ended', () => {
          if (this.recState() === 'recording') {
            void this.stopRecorder();
            this.recState.set('idle');
            this.recNote.set(this.lang.t().lcRecStoppedShare);
          }
        });
      }
    } catch {
      // User cancelled the picker or denied permission — class still runs, no recording.
      this.recState.set('idle');
      this.showRecordPrompt.set(false);
      this.recNote.set(this.lang.t().lcRecDenied);
    }
  }

  /** Skip recording for this class. */
  skipRecording(): void {
    this.showRecordPrompt.set(false);
    this.recState.set('idle');
  }

  private stopRecorder(): Promise<void> {
    return new Promise((resolve) => {
      const mr = this.mediaRecorder;
      if (!mr || mr.state === 'inactive') { this.cleanupStreams(); resolve(); return; }
      mr.onstop = () => {
        this.recordedBlob = new Blob(this.recordedChunks, { type: mr.mimeType || 'video/webm' });
        this.cleanupStreams();
        resolve();
      };
      try { mr.stop(); } catch { this.cleanupStreams(); resolve(); }
    });
  }

  private cleanupStreams(): void {
    this.displayStream?.getTracks().forEach((t) => t.stop());
    this.micStream?.getTracks().forEach((t) => t.stop());
    this.displayStream = null;
    this.micStream = null;
    if (this.audioCtx && this.audioCtx.state !== 'closed') {
      try { void this.audioCtx.close(); } catch { /* ignore */ }
    }
    this.audioCtx = null;
  }

  async endClass() {
    if (!confirm(this.lang.t().lcEndConfirm)) return;

    // Finalize any in-progress recording so we have the full blob.
    if (this.recState() === 'recording') {
      await this.stopRecorder();
    }

    const blob = this.recordedBlob;
    const leaveTo = this.isFree() ? '/free-live' : '/teacher';
    const endAndLeave = () => {
      const end$ = this.isFree() ? this.svc.endFree(this.classId()) : this.svc.end(this.classId());
      end$.subscribe({
        next: () => this.router.navigateByUrl(leaveTo),
        error: () => this.router.navigateByUrl(leaveTo),
      });
    };

    // Any class (course OR free) with a recording → upload first, then end + leave.
    if (blob && blob.size > 0) {
      this.recState.set('uploading');
      this.uploadPct.set(0);
      const file = new File([blob], `recording-${this.classId()}.webm`, { type: blob.type || 'video/webm' });
      const upload$ = this.isFree()
        ? this.svc.uploadFreeRecording(this.classId(), file)
        : this.svc.uploadRecording(this.classId(), file);
      upload$.subscribe({
        next: (event) => {
          if (event.type === HttpEventType.UploadProgress && event.total) {
            this.uploadPct.set(Math.round((100 * event.loaded) / event.total));
          }
        },
        complete: () => endAndLeave(),
        error: () => { this.recNote.set(this.lang.t().lcRecUploadFailed); endAndLeave(); },
      });
    } else {
      endAndLeave();
    }
  }

  ngOnDestroy() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      try { this.mediaRecorder.stop(); } catch { /* ignore */ }
    }
    this.cleanupStreams();
    if (this.jitsiApi) {
      this.jitsiApi.dispose();
      this.jitsiApi = null;
    }
  }
}
