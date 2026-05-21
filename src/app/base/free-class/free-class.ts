import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-free-class',
  imports: [RouterLink, Navbar],
  templateUrl: './free-class.html',
  styleUrl: './free-class.css',
})
export class FreeClass {}
