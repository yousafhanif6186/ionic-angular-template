import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISteps } from 'src/app/shared/interfaces/home';

@Component({
  selector: 'app-subscribe-steps',
  templateUrl: './subscribe-steps.component.html',
  styleUrls: ['./subscribe-steps.component.scss'],
})
export class SubscribeStepsComponent implements OnInit {
  @Input() steps: ISteps[] | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  routeToSubscribe() {
    this.router.navigate(['/subscribe']);
  }
}
