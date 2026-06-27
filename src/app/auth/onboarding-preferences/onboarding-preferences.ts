import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../Service/service';
import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-onboarding-preferences',
  templateUrl: './onboarding-preferences.html',
  styleUrl: './onboarding-preferences.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingPreferences {
  private readonly router = inject(Router);
  private readonly service = inject(Service);
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
