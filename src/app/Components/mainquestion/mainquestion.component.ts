import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mainquestion',
  templateUrl: './mainquestion.component.html',
  styleUrl: './mainquestion.component.css'
})
export class MainquestionComponent implements OnInit{
  name: string | null = '';
  response: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'] || 'No name provided';
    });
  }

   // Function to navigate to the YES page
   onYes(): void {
    this.router.navigate(['/yes'], { queryParams: { name: this.name } });
  }

  // Function to navigate to the NO page
  onNo(): void {
    this.router.navigate(['/no'], { queryParams: { name: this.name } });
  }
  //  // Function to handle YES button click
  //  onYes(): void {
  //   this.response = "Awesome! Let's talk, 🎉";
  // }

  // // Function to handle NO button click
  // onNo(): void {
  //   this.response = "Oh no! 😅 Maybe next time, ";
  // }
}
