import { Component, Input, OnInit, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PracticeMaterial, PracticeService, PracticeType } from '../../Service/practice.service';
import { AiWritingService, AiWritingTask } from '../../Service/ai-writing.service';
import { LanguageService } from '../../Service/language.service';
import { apiError } from '../../Service/api-error';

/** Gateway sections: the two practice-material types plus the AI Writing tasks. */
type PracticeSection = PracticeType | 'AiWriting';

@Component({
  selector: 'app-course-practice',
  standalone: true,
  imports: [],
  templateUrl: './course-practice.html',
  styleUrl: './course-practice.css',
})
export class CoursePractice implements OnInit {
  @Input({ required: true }) courseId!: string;

  private readonly practiceService = inject(PracticeService);
  private readonly aiWritingService = inject(AiWritingService);
  private readonly router = inject(Router);
  private readonly toastr = inject(ToastrService);
  protected readonly lang = inject(LanguageService);

  protected readonly materials = signal<PracticeMaterial[]>([]);
  protected readonly aiwTasks = signal<AiWritingTask[]>([]);
  protected readonly isLoading = signal(true);

  /** null = show the gateway cards; otherwise show that section's contents. */
  protected readonly selectedType = signal<PracticeSection | null>(null);
  /** Shown briefly when a student clicks a locked (empty) card. */
  protected readonly lockNotice = signal('');
  private lockTimer?: ReturnType<typeof setTimeout>;

  protected readonly boardMaterials = computed(() => this.materials().filter(m => m.type === 'Board'));
  protected readonly modelMaterials = computed(() => this.materials().filter(m => m.type === 'ModelTest'));

  protected readonly selectedMaterials = computed(() => {
    const t = this.selectedType();
    return t === 'Board' ? this.boardMaterials() : t === 'ModelTest' ? this.modelMaterials() : [];
  });

  ngOnInit(): void {
    void this.load();
  }

  private async load(): Promise<void> {
    this.isLoading.set(true);
    try {
      // Materials and AI-writing tasks load in parallel; either failing empties only itself.
      const [matRes, aiwRes] = await Promise.allSettled([
        firstValueFrom(this.practiceService.getCourseMaterials(this.courseId)),
        firstValueFrom(this.aiWritingService.getCourseTasks(this.courseId)),
      ]);

      if (matRes.status === 'fulfilled') {
        const res: any = matRes.value;
        const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res?.Data) ? res.Data : [];
        this.materials.set(arr.map((m: any) => ({
          id: m.id ?? m.Id,
          title: m.title ?? m.Title ?? '',
          description: m.description ?? m.Description ?? '',
          hasFile: m.hasFile ?? m.HasFile ?? false,
          fileType: (m.fileType ?? m.FileType ?? 'PDF').toUpperCase(),
          type: (m.type ?? m.Type) === 'ModelTest' ? 'ModelTest' : 'Board',
          createdAt: m.createdAt ?? m.CreatedAt,
        })));
      } else {
        this.materials.set([]);
      }

      this.aiwTasks.set(aiwRes.status === 'fulfilled' ? aiwRes.value : []);
    } finally {
      this.isLoading.set(false);
    }
  }

  protected count(type: PracticeSection): number {
    return type === 'Board' ? this.boardMaterials().length
      : type === 'ModelTest' ? this.modelMaterials().length
      : this.aiwTasks().length;
  }

  /** Open a section — or show a lock message if it has nothing yet. */
  protected openType(type: PracticeSection): void {
    if (this.count(type) === 0) {
      this.lockNotice.set(type === 'AiWriting' ? this.lang.t().aiwLockedMsg : this.lang.t().pmLockedMsg);
      clearTimeout(this.lockTimer);
      this.lockTimer = setTimeout(() => this.lockNotice.set(''), 3500);
      return;
    }
    this.lockNotice.set('');
    this.selectedType.set(type);
  }

  protected back(): void {
    this.selectedType.set(null);
  }

  protected open(m: PracticeMaterial): void {
    this.practiceService.viewFile(m.id).subscribe({
      next: (blob) => window.open(URL.createObjectURL(blob), '_blank'),
      error: (e) => this.toastr.error(apiError(e, this.lang.isBangla()
        ? 'ফাইলটি খোলা যায়নি। আবার চেষ্টা করুন।'
        : 'Could not open this file. Please try again.')),
    });
  }

  /** Full-page attempt/result view — one attempt per task, so route rather than inline. */
  protected openAiwTask(t: AiWritingTask): void {
    void this.router.navigate(['/ai-writing', t.id]);
  }

  protected icon(fileType: string): string {
    return fileType === 'DOC' || fileType === 'DOCX' ? '📘' : '📕';
  }
}
