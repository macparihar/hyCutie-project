import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrl: './no-page.component.css'
})
export class NoPageComponent implements OnInit {
  name: string | null = '';
  reason: string = ''; // This will store the user's reason

  constructor(private route: ActivatedRoute,
    private emailService: EmailService ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'] || 'Stranger';
    });
  }

  submitReason(): void {
    const emailMessage = `User ${this.name} chose NO and their reason is: ${this.reason}`;
    this.emailService.sendEmail('your-email@example.com', 'User Feedback: NO', emailMessage);
    console.log('User reason for NO:', this.reason);
  }

}