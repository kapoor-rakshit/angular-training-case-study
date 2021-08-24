import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route-4-routing.module';
import { TimerV2Component } from './timer-v2/timer-v2.component';


@NgModule({
  declarations: [
    TimerV2Component
  ],
  imports: [
    CommonModule,
    Route4RoutingModule
  ]
})
export class Route4Module { }
