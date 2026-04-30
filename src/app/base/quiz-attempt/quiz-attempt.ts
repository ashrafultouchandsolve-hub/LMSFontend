import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LearningApiService } from '../../Service/learning-api.service';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-quiz-attempt',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz-attempt.html',
  styleUrl: './quiz-attempt.css'
})
export class QuizAttemptComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private api = inject(LearningApiService);
  private authService = inject(AuthService);
  

  lessonId = signal('');
  lessonTitle = signal('');
  userId = signal('');

  quizzes = signal<any[]>([]);
  userAnswers = signal<Record<string, string>>({});

  isLoading = signal(true);
  isSubmitted = signal(false);
  alreadyAttempted = signal(false);
  result = signal<any>(null);

  // Timer — প্রতি quiz এ 30 সেকেন্ড
  timeLeft = signal(0);
  totalTime = signal(0);
  private timerInterval: any;

ngOnInit() {
  const lessonId = this.route.snapshot.paramMap.get('lessonId') ?? '';
  const title = this.route.snapshot.queryParamMap.get('title') ?? '';
  this.lessonId.set(lessonId);
  this.lessonTitle.set(title);

const userId = this.authService.getCurrentUser()?.id ?? '';
this.userId.set(userId);

  this.init();
}

  async init() {
    this.isLoading.set(true);
    try {
      // already attempted check
      const attemptRes = await firstValueFrom(
        this.api.hasAttemptedQuiz(this.lessonId(), this.userId())
      );
      const attempted = (attemptRes as any)?.Data ?? false;

      if (attempted) {
        this.alreadyAttempted.set(true);
        this.isLoading.set(false);
        return;
      }

      // quizzes load
      const res = await firstValueFrom(
        this.api.getQuizzesByLesson(this.lessonId())
      );
      const data = (res as any)?.Data ?? (res as any)?.data ?? [];
      this.quizzes.set(Array.isArray(data) ? data : []);

      // timer set — প্রতি quiz এ 30 সেকেন্ড
      const total = this.quizzes().length * 30;
      this.timeLeft.set(total);
      this.totalTime.set(total);
      this.startTimer();
    } finally {
      this.isLoading.set(false);
    }
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      const left = this.timeLeft() - 1;
      if (left <= 0) {
        this.timeLeft.set(0);
        clearInterval(this.timerInterval);
        if (!this.isSubmitted()) {
          this.submitQuiz();
        }
      } else {
        this.timeLeft.set(left);
      }
    }, 1000);
  }

  selectAnswer(quizId: string, answer: string) {
    if (this.isSubmitted()) return;
    this.userAnswers.update(prev => ({ ...prev, [quizId]: answer }));
  }

  get answeredCount() {
    return Object.keys(this.userAnswers()).length;
  }

  get timerPercent() {
    return (this.timeLeft() / this.totalTime()) * 100;
  }

  get timerColor() {
    const pct = this.timerPercent;
    if (pct > 50) return '#10b981';
    if (pct > 25) return '#f59e0b';
    return '#ef4444';
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

async submitQuiz() {
  if (this.isSubmitted()) return;
  this.isSubmitted.set(true);
  clearInterval(this.timerInterval);

  const answers = this.quizzes().map(q => ({
    quizId: q.id,
    selectedAnswer: this.userAnswers()[q.id] ?? ''
  }));

  try {
    const res = await firstValueFrom(
      this.api.submitQuiz(this.lessonId(), {
        userId: this.userId(),
        answers
      })
    );
    const data = (res as any)?.Data ?? null;
    // result null হলেও empty object দাও যাতে screen দেখায়
    this.result.set(data ?? { score: 0, totalQuestions: this.quizzes().length, results: [] });
  } catch {
    this.result.set({ score: 0, totalQuestions: this.quizzes().length, results: [] });
  }
}

  goBack() {
    clearInterval(this.timerInterval);
    this.router.navigate(['/enrolled-course', this.lessonId()]);
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }
}