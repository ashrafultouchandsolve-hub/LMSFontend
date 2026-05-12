import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { LearningApiService } from '../../Service/learning-api.service';
import { AuthService } from '../../Service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-teacher-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './teacher-profile.html',
  styleUrl: './teacher-profile.css',
})
export class TeacherProfileComponent implements OnInit {
  private readonly learningApi = inject(LearningApiService);
  private readonly authService = inject(AuthService);
  private readonly fb = inject(NonNullableFormBuilder);

  // Signals for profile state
  protected readonly isLoading = signal(false);
  protected readonly isSaving = signal(false);
  protected readonly isUploadingImage = signal(false);
  protected readonly notice = signal('');
  protected readonly noticeType = signal<'success' | 'error'>('success');
  protected readonly isEditMode = signal(false);

  // Profile data
  protected readonly profileData = signal<any>(null);
  protected readonly profileImagePreview = signal<string | null>(null);
  protected readonly selectedProfileImageFile = signal<File | null>(null);

  // Form
  protected readonly profileForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    bio: [''],
    facebookLink: [''],
    youTubeLink: [''],
  });

  protected readonly currentUser = this.authService.getCurrentUser();

  ngOnInit(): void {
    // Initialize form with current user data
    this.initializeForm();
  }

  private initializeForm(): void {
    if (this.currentUser) {
      this.profileForm.patchValue({
        fullName: this.currentUser.fullName || '',
        email: this.currentUser.email || '',
        bio: '',
        facebookLink: '',
        youTubeLink: '',
      });
      
      // Set profile data from current user
      this.profileData.set({
        id: this.currentUser.id,
        fullName: this.currentUser.fullName,
        email: this.currentUser.email,
        bio: '',
        facebookLink: '',
        youTubeLink: '',
        profileImagePath: null,
      });
    }
  }

  protected toggleEditMode(): void {
    if (this.isEditMode()) {
      this.isEditMode.set(false);
      this.selectedProfileImageFile.set(null);
    } else {
      this.isEditMode.set(true);
    }
  }

  protected onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];

    if (!allowed.includes(file.type)) {
      this.setNotice('Only JPG, PNG, WEBP formats are supported.', 'error');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      this.setNotice('Image size must be less than 5MB.', 'error');
      return;
    }

    this.selectedProfileImageFile.set(file);

    // Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.profileImagePreview.set(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  protected async uploadProfileImage(): Promise<void> {
    const file = this.selectedProfileImageFile();
    if (!file) {
      this.setNotice('No image selected.', 'error');
      return;
    }

    this.isUploadingImage.set(true);
    try {
      const response = await this.learningApi.uploadInstructorProfileImage(file).toPromise();
      
      // Handle different response structures
      const imagePath = response?.data?.imagePath || response?.ImagePath || response?.imagePath;
      
      if (!imagePath) {
        this.setNotice('Failed to upload image: No path returned.', 'error');
        return;
      }
      
      this.profileData.set({
        ...this.profileData(),
        profileImagePath: imagePath,
      });
      this.profileImagePreview.set(this.learningApi.buildDownloadUrl(imagePath));
      this.selectedProfileImageFile.set(null);
      this.setNotice('Profile image updated successfully.', 'success');
    } catch (error) {
      this.setNotice('Failed to upload image.', 'error');
      console.error(error);
    } finally {
      this.isUploadingImage.set(false);
    }
  }

  protected async saveProfile(): Promise<void> {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.setNotice('Please fill in all required fields.', 'error');
      return;
    }

    this.isSaving.set(true);
    try {
      const dto = {
        bio: this.profileForm.value.bio || '',
        facebookLink: this.profileForm.value.facebookLink || '',
        youTubeLink: this.profileForm.value.youTubeLink || '',
      };

      const response = await this.learningApi.updateInstructorProfile(dto).toPromise();
      this.setNotice('Profile updated successfully.', 'success');
      
      // Update profile data
      this.profileData.set({
        ...this.profileData(),
        bio: dto.bio,
        facebookLink: dto.facebookLink,
        youTubeLink: dto.youTubeLink,
      });
      
      this.isEditMode.set(false);
    } catch (error) {
      const errMsg = error instanceof HttpErrorResponse ? error.error?.message : 'Failed to update profile.';
      this.setNotice(errMsg || 'Failed to update profile.', 'error');
      console.error(error);
    } finally {
      this.isSaving.set(false);
    }
  }

  protected cancelEdit(): void {
    this.isEditMode.set(false);
    this.selectedProfileImageFile.set(null);
  }

  private setNotice(message: string, type: 'success' | 'error'): void {
    this.notice.set(message);
    this.noticeType.set(type);
    setTimeout(() => this.notice.set(''), 4000);
  }
}
