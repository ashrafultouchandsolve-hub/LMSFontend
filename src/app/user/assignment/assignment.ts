import { Component, inject, input } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-assignment',
  imports: [Navbar],
  templateUrl: './assignment.html',
  styleUrl: './assignment.css',
})
export class Assignment {
  /** True when rendered inside the student dashboard shell — hides navbar/page chrome. */
  readonly embedded = input(false);

  protected readonly lang = inject(LanguageService);
}
