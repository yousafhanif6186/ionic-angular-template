import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeComponent } from './home/home.component';
import { SubscribeStepsComponent } from './subscribe-steps/subscribe-steps.component';

@NgModule({
  declarations: [HomeComponent, SubscribeStepsComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
