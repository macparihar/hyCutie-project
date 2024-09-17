import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrl: './no-page.component.css',
})
export class NoPageComponent implements OnInit {
  name: string | null = '';
  reason: string = ''; // This will store the user's reason
  // loading: boolean = false; // To show loading spinner or disable button during sending
  // errorMessage: string = ''; // To show error message

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.name = params['name'] || 'Stranger';
    });
  }

  submitReason(): void {
    if (this.reason.trim()) {
      this.emailService.sendEmail(this.name || 'User', this.reason)
    } else {
      console.error('Reason cannot be empty');
    }
  }
}
