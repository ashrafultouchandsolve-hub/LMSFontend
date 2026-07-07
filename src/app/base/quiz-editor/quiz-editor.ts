import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { LearningApiService } from '../../Service/learning-api.service';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LanguageService } from '../../Service/language.service';

interface QuizForm {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
  orderIndex: number;
}

@Component({
  selector: 'app-quiz-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './quiz-editor.html',
  styleUrl: './quiz-editor.css'
})
export class QuizEditorComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private authService = inject(AuthService);
  private api = inject(LearningApiService);
  protected readonly lang = inject(LanguageService);


  lessonId = signal('');
  lessonTitle = signal('');
  quizzes = signal<any[]>([]);
  isLoading = signal(false);
  isSaving = signal(false);
  notice = signal('');
  noticeType = signal<'success'|'error'>('success');

  // কতটা quiz field দেখাবে
  quizCount = signal(1);
  maxQuiz = 20;

  forms = signal<QuizForm[]>([this.emptyForm(1)]);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('lessonId') ?? '';
    const title = this.route.snapshot.queryParamMap.get('title') ?? '';
    this.lessonId.set(id);
    this.lessonTitle.set(title);
    this.loadQuizzes();
  }

  emptyForm(order: number): QuizForm {
    return {
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctAnswer: '',
      orderIndex: order
    };
  }

  setQuizCount(count: number) {
    this.quizCount.set(count);
    const current = this.forms();
    const newForms: QuizForm[] = [];
    for (let i = 0; i < count; i++) {
      newForms.push(current[i] ?? this.emptyForm(i + 1));
    }
    this.forms.set(newForms);
  }

  updateForm(index: number, field: keyof QuizForm, value: string) {
    const updated = [...this.forms()];
    (updated[index] as any)[field] = value;
    this.forms.set(updated);
  }

  async loadQuizzes() {
    this.isLoading.set(true);
    try {
      const res = await firstValueFrom(this.api.getQuizzesByLesson(this.lessonId()));
      const data = (res as any)?.Data ?? (res as any)?.data ?? [];
      this.quizzes.set(Array.isArray(data) ? data : []);
    } catch {
      this.quizzes.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  async saveAll() {
    const forms = this.forms();
    for (const form of forms) {
      if (!form.question.trim() || !form.correctAnswer) continue;
      await firstValueFrom(this.api.addQuiz(this.lessonId(), {
        question: form.question,
        optionA: form.optionA,
        optionB: form.optionB,
        optionC: form.optionC,
        optionD: form.optionD,
        correctAnswer: form.correctAnswer,
        orderIndex: form.orderIndex
      }));
    }
    this.showNotice('Quiz saved successfully!', 'success');
    await this.loadQuizzes();
    this.forms.set([this.emptyForm(1)]);
    this.quizCount.set(1);
  }

  async deleteQuiz(id: string) {
    const confirmDelete = confirm('DO you want to delete this quiz?');
    if(confirmDelete){
      await firstValueFrom(this.api.deleteQuiz(id));
      this.showNotice('Quiz Deleted Successfully', 'success');
      await this.loadQuizzes();
    }else{
      return;
    }
    
  }

  showNotice(msg: string, type: 'success'|'error') {
    this.notice.set(msg);
    this.noticeType.set(type);
    setTimeout(() => this.notice.set(''), 3000);
  }

  goBack() {
    // যেখান থেকে এসেছে সেখানেই ফেরত (admin → course-manager, teacher → teacher panel)।
    // Fresh tab-এ history না থাকলে role অনুযায়ী fallback।
    if (window.history.length > 1) {
      this.location.back();
      return;
    }
    const role = this.authService.getCurrentUser()?.role;
    this.router.navigateByUrl(role === 2 ? '/course-manager' : '/teacher');
  }

  get quizCountOptions() {
    return Array.from({ length: this.maxQuiz }, (_, i) => i + 1);
  }
}