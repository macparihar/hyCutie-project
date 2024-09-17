import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string = '';

  constructor(private router: Router) { }
  onSubmit(): void {
    // Check if the name is not provided
    if (!this.name.trim()) {
      alert('Please enter your name before proceeding.');
      return;  // Prevent further execution if name is empty
    }

  
    this.router.navigate(['/main-question'], { queryParams: { name: this.name } });
  }
}
