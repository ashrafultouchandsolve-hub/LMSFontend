import { Component, inject, signal, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LiveClassService } from '../../Service/live-class-service';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-live-class-room',
  imports: [CommonModule, RouterLink],
  templateUrl: './live-class-room.html',
  styleUrl:    './live-class-room.css',
})
export class LiveClassRoom implements AfterViewInit, OnDestroy {
  @ViewChild('dailyFrame') dailyFrame!: ElementRef<HTMLIFrameElement>;

  private readonly route      = inject(ActivatedRoute);
  private readonly router     = inject(Router);
  private readonly svc        = inject(LiveClassService);
  private readonly authSvc    = inject(AuthService);

  readonly isLoading  = signal(true);
  readonly error      = signal('');
  readonly roomUrl    = signal('');
  readonly title      = signal('');
  readonly isTeacher  = signal(false);
  readonly classId    = signal('');

  ngAfterViewInit() {
    const id = this.route.snapshot.paramMap.get('id')
      ?? this.route.snapshot.queryParamMap.get('id')
      ?? this.route.snapshot.queryParamMap.get('classId')
      ?? '';
    const user = this.authSvc.getCurrentUser() as any;
    this.classId.set(id);
    this.isTeacher.set(user?.role === 1);  // 1 = Teacher

    if (!id) {
      this.error.set('Live class ID পাওয়া যায়নি। নির্দিষ্ট class খুলে আবার চেষ্টা করুন।');
      this.isLoading.set(false);
      return;
    }

    this.svc.join(id).subscribe({
      next: (res) => {
        const url = (res as any).roomUrl ?? (res as any).RoomUrl ?? '';
        const token = (res as any).token ?? (res as any).Token ?? '';
        this.title.set((res as any).title ?? (res as any).Title ?? 'Live Class');

        // Daily.co iframe URL build করো
        const frameUrl = token
          ? `${url}?t=${token}`
          : url;

        this.roomUrl.set(frameUrl);
        this.isLoading.set(false);
      },
      error: (err) => {
        const msg = err?.error?.message ?? err?.error?.Message ?? 'Live class এ যোগ দেওয়া যায়নি।';
        this.error.set(msg);
        this.isLoading.set(false);
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

  ngOnDestroy() {}
}