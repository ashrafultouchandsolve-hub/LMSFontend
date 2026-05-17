import {
  Component, inject, signal,
  OnDestroy, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LiveClassService } from '../../Service/live-class-service';
import { AuthService } from '../../Service/auth.service';

declare const JitsiMeetExternalAPI: any; // Jitsi global API

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

  readonly isLoading = signal(true);
  readonly error     = signal('');
  readonly title     = signal('');
  readonly isTeacher = signal(false);
  readonly classId   = signal('');

  private jitsiApi: any = null;

  ngAfterViewInit() {
    const id   = this.route.snapshot.paramMap.get('id') ?? '';
    const user = this.authSvc.getCurrentUser() as any;
    this.classId.set(id);
    this.isTeacher.set(user?.role === 1);

    this.svc.join(id).subscribe({
      next: (res: any) => {
        const roomUrl  = res.roomUrl  ?? res.RoomUrl  ?? '';
        const userName = res.userName ?? res.UserName ?? 'Student';
        this.title.set(res.title ?? res.Title ?? 'Live Class');

        // "https://meet.jit.si/tands-abc123" থেকে room name বের করো
        const roomName = roomUrl.replace('https://meet.jit.si/', '');

        this.isLoading.set(false);

        // DOM update হওয়ার পরে Jitsi load করো
        setTimeout(() => this.loadJitsi(roomName, userName), 0);
      },
      error: (err: any) => {
        const msg = err?.error?.message ?? err?.error?.Message ?? 'Live class এ যোগ দেওয়া যায়নি।';
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

  endClass() {
    if (!confirm('Live class শেষ করবে?')) return;
    this.svc.end(this.classId()).subscribe({
      next: () => this.router.navigateByUrl('/teacher'),
      error: () => {}
    });
  }

  ngOnDestroy() {
    if (this.jitsiApi) {
      this.jitsiApi.dispose();
      this.jitsiApi = null;
    }
  }
}