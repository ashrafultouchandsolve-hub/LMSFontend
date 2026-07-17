import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { retry } from 'rxjs/operators';
import { Service } from '../../Service/service';
import { LanguageService } from '../../Service/language.service';
import { LearningApiService, StudentOnboardingPayload } from '../../Service/learning-api.service';
import { BD_ALL_UPAZILAS, BD_DISTRICTS, BD_UPAZILAS, filterSuggestions } from '../../Service/bd-locations';

@Component({
  selector: 'app-onboarding-preferences',
  imports: [ReactiveFormsModule],
  templateUrl: './onboarding-preferences.html',
  styleUrl: './onboarding-preferences.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingPreferences implements OnInit {
  private readonly router = inject(Router);
  private readonly service = inject(Service);
  private readonly learningApi = inject(LearningApiService);
  protected readonly lang = inject(LanguageService);

  protected readonly step = signal(1);

  protected readonly selectedSkillLevel = signal('');
  protected readonly selectedGoal = signal('');
  protected readonly selectedLanguage = signal('');
  protected readonly selectedInterests = signal<string[]>([]);

  protected readonly totalSteps = 4;

  protected readonly skillLevelOptions = ['Beginner', 'Intermediate', 'Advanced'];
  protected readonly goalOptions = ['Get a Job', 'Freelancing', 'Skill Upgrade', 'Personal Interest'];
  protected readonly languageOptions = ['English', 'Bangla', 'Both'];
  // Keep these labels in sync with INTEREST_TAXONOMY keys in recommendation.service.ts
  // so each selection "catches" all matching courses (academic + skill tracks).
  protected readonly interestOptions = [
    'SSC',
    'HSC',
    'University Admission',
    'Skills & Communication',
    'Programming',
    'Web Development',
    'Mobile App Development',
    'Data Science & AI',
    'UI/UX Design',
    'Cyber Security',
    'Business & Marketing',
  ];

  // ═══════════════════════════════════════════════════════════════════
  // Student info modal (steps 02–04) — registration is step 01, so the
  // modal collects steps 02–04 before the course-preference questions.
  // ═══════════════════════════════════════════════════════════════════

  protected readonly showInfoModal = signal(false);
  /**
   * Gate: the course-preference wizard stays hidden until the profile check
   * resolves — otherwise a fast user could click through preferences (or Tab
   * into them) before the mandatory modal ever appears.
   */
  protected readonly profileChecked = signal(false);
  /** 2 | 3 | 4 — mirrors the step numbering of the signup flow. */
  protected readonly infoStep = signal(2);
  protected readonly isSavingInfo = signal(false);
  protected readonly infoError = signal('');

  protected readonly boardOptions = [
    'Dhaka', 'Barishal', 'Chattogram', 'Cumilla', 'Dinajpur', 'Jashore',
    'Mymensingh', 'Rajshahi', 'Sylhet', 'Madrasah', 'Technical', 'Other',
  ];
  protected readonly sscYearOptions = this.buildSscYears();
  protected readonly genderOptions = ['Male', 'Female', 'Other'] as const;
  protected readonly occupationOptions = ['Service', 'Teacher', 'Business', 'Farmer', 'Expatriate', 'Housewife', 'Other'] as const;
  protected readonly referralOptions = ['Facebook', 'YouTube', 'Google Search', 'From Friend', 'Telegram', 'Teacher', 'Other'] as const;

  // Auto-suggest state for District & Thana/Upazila
  protected readonly districtSuggestions = signal<string[]>([]);
  protected readonly thanaSuggestions = signal<string[]>([]);

  // Optional profile picture
  protected readonly photoPreview = signal<string | null>(null);
  protected readonly photoError = signal('');
  private photoFile: File | null = null;

  protected readonly todayIso = new Date().toISOString().slice(0, 10);

  // [max] on <input type=date> is only a UI hint, not an Angular validator —
  // typed future/absurd dates must be rejected here.
  private readonly dobValidator = (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value ?? '');
    if (!value) return null; // required handles empty
    const date = new Date(value + 'T00:00:00');
    if (Number.isNaN(date.getTime())) return { dobInvalid: true };
    if (value > this.todayIso || date.getFullYear() < 1940) return { dobInvalid: true };
    return null;
  };

  // step 02 — student information
  protected readonly studentInfoForm = new FormGroup({
    fullName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    dateOfBirth: new FormControl('', { nonNullable: true, validators: [Validators.required, (c: AbstractControl) => this.dobValidator(c)] }),
    gender: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    mobileNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[+]?[0-9][0-9\s\-]{6,14}$/)],
    }),
    email: new FormControl({ value: '', disabled: true }, { nonNullable: true }),
  });

  // step 03 — academic information
  protected readonly academicInfoForm = new FormGroup({
    board: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    institution: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    sscExamYear: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    thana: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    district: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
  });

  // step 04 — parent/guardian information + agreements
  protected readonly guardianInfoForm = new FormGroup({
    guardianName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    motherName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    guardianPhone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[+]?[0-9][0-9\s\-]{6,14}$/)],
    }),
    parentEmail: new FormControl('', { nonNullable: true, validators: [Validators.email] }),
    guardianOccupation: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    referralSource: new FormControl('', { nonNullable: true }),
    agreedInfoCorrect: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
    agreedDataStorage: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
    agreedNotifications: new FormControl(false, { nonNullable: true }),
  });

  ngOnInit(): void {
    // Show the modal only while the student hasn't completed it yet — a refresh
    // mid-flow brings it back, an already-completed profile skips straight to
    // the course-preference steps. Transient failures (cold backend, network
    // blip) get retried so a single hiccup can't silently skip the mandatory
    // modal; login.ts also re-routes incomplete students back here.
    this.learningApi
      .getMyStudentProfile()
      .pipe(retry({ count: 2, delay: 1500 }))
      .subscribe({
        next: (res) => {
          this.profileChecked.set(true);
          const data = res?.data ?? res?.Data;
          if (!data || data.profileInfoCompletedAt) return;

          this.studentInfoForm.patchValue({
            fullName: data.fullName ?? '',
            mobileNumber: data.mobileNumber ?? data.phone ?? '',
            email: data.email ?? '',
          });
          this.showInfoModal.set(true);
        },
        // Retries exhausted (or not a student) → never block the preference flow.
        error: () => this.profileChecked.set(true),
      });
  }

  private buildSscYears(): string[] {
    const current = new Date().getFullYear();
    const years: string[] = [];
    for (let year = current + 4; year >= current - 8; year -= 1) years.push(String(year));
    return years;
  }

  // ── modal option pickers ──
  protected pickGender(value: string): void {
    this.studentInfoForm.controls.gender.setValue(value);
    this.studentInfoForm.controls.gender.markAsTouched();
  }

  protected pickOccupation(value: string): void {
    this.guardianInfoForm.controls.guardianOccupation.setValue(value);
    this.guardianInfoForm.controls.guardianOccupation.markAsTouched();
  }

  protected pickReferral(value: string): void {
    const control = this.guardianInfoForm.controls.referralSource;
    control.setValue(control.value === value ? '' : value);
  }

  // Bilingual labels for canonical option values (DB stores the English value).
  protected genderLabel(value: string): string {
    const t = this.lang.t();
    return value === 'Male' ? t.siGenderMale : value === 'Female' ? t.siGenderFemale : t.siGenderOther;
  }

  protected occupationLabel(value: string): string {
    if (!this.lang.isBangla()) return value;
    const bn: Record<string, string> = {
      Service: 'চাকরিজীবী', Teacher: 'শিক্ষক', Business: 'ব্যবসায়ী', Farmer: 'কৃষক',
      Expatriate: 'প্রবাসী', Housewife: 'গৃহিণী', Other: 'অন্যান্য',
    };
    return bn[value] ?? value;
  }

  protected referralLabel(value: string): string {
    if (!this.lang.isBangla()) return value;
    const bn: Record<string, string> = {
      'Facebook': 'ফেসবুক', 'YouTube': 'ইউটিউব', 'Google Search': 'গুগল সার্চ',
      'From Friend': 'বন্ধুর কাছ থেকে', 'Telegram': 'টেলিগ্রাম', 'Teacher': 'শিক্ষক', 'Other': 'অন্যান্য',
    };
    return bn[value] ?? value;
  }

  // ── auto-suggest (district & thana/upazila) ──
  protected onDistrictInput(): void {
    const query = this.academicInfoForm.controls.district.value;
    this.districtSuggestions.set(filterSuggestions(BD_DISTRICTS, query));
  }

  protected onThanaInput(): void {
    const query = this.academicInfoForm.controls.thana.value;
    // A recognised district narrows thana suggestions to its own upazilas.
    const district = this.academicInfoForm.controls.district.value.trim();
    const source = BD_UPAZILAS[district] ?? BD_ALL_UPAZILAS;
    this.thanaSuggestions.set(filterSuggestions(source, query));
  }

  // mousedown (not click) — it fires before the input's blur hides the list.
  protected pickDistrict(value: string): void {
    this.academicInfoForm.controls.district.setValue(value);
    this.districtSuggestions.set([]);
  }

  protected pickThana(value: string): void {
    this.academicInfoForm.controls.thana.setValue(value);
    this.thanaSuggestions.set([]);
  }

  protected hideDistrictSuggestions(): void {
    setTimeout(() => this.districtSuggestions.set([]), 150);
  }

  protected hideThanaSuggestions(): void {
    setTimeout(() => this.thanaSuggestions.set([]), 150);
  }

  // ── profile picture (optional) ──
  protected onPhotoSelected(event: Event): void {
    this.photoError.set('');
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowed.includes(file.type)) {
      this.photoError.set(this.lang.t().siPhotoHint);
      input.value = '';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.photoError.set(this.lang.t().siPhotoHint);
      input.value = '';
      return;
    }

    this.photoFile = file;
    const reader = new FileReader();
    reader.onload = () => this.photoPreview.set(reader.result as string);
    reader.readAsDataURL(file);
  }

  protected removePhoto(): void {
    this.photoFile = null;
    this.photoPreview.set(null);
    this.photoError.set('');
  }

  // ── modal navigation ──
  protected infoStepBack(): void {
    this.infoError.set('');
    this.infoStep.update((value) => Math.max(2, value - 1));
  }

  protected infoStepNext(): void {
    this.infoError.set('');
    const form = this.infoStep() === 2 ? this.studentInfoForm : this.academicInfoForm;
    form.markAllAsTouched();
    if (form.invalid) {
      this.infoError.set(this.lang.t().siFieldRequired);
      return;
    }
    this.infoStep.update((value) => Math.min(4, value + 1));
  }

  protected submitInfoModal(): void {
    if (this.isSavingInfo()) return;

    this.infoError.set('');
    this.guardianInfoForm.markAllAsTouched();

    if (this.guardianInfoForm.invalid) {
      const controls = this.guardianInfoForm.controls;
      const requiredFieldMissing = controls.guardianName.invalid || controls.motherName.invalid
        || controls.guardianPhone.invalid || controls.guardianOccupation.invalid;
      this.infoError.set(
        requiredFieldMissing ? this.lang.t().siFieldRequired
          : controls.parentEmail.invalid ? this.lang.t().registerParentEmailError
          : this.lang.t().siAgreeRequired,
      );
      return;
    }

    const student = this.studentInfoForm.getRawValue();
    const academic = this.academicInfoForm.getRawValue();
    const guardian = this.guardianInfoForm.getRawValue();

    const payload: StudentOnboardingPayload = {
      fullName: student.fullName.trim(),
      dateOfBirth: student.dateOfBirth,
      gender: student.gender,
      mobileNumber: student.mobileNumber.trim(),
      board: academic.board,
      institution: academic.institution.trim(),
      sscExamYear: academic.sscExamYear,
      thana: academic.thana.trim(),
      district: academic.district.trim(),
      guardianName: guardian.guardianName.trim(),
      motherName: guardian.motherName.trim(),
      guardianPhone: guardian.guardianPhone.trim(),
      parentEmail: guardian.parentEmail.trim() || null,
      guardianOccupation: guardian.guardianOccupation,
      referralSource: guardian.referralSource || null,
      agreedInfoCorrect: guardian.agreedInfoCorrect,
      agreedDataStorage: guardian.agreedDataStorage,
      agreedNotifications: guardian.agreedNotifications,
    };

    this.isSavingInfo.set(true);

    this.learningApi.completeStudentOnboarding(payload).subscribe({
      next: () => {
        // Photo is optional — a failed upload never blocks onboarding.
        if (this.photoFile) {
          this.learningApi.uploadStudentProfileImage(this.photoFile).subscribe({
            next: () => this.finishInfoModal(),
            error: () => this.finishInfoModal(),
          });
        } else {
          this.finishInfoModal();
        }
      },
      error: (err) => {
        this.isSavingInfo.set(false);
        const message = err?.error?.message ?? err?.error?.Message;
        this.infoError.set(typeof message === 'string' && message ? message : this.lang.t().siSaveFailed);
      },
    });
  }

  private finishInfoModal(): void {
    this.isSavingInfo.set(false);
    this.showInfoModal.set(false);
  }

  // ═══════════════════════════════════════════════════════════════════
  // Course-preference steps (existing flow)
  // ═══════════════════════════════════════════════════════════════════

  protected skipStep(): void {
    if (this.step() >= this.totalSteps) {
      this.finishOnboarding();
      return;
    }

    this.step.update((value) => value + 1);
  }

  protected selectSkillLevel(value: string): void {
    this.selectedSkillLevel.set(value);
    this.step.update((currentStep) => Math.min(currentStep + 1, this.totalSteps));
  }

  protected selectGoal(value: string): void {
    this.selectedGoal.set(value);
    this.step.update((currentStep) => Math.min(currentStep + 1, this.totalSteps));
  }

  protected selectLanguage(value: string): void {
    this.selectedLanguage.set(value);
    this.step.update((currentStep) => Math.min(currentStep + 1, this.totalSteps));
  }

  protected toggleInterest(value: string): void {
    this.selectedInterests.update((current) => {
      if (current.includes(value)) {
        return current.filter((item) => item !== value);
      }

      return [...current, value];
    });
  }

  protected isInterestSelected(value: string): boolean {
    return this.selectedInterests().includes(value);
  }

  protected finishOnboarding(): void {
    const Payload = {
      skillLevel: this.selectedSkillLevel(),
      goal: this.selectedGoal(),
      Language: this.selectedLanguage(),
      interests: this.selectedInterests(),
    };

    this.service.savePreferences(Payload).subscribe({
      next: () => {
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.error('Error saving preferences:', err);
        // Optionally, show an error message to the user
      },
    });
  }
}
