import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-yes-page',
  templateUrl: './yes-page.component.html',
  styleUrl: './yes-page.component.css'
})
export class YesPageComponent implements OnInit {
  name: string | null = '';
  reason: string  = '';

  constructor(private route: ActivatedRoute,  private emailService: EmailService ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'] || 'Stranger';
    });
  }

  submitReason(): void {
    const emailMessage = `User ${this.name} chose YES and their reason is: ${this.reason}`;
    this.emailService.sendEmail('your-email@example.com', 'User Feedback: YES', emailMessage);
    console.log('User reason for YES:', this.reason);
  }

}