import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribeRoutingModule } from './subscribe-routing.module';

import { SubscribeComponent } from './subscribe/subscribe.component';
import { TopicsComponent } from './topics/topics.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SubscribeComponent, TopicsComponent],
  imports: [CommonModule, SubscribeRoutingModule, SharedModule],
})
export class SubscribeModule {}
