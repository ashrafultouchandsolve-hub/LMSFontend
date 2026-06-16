import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PracticeMaterial, PracticeService } from '../../Service/practice.service';
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
        createdAt: m.createdAt ?? m.CreatedAt,
      })));
    } catch {
      this.materials.set([]);
    } finally {
      this.isLoading.set(false);
    }
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
