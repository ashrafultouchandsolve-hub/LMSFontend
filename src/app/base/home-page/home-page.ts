import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Service/auth.service';

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
export class HomePage implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly isLoggedIn = signal(false);
  protected readonly userName = signal('');
  protected readonly userRole = signal<number | null>(null);
  protected readonly isTeacher = computed(() => this.userRole() === 1);
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

  ngOnInit(): void {
    // Subscribe to auth state changes
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn.set(isLoggedIn);
    });

    this.authService.currentUser$.subscribe((user) => {
      if (user && user.fullName) {
        this.userName.set(user.fullName);
      }

      this.userRole.set(typeof user?.role === 'number' ? user.role : null);
    });

    // Check current state
    const user = this.authService.getCurrentUser();
    if (user) {
      this.userName.set(user.fullName || user.email);
      this.userRole.set(typeof user.role === 'number' ? user.role : null);
    }
  }

  protected logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}

