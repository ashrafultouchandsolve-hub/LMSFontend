import { Injectable, signal } from '@angular/core';

export interface ConfirmOptions {
  /** Big line under the icon. Falls back to a bilingual "Are you sure?". */
  title?: string;
  /** Body text — what exactly is about to happen. */
  message: string;
  /** Confirm button label (default: Confirm / নিশ্চিত করুন). */
  confirmText?: string;
  /** Cancel button label (default: Cancel / বাতিল). */
  cancelText?: string;
  /** danger = red destructive styling (deletes); primary = brand blue. */
  tone?: 'primary' | 'danger';
  /** Emoji shown in the icon bubble (default 🗑️ for danger, ❓ for primary). */
  icon?: string;
}

/**
 * Promise-based replacement for window.confirm() — one fancy dialog for the
 * whole app. The ConfirmDialog component (rendered once in the App root)
 * displays whatever this service holds.
 *
 *   if (!(await this.confirmDialog.confirm({ message: 'Delete this course?', tone: 'danger' }))) return;
 */
@Injectable({ providedIn: 'root' })
export class ConfirmService {
  readonly state = signal<ConfirmOptions | null>(null);
  private resolver: ((value: boolean) => void) | null = null;

  confirm(options: ConfirmOptions | string): Promise<boolean> {
    const opts = typeof options === 'string' ? { message: options } : options;
    // A second dialog while one is open cancels the first — same as native confirm.
    this.resolver?.(false);
    this.state.set({ tone: 'primary', ...opts });
    return new Promise<boolean>((resolve) => (this.resolver = resolve));
  }

  /** Called by the dialog component when the user picks a button / presses Esc. */
  resolve(result: boolean): void {
    this.state.set(null);
    const resolver = this.resolver;
    this.resolver = null;
    resolver?.(result);
  }
}
