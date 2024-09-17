import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private serviceID = 'YOUR_SERVICE_ID';
  private templateID = 'YOUR_TEMPLATE_ID';
  private userID = 'YOUR_USER_ID';

  constructor() { }
  sendEmail(toEmail: string, subject: string, message: string): void {
    const templateParams = {
      to_email: toEmail,
      subject: subject,
      message: message
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.userID)
      .then(response => {
        console.log('Email sent successfully:', response);
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
  }
}

