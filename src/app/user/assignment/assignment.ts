import { Component, inject } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-assignment',
  imports: [Navbar],
  templateUrl: './assignment.html',
  styleUrl: './assignment.css',
})
export class Assignment {
  protected readonly lang = inject(LanguageService);
}
