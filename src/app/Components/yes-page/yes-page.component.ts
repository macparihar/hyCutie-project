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
    if (this.reason.trim()) {
      this.emailService.sendEmail(this.name || 'User', this.reason)
    } else {
      console.error('Reason cannot be empty');
    }
  }

}