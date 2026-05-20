import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { LearningApiService } from '../../Service/learning-api.service';
import { AuthService } from '../../Service/auth.service';

type StoreItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  imagePath: string | null;
  fileUrl: string | null;
  isAvailable: boolean;
  createdAt: string;
};

@Component({
  selector: 'app-admin-item',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin-item.html',
  styleUrl: './admin-item.css',
})
export class AdminItem implements OnInit {
  protected readonly learningApi = inject(LearningApiService);
  private readonly authService = inject(AuthService);
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly items = signal<StoreItem[]>([]);
  protected readonly searchTerm = signal('');
  protected readonly selectedCategory = signal<string>('');
  protected readonly isLoading = signal(false);
  protected readonly isSaving = signal(false);
  protected readonly isUploadingImage = signal(false);
  protected readonly showModal = signal(false);
  protected readonly editingItemId = signal<string | null>(null);
  protected readonly notice = signal('');
  protected readonly noticeType = signal<'success' | 'error'>('success');

  protected readonly selectedImageFile = signal<File | null>(null);
  protected readonly selectedImagePreview = signal<string | null>(null);
  protected readonly selectedPdfFile = signal<File | null>(null);
  protected readonly selectedPdfName = signal<string | null>(null);

  protected readonly categories = ['Books', 'Materials', 'Resources'];

  protected readonly itemForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(8)]],
    category: ['Books', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    fileUrl: [''],
  });

  protected readonly filteredItems = computed(() => {
    let filtered = this.items();

    // Filter by search term
    const search = this.searchTerm().toLowerCase().trim();
    if (search) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(search) ||
          item.description.toLowerCase().includes(search)
      );
    }

    // Filter by category
    const category = this.selectedCategory();
    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    return filtered;
  });

  ngOnInit(): void {
    void this.loadItems();
  }

  private async loadItems(): Promise<void> {
    this.isLoading.set(true);
    try {
      const response = await this.learningApi.getStoreItems().toPromise();
      if (response?.data) {
        this.items.set(response.data);
      }
    } catch (error) {
      this.setNotice('Failed to load store items.', 'error');
      console.error(error);
    } finally {
      this.isLoading.set(false);
    }
  }

  protected openNewItemModal(): void {
    this.editingItemId.set(null);
    this.itemForm.reset({
      title: '',
      description: '',
      category: 'Books',
      price: 0,
      fileUrl: '',
    });
    this.selectedImageFile.set(null);
    this.selectedImagePreview.set(null);
    this.selectedPdfFile.set(null);
    this.selectedPdfName.set(null);
    this.showModal.set(true);
  }

  protected openEditItemModal(item: StoreItem): void {
    this.editingItemId.set(item.id);
    this.itemForm.patchValue({
      title: item.title,
      description: item.description,
      category: item.category,
      price: item.price,
      fileUrl: item.fileUrl || '',
    });
    if (item.imagePath) {
      this.selectedImagePreview.set(this.learningApi.buildDownloadUrl(item.imagePath));
    }
    this.selectedImageFile.set(null);
    this.selectedPdfFile.set(null);
    this.selectedPdfName.set(null);
    this.showModal.set(true);
  }

  protected closeModal(): void {
    this.showModal.set(false);
    this.selectedImageFile.set(null);
    this.selectedImagePreview.set(null);
    this.selectedPdfFile.set(null);
    this.selectedPdfName.set(null);
    this.itemForm.reset();
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

    this.selectedImageFile.set(file);

    // Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImagePreview.set(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  protected onPdfSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    if (file.type !== 'application/pdf') {
      this.setNotice('Only PDF format is supported.', 'error');
      return;
    }

    if (file.size > 50 * 1024 * 1024) {
      this.setNotice('PDF size must be less than 50MB.', 'error');
      return;
    }

    this.selectedPdfFile.set(file);
    this.selectedPdfName.set(file.name);
  }

  protected async uploadImage(itemId: string): Promise<void> {
    const file = this.selectedImageFile();
    if (!file) return;

    this.isUploadingImage.set(true);
    try {
      const response = await this.learningApi.uploadStoreItemImage(itemId, file).toPromise();
      const imagePath = response?.data?.imagePath || response?.ImagePath || response?.imagePath;

      if (imagePath) {
        const updatedItems = this.items().map((item) =>
          item.id === itemId ? { ...item, imagePath } : item
        );
        this.items.set(updatedItems);
        this.selectedImageFile.set(null);
        this.setNotice('Image uploaded successfully.', 'success');
      }
    } catch (error) {
      this.setNotice('Failed to upload image.', 'error');
      console.error(error);
    } finally {
      this.isUploadingImage.set(false);
    }
  }

  protected async uploadPdf(itemId: string): Promise<void> {
    const file = this.selectedPdfFile();
    if (!file) return;

    this.isUploadingImage.set(true);
    try {
      const response = await this.learningApi.uploadStoreItemPdf(itemId, file).toPromise();
      
      const fileUrl = response?.data?.fileUrl || response?.FileUrl || response?.fileUrl;

      if (fileUrl) {
        const updatedItems = this.items().map((item) =>
          item.id === itemId ? { ...item, fileUrl } : item
        );
        this.items.set(updatedItems);
        this.selectedPdfFile.set(null);
        this.selectedPdfName.set(null);
        this.setNotice('PDF uploaded successfully.', 'success');
      }
    } catch (error) {
      this.setNotice('Failed to upload PDF.', 'error');
      console.error(error);
    } finally {
      this.isUploadingImage.set(false);
    }
  }

  protected async saveItem(): Promise<void> {
    if (this.itemForm.invalid) {
      this.itemForm.markAllAsTouched();
      this.setNotice('Please fill in all required fields.', 'error');
      return;
    }

    this.isSaving.set(true);
    try {
      const dto = {
        title: this.itemForm.value.title || '',
        description: this.itemForm.value.description || '',
        category: this.itemForm.value.category || 'Books',
        price: this.itemForm.value.price || 0,
        fileUrl: this.itemForm.value.fileUrl || '',
      };

      const editingId = this.editingItemId();

      if (editingId) {
        // Update existing item
        await this.learningApi.updateStoreItem(editingId, dto).toPromise();
        
        // If there's a new image, upload it
        if (this.selectedImageFile()) {
          await this.uploadImage(editingId);
        }

        // If there's a new PDF, upload it
        if (this.selectedPdfFile()) {
          await this.uploadPdf(editingId);
        }

        const updatedItems = this.items().map((item) =>
          item.id === editingId ? { ...item, ...dto } : item
        );
        this.items.set(updatedItems);
        this.setNotice('Item updated successfully.', 'success');
      } else {
        // Add new item
        const response = await this.learningApi.addStoreItem(dto).toPromise();
        const itemId = response?.data?.itemId;

        if (itemId) {
          // If there's an image, upload it
          if (this.selectedImageFile()) {
            await this.uploadImage(itemId);
          }

          // If there's a PDF, upload it
          if (this.selectedPdfFile()) {
            await this.uploadPdf(itemId);
          }

          // Add to list
          const newItem: StoreItem = {
            id: itemId,
            ...dto,
            imagePath: null,
            isAvailable: true,
            createdAt: new Date().toISOString(),
          };
          this.items.set([newItem, ...this.items()]);
          this.setNotice('Item added successfully.', 'success');
        }
      }

      this.closeModal();
      void this.loadItems();
    } catch (error) {
      this.setNotice('Failed to save item.', 'error');
      console.error(error);
    } finally {
      this.isSaving.set(false);
    }
  }

  protected async deleteItem(itemId: string): Promise<void> {
    if (!confirm('Are you sure you want to delete this item?')) return;

    this.isSaving.set(true);
    try {
      await this.learningApi.deleteStoreItem(itemId).toPromise();
      this.items.set(this.items().filter((item) => item.id !== itemId));
      this.setNotice('Item deleted successfully.', 'success');
    } catch (error) {
      this.setNotice('Failed to delete item.', 'error');
      console.error(error);
    } finally {
      this.isSaving.set(false);
    }
  }

  protected updateSearchTerm(value: string): void {
    this.searchTerm.set(value);
  }

  protected updateCategory(value: string): void {
    this.selectedCategory.set(value);
  }

  private setNotice(message: string, type: 'success' | 'error'): void {
    this.notice.set(message);
    this.noticeType.set(type);
    setTimeout(() => this.notice.set(''), 4000);
  }
}
