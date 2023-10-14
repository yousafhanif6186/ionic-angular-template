import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ISteps } from 'src/app/shared/interfaces/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  steps: ISteps[] = [
    {
      image: '../../../../assets/images/home/banner-desktop.jpg',
      title: 'Step 1:<br class="d-none d-md-block" /> Subscribe',
      description:
        "Select a subscription plan that suits your child's learning needs and preferences.",
    },
    {
      image: '../../../../assets/images/home/banner-desktop.jpg',
      title: 'Step 2:<br class="d-none d-md-block" /> Personalise Your Box',
      description:
        "Tell us about your child's age, interests and learning goals and we'll customize their surprise box accordingly.",
    },
    {
      image: '../../../../assets/images/home/banner-desktop.jpg',
      title:
        'Step 3:<br class="d-none d-md-block" /> Receive Your Surprise Box',
      description:
        'Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials.',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  routeToSubscribe() {
    this.router.navigate(['/subscribe']);
  }
}
