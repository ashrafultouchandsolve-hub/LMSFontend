import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type LearningTrack = {
  title: string;
  description: string;
  badge: string;
};

type LearningHighlight = {
  title: string;
  description: string;
};

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  protected readonly isLoggedIn = signal(false);
  protected readonly userName = signal('Guest');
  protected readonly userInitial = computed(() => this.userName().charAt(0).toUpperCase());

  protected readonly stats = [
    { value: '350+', label: 'Structured lessons' },
    { value: '42k+', label: 'Active learners' },
    { value: '1.2M+', label: 'Practice submissions' },
  ] as const;

  protected readonly learningTracks: LearningTrack[] = [
    {
      title: 'Web Development Foundations',
      description: 'Build strong fundamentals in HTML, CSS, JavaScript, and modern UI principles.',
      badge: 'Beginner',
    },
    {
      title: 'Angular Application Engineering',
      description: 'Learn components, routing, forms, and architecture patterns used in production apps.',
      badge: 'Intermediate',
    },
    {
      title: 'Capstone Project Labs',
      description: 'Apply your knowledge with guided projects, code reviews, and deployment workflows.',
      badge: 'Advanced',
    },
  ];

  protected readonly highlights: LearningHighlight[] = [
    {
      title: 'Outcome-based curriculum',
      description: 'Follow role-focused modules designed around practical, job-ready outcomes.',
    },
    {
      title: 'Progress and performance analytics',
      description: 'Track completion, assessment scores, and learning consistency in one dashboard.',
    },
    {
      title: 'Mentor-guided growth',
      description: 'Get structured feedback and guidance to accelerate your learning path.',
    },
  ];

  constructor() {
    this.syncAuthState();
  }

  protected logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_logged_in');
    localStorage.removeItem('auth_user_email');
    this.syncAuthState();
  }

  private syncAuthState(): void {
    const token = localStorage.getItem('auth_token');
    const loginFlag = localStorage.getItem('auth_logged_in');
    const email = localStorage.getItem('auth_user_email');

    this.isLoggedIn.set(Boolean(token || loginFlag || email));

    if (email) {
      this.userName.set(this.formatUserName(email));
      return;
    }

    this.userName.set(token ? 'Learner' : 'Guest');
  }

  private formatUserName(email: string): string {
    const prefix = email.split('@')[0]?.trim();
    if (!prefix) {
      return 'Learner';
    }

    return prefix.charAt(0).toUpperCase() + prefix.slice(1);
  }
}
