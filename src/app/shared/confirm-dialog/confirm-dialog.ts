import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { ConfirmService } from '../../Service/confirm.service';
import { LanguageService } from '../../Service/language.service';

/**
 * The single global confirmation dialog — rendered once in the App root and
 * driven entirely by ConfirmService. Replaces every window.confirm() with a
 * branded modal (backdrop blur, pop animation, danger/primary tones).
 */
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialog {
  protected readonly svc = inject(ConfirmService);
  protected readonly lang = inject(LanguageService);

  protected get title(): string {
    return this.svc.state()?.title ?? (this.lang.isBangla() ? 'আপনি কি নিশ্চিত?' : 'Are you sure?');
  }

  protected get icon(): string {
    const s = this.svc.state();
    return s?.icon ?? (s?.tone === 'danger' ? '🗑️' : '❓');
  }

  protected get confirmText(): string {
    return this.svc.state()?.confirmText ?? (this.lang.isBangla() ? 'নিশ্চিত করুন' : 'Confirm');
  }

  protected get cancelText(): string {
    return this.svc.state()?.cancelText ?? (this.lang.isBangla() ? 'বাতিল' : 'Cancel');
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.svc.state()) this.svc.resolve(false);
  }
}
