import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LearningApiService } from '../../Service/learning-api.service';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';
import { environment } from '../../../environments/environments';

interface Instructor {
  id: string;
  fullName: string;
  bio: string | null;
  profileImagePath: string | null;
  facebookLink: string | null;
  youTubeLink: string | null;
  youtubeLink?: string | null;
  courseCount: number;
}

@Component({
  selector: 'app-instructors',
  imports: [CommonModule, RouterLink],
  templateUrl: './instructors.html',
  styleUrl: './instructors.css',
})
export class Instructors implements OnInit {
  private readonly http         = inject(HttpClient);
  private readonly learningApi  = inject(LearningApiService);
  private readonly authService  = inject(AuthService);
  private readonly router       = inject(Router);
  readonly lang                 = inject(LanguageService);

  readonly instructors  = signal<Instructor[]>([]);
  readonly isLoading    = signal(true);
  protected readonly isLoggedIn = signal(false);
  protected readonly userName   = signal('');
  protected readonly userRole   = signal<number | null>(null);
  protected readonly isTeacher   = computed(() => this.userRole() === 1);
  protected readonly userInitial = computed(() => this.userName().charAt(0).toUpperCase());

     readonly  baseUrl = environment.baseUrl;

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((v) => this.isLoggedIn.set(v));
    this.authService.currentUser$.subscribe((user) => {
      if (user?.fullName) this.userName.set(user.fullName);
      this.userRole.set(typeof user?.role === 'number' ? user.role : null);
    });

    const user = this.authService.getCurrentUser();
    if (user) {
      this.userName.set(user.fullName || user.email);
      this.userRole.set(typeof user?.role === 'number' ? user.role : null);
    }

    this.http.get<any>(`${this.baseUrl}/Instructor/all`).subscribe({
      next: (res) => {
        this.instructors.set(res.data ?? []);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  protected logout(): void {
    this.authService.logout();
    this.router.navigate(['/homepage']);
  }

  getImageUrl(path: string | null): string {
    if (!path) return '';
    return this.learningApi.buildDownloadUrl(path);
  }

  getInitial(name: string): string {
    return name?.trim().charAt(0).toUpperCase() || '?';
  }
}