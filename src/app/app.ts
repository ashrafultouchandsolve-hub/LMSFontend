import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnnouncementBanner } from './admin/announcement-banner/announcement-banner';
import { ConfirmDialog } from './shared/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnnouncementBanner, ConfirmDialog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learningTandS');
}
