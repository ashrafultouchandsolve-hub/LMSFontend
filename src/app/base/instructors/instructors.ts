import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LearningApiService } from '../../Service/learning-api.service';
import { environment } from '../../../environments/environments';

interface Instructor {
  id: string;
  fullName: string;
  bio: string | null;
  profileImagePath: string | null;
  facebookLink: string | null;
  youTubeLink: string | null;
  courseCount: number;
}

@Component({
  selector: 'app-instructors',
  imports: [CommonModule],
  templateUrl: './instructors.html',
  styleUrl: './instructors.css',
})
export class Instructors implements OnInit {
  private readonly http         = inject(HttpClient);
  private readonly learningApi  = inject(LearningApiService);

  readonly instructors  = signal<Instructor[]>([]);
  readonly isLoading    = signal(true);

     readonly  baseUrl = environment.baseUrl;

  ngOnInit() {
    this.http.get<any>(`${this.baseUrl}/Instructor/all`).subscribe({
      next: (res) => {
        this.instructors.set(res.data ?? []);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  getImageUrl(path: string | null): string {
    if (!path) return '';
    return this.learningApi.buildDownloadUrl(path);
  }

  getInitial(name: string): string {
    return name?.trim().charAt(0).toUpperCase() || '?';
  }
}