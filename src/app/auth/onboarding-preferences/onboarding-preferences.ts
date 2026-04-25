import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-preferences',
  templateUrl: './onboarding-preferences.html',
  styleUrl: './onboarding-preferences.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingPreferences {
  private readonly router = inject(Router);

  protected readonly step = signal(1);

  protected readonly selectedSkillLevel = signal('');
  protected readonly selectedGoal = signal('');
  protected readonly selectedLanguage = signal('');
  protected readonly selectedInterests = signal<string[]>([]);

  protected readonly totalSteps = 4;

  protected readonly skillLevelOptions = ['Beginner', 'Intermediate', 'Advanced'];
  protected readonly goalOptions = ['Get a Job', 'Freelancing', 'Skill Upgrade', 'Personal Interest'];
  protected readonly languageOptions = ['English', 'Bangla', 'Both'];
  protected readonly interestOptions = [
    'Programming',
    'Web Development',
    'Mobile App Development',
    'Data Science',
    'AI / Machine Learning',
    'UI/UX Design',
    'Cyber Security',
    'Business / Marketing',
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
    this.router.navigateByUrl('/homepage');
  }
}
