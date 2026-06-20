import { Component, Input, OnInit, computed, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PracticeMaterial, PracticeService, PracticeType } from '../../Service/practice.service';
import { LanguageService } from '../../Service/language.service';

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
  protected readonly lang = inject(LanguageService);

  protected readonly materials = signal<PracticeMaterial[]>([]);
  protected readonly isLoading = signal(true);

  /** null = show the two gateway cards; otherwise show that section's materials. */
  protected readonly selectedType = signal<PracticeType | null>(null);
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
      const res: any = await firstValueFrom(this.practiceService.getCourseMaterials(this.courseId));
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
    } catch {
      this.materials.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  protected count(type: PracticeType): number {
    return type === 'Board' ? this.boardMaterials().length : this.modelMaterials().length;
  }

  /** Open a section — or show a lock message if it has no materials yet. */
  protected openType(type: PracticeType): void {
    if (this.count(type) === 0) {
      this.lockNotice.set(this.lang.t().pmLockedMsg);
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
      error: () => {},
    });
  }

  protected icon(fileType: string): string {
    return fileType === 'DOC' || fileType === 'DOCX' ? '📘' : '📕';
  }
}
