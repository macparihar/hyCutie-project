import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private serviceID = 'service_yks9qyd';
  private templateID = 'template_whmx1as';
  private userID = '2mFhDd4fQB4xgud4H';
  



  constructor() { }
  sendEmail(name: string, reason: string): void {
    const templateParams = {
      from_name: name,
      message: reason,
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

