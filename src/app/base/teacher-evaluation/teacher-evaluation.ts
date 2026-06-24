import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { CourseTeacher, LearningApiService } from '../../Service/learning-api.service';
import { TeacherEvaluationService } from '../../Service/teacher-evaluation.service';
import { LanguageService } from '../../Service/language.service';
import { Navbar } from '../../shared/navbar/navbar';

type Criterion = 'teachingQuality' | 'subjectKnowledge' | 'clarity' | 'support' | 'overall';
type ErrorKind = '' | 'login' | 'notEnrolled' | 'notCompleted' | 'noTeachers' | 'generic';

type EvalForm = {
  teacher: CourseTeacher;
  teachingQuality: number;
  subjectKnowledge: number;
  clarity: number;
  support: number;
  overall: number;
  comment: string;
  submitting: boolean;
  submitted: boolean;   // already saved (pre-existing or this session)
};

@Component({
  selector: 'app-teacher-evaluation',
  imports: [RouterLink, FormsModule, Navbar],
  templateUrl: './teacher-evaluation.html',
  styleUrl: './teacher-evaluation.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeacherEvaluation {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly learningApi = inject(LearningApiService);
  private readonly evalService = inject(TeacherEvaluationService);
  protected readonly lang = inject(LanguageService);

  protected readonly courseId = signal('');
  protected readonly courseTitle = signal('');
  protected readonly isLoading = signal(true);
  protected readonly errorKind = signal<ErrorKind>('');
  protected readonly forms = signal<EvalForm[]>([]);

  protected readonly stars = [1, 2, 3, 4, 5];
  protected readonly criteria: Criterion[] = ['teachingQuality', 'subjectKnowledge', 'clarity', 'support'];

  constructor() {
    const id = this.route.snapshot.paramMap.get('courseId') ?? '';
    this.courseId.set(id);
    void this.load(id);
  }

  private async load(courseId: string): Promise<void> {
    if (!this.authService.isLoggedIn()) {
      this.errorKind.set('login');
      this.isLoading.set(false);
      return;
    }
    try {
      // Course meta (title + completed flag).
      const coursesRes: any = await firstValueFrom(this.learningApi.getAllCourses());
      const all = Array.isArray(coursesRes?.data) ? coursesRes.data
        : Array.isArray(coursesRes?.Data) ? coursesRes.Data : [];
      const course = all.find((c: any) => c.id === courseId);
      if (!course) { this.errorKind.set('generic'); this.isLoading.set(false); return; }
      this.courseTitle.set(course.title ?? '');
      if (!(course.isCompleted ?? false)) { this.errorKind.set('notCompleted'); this.isLoading.set(false); return; }

      // Must be enrolled.
      const enrolled = await firstValueFrom(this.learningApi.checkMyEnrollment(courseId)).catch(() => false);
      if (!enrolled) { this.errorKind.set('notEnrolled'); this.isLoading.set(false); return; }

      // Teachers of the course + my prior evaluations (to prefill).
      const [teachersRes, mineRes]: any[] = await Promise.all([
        firstValueFrom(this.learningApi.getCourseTeachers(courseId)),
        firstValueFrom(this.evalService.getMine(courseId)).catch(() => ({ data: [] })),
      ]);
      const teachers: CourseTeacher[] = (teachersRes?.data ?? teachersRes?.Data ?? []) as CourseTeacher[];
      if (teachers.length === 0) { this.errorKind.set('noTeachers'); this.isLoading.set(false); return; }

      const mine: any[] = (mineRes?.data ?? mineRes?.Data ?? []);
      const byTeacher = new Map<string, any>(mine.map((m) => [String(m.teacherId), m]));

      this.forms.set(teachers.map((t) => {
        const prev = byTeacher.get(String(t.id));
        return {
          teacher: t,
          teachingQuality: prev?.teachingQuality ?? 0,
          subjectKnowledge: prev?.subjectKnowledge ?? 0,
          clarity: prev?.clarity ?? 0,
          support: prev?.support ?? 0,
          overall: prev?.overall ?? 0,
          comment: prev?.comment ?? '',
          submitting: false,
          submitted: !!prev,
        };
      }));
      this.isLoading.set(false);
    } catch {
      this.errorKind.set('generic');
      this.isLoading.set(false);
    }
  }

  protected score(f: EvalForm, key: Criterion): number {
    return f[key];
  }

  protected setScore(teacherId: string, key: Criterion, value: number): void {
    this.forms.update((list) =>
      list.map((f) => (f.teacher.id === teacherId ? { ...f, [key]: value, submitted: false } : f)));
  }

  protected setComment(teacherId: string, value: string): void {
    this.forms.update((list) =>
      list.map((f) => (f.teacher.id === teacherId ? { ...f, comment: value, submitted: false } : f)));
  }

  protected criterionLabel(key: Criterion): string {
    const t = this.lang.t();
    switch (key) {
      case 'teachingQuality': return t.teTeaching;
      case 'subjectKnowledge': return t.teKnowledge;
      case 'clarity': return t.teClarity;
      case 'support': return t.teSupport;
      case 'overall': return t.teOverall;
    }
  }

  protected isComplete(f: EvalForm): boolean {
    return f.teachingQuality > 0 && f.subjectKnowledge > 0 && f.clarity > 0 && f.support > 0 && f.overall > 0;
  }

  protected async submit(f: EvalForm): Promise<void> {
    if (!this.isComplete(f) || f.submitting) return;
    this.patch(f.teacher.id, { submitting: true });
    try {
      await firstValueFrom(this.evalService.submit({
        courseId: this.courseId(),
        teacherId: f.teacher.id,
        teachingQuality: f.teachingQuality,
        subjectKnowledge: f.subjectKnowledge,
        clarity: f.clarity,
        support: f.support,
        overall: f.overall,
        comment: f.comment ?? '',
      }));
      this.patch(f.teacher.id, { submitting: false, submitted: true });
    } catch {
      this.patch(f.teacher.id, { submitting: false });
    }
  }

  private patch(teacherId: string, changes: Partial<EvalForm>): void {
    this.forms.update((list) =>
      list.map((f) => (f.teacher.id === teacherId ? { ...f, ...changes } : f)));
  }

  protected teacherImg(t: CourseTeacher): string {
    return this.learningApi.buildDownloadUrl(t.profileImagePath ?? '');
  }

  protected initial(name: string): string {
    return (name?.trim().charAt(0) || 'T').toUpperCase();
  }
}
