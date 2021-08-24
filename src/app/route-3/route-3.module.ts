import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route-3-routing.module';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    CommonModule,
    Route3RoutingModule
  ]
})
export class Route3Module { }
