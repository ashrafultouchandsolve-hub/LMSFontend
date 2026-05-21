import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LearningApiService } from '../../Service/learning-api.service';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Navbar } from '../../shared/navbar/navbar';

type QuizItem = {
  id: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
};

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
  private toastr = inject(ToastrService);

  lessonId = signal('');
  courseId = signal('');
  lessonTitle = signal('');
  userId = signal('');

  quizzes = signal<QuizItem[]>([]);
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
  const courseId = this.route.snapshot.queryParamMap.get('courseId') ?? '';
  this.lessonId.set(lessonId);
  this.lessonTitle.set(title);
  this.courseId.set(courseId);

const userId = this.authService.getCurrentUser()?.id ?? '';
this.userId.set(String(userId));

  this.init();
}

  async init() {
    this.isLoading.set(true);
    try {
      // Check if already attempted using the proper endpoint
      const attemptRes = await firstValueFrom(
        this.api.hasAttemptedQuiz(this.lessonId(), this.userId())
      );
      const attempted = (attemptRes as any)?.data ?? false;

      if (attempted) {
        // Already attempted - show locked screen
        this.alreadyAttempted.set(true);
        this.isLoading.set(false);
        this.toastr.warning('এই পাঠ এর quiz আপনি ইতিমধ্যে সম্পন্ন করেছেন।');
        return;
      }

      // Not attempted - load new quiz
      const res = await firstValueFrom(
        this.api.getQuizzesByLesson(this.lessonId())
      );
      const data = (res as any)?.Data ?? (res as any)?.data ?? [];
      const normalized = Array.isArray(data)
        ? data.map((rawQuiz) => this.normalizeQuiz(rawQuiz)).filter((quiz) => !!quiz.id)
        : [];
      this.quizzes.set(normalized);
      console.log('Quizzes loaded: ' + normalized.length);

      // Timer — প্রতি quiz এ 30 সেকেন্ড
      const total = this.quizzes().length * 30;
      this.timeLeft.set(total);
      this.totalTime.set(total);
      this.startTimer();
    } catch (err) {
      console.error('Error loading quiz:', err);
      this.toastr.error('Quiz load করতে ত্রুটি হয়েছে।');
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
    this.userAnswers.update(prev => ({ ...prev, [quizId]: answer.toUpperCase() }));

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
  // Guard: don't allow submit if already attempted or already submitted
  if (this.isSubmitted() || this.alreadyAttempted()) {
    return;
  }
  
  this.isSubmitted.set(true);
  clearInterval(this.timerInterval);

  const quizCount = this.quizzes().length;

  // Simple answer format: just the key (A/B/C/D)
  const answers = this.quizzes().map((quiz) => {
    const selectedKey = (this.userAnswers()[quiz.id] ?? '').toUpperCase() || '';
    return {
      quizId: quiz.id,
      selectedAnswer: selectedKey
    };
  });

  const payload = { userId: this.userId(), answers };
  console.log('Submitting quiz answers...');

  try {
    const res = await firstValueFrom(
      this.api.submitQuiz(this.lessonId(), payload)
    );
    
    const data = (res as any)?.data ?? null;
    
    // Check if already attempted
    if (data?.alreadyAttempted) {
      // Display previous attempt results
      this.result.set({
        score: data.score,
        totalQuestions: data.totalQuestions,
        results: data.results,
        alreadyAttempted: true
      });
      this.toastr.info(`আপনার আগের স্কোর: ${data.score}/${data.totalQuestions}`);
      return;
    }
    
    // New attempt - calculate score on frontend as fallback
    const correctCount = this.quizzes().reduce((count, quiz) => {
      const userAnswer = (this.userAnswers()[quiz.id] ?? '').toUpperCase();
      const correctAnswer = (quiz.correctAnswer ?? '').toUpperCase();
      return userAnswer === correctAnswer ? count + 1 : count;
    }, 0);

    const clientResults = this.quizzes().map((quiz) => {
      const userAnswer = (this.userAnswers()[quiz.id] ?? '').toUpperCase();
      const correctAnswer = (quiz.correctAnswer ?? '').toUpperCase();
      const isCorrect = userAnswer === correctAnswer;
      return {
        quizId: quiz.id,
        question: quiz.question,
        selectedAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect
      };
    });

    // Use backend score if available and non-zero, otherwise use client calculation
    const finalScore = (data?.score && data.score > 0) ? data.score : correctCount;
    const finalResults = (data?.results && data.results.length > 0) ? data.results : clientResults;
    
    const resultToSet = {
      score: finalScore,
      totalQuestions: quizCount,
      results: finalResults,
      alreadyAttempted: false
    };
    
    this.result.set(resultToSet);
  } catch (err) {
    console.error('Error during submit:', err);
    this.toastr.error('Quiz জমা করতে ত্রুটি হয়েছে। পুনরায় চেষ্টা করুন।');
    
    // Fallback: Calculate score on frontend so user doesn't lose their work
    const correctCount = this.quizzes().reduce((count, quiz) => {
      const userAnswer = (this.userAnswers()[quiz.id] ?? '').toUpperCase();
      const correctAnswer = (quiz.correctAnswer ?? '').toUpperCase();
      return userAnswer === correctAnswer ? count + 1 : count;
    }, 0);

    const clientResults = this.quizzes().map((quiz) => {
      const userAnswer = (this.userAnswers()[quiz.id] ?? '').toUpperCase();
      const correctAnswer = (quiz.correctAnswer ?? '').toUpperCase();
      return {
        quizId: quiz.id,
        question: quiz.question,
        selectedAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: userAnswer === correctAnswer
      };
    });

    this.result.set({
      score: correctCount,
      totalQuestions: quizCount,
      results: clientResults,
      alreadyAttempted: false
    });
  }
}

  goBack() {
    clearInterval(this.timerInterval);
    if (this.courseId()) {
      this.router.navigate(['/enrolled-course', this.courseId()]);
      return;
    }

    this.router.navigate(['/courses']);
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  private normalizeQuiz(rawQuiz: any): QuizItem {
    return {
      id: String(rawQuiz?.id ?? rawQuiz?.Id ?? rawQuiz?.quizId ?? rawQuiz?.QuizId ?? ''),
      question: String(rawQuiz?.question ?? rawQuiz?.Question ?? ''),
      optionA: String(rawQuiz?.optionA ?? rawQuiz?.OptionA ?? ''),
      optionB: String(rawQuiz?.optionB ?? rawQuiz?.OptionB ?? ''),
      optionC: String(rawQuiz?.optionC ?? rawQuiz?.OptionC ?? ''),
      optionD: String(rawQuiz?.optionD ?? rawQuiz?.OptionD ?? ''),
      correctAnswer: String(rawQuiz?.correctAnswer ?? rawQuiz?.CorrectAnswer ?? ''),
    };
  }

  private getOptionText(quiz: QuizItem, optionKey: string): string {
    if (optionKey === 'A') return quiz.optionA;
    if (optionKey === 'B') return quiz.optionB;
    if (optionKey === 'C') return quiz.optionC;
    if (optionKey === 'D') return quiz.optionD;
    return '';
  }

  private shouldSubmitAsText(correctAnswer: string): boolean {
    const normalized = (correctAnswer ?? '').trim().toUpperCase();
    // যদি শুধু A/B/C/D নয়, কিছু অন্য কিছু হয়, তাহলে text হিসেবে পাঠাও
    return normalized !== 'A' && normalized !== 'B' && normalized !== 'C' && normalized !== 'D';
  }
}