import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { LanguageService } from '../../Service/language.service';

@Component({
  selector: 'app-free-class',
  imports: [RouterLink, Navbar],
  templateUrl: './free-class.html',
  styleUrl: './free-class.css',
})
export class FreeClass {
  protected readonly lang = inject(LanguageService);
}
