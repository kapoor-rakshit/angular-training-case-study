import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route-4-routing.module';
import { TimerV2Component } from './timer-v2/timer-v2.component';
import { TimerV2ClicksComponent } from './timer-v2-clicks/timer-v2-clicks.component';
import { TimerV2ConfigComponent } from './timer-v2-config/timer-v2-config.component';
import { TimerV2LogsComponent } from './timer-v2-logs/timer-v2-logs.component';
import { TimerV2Service } from './timer-v2.service';


@NgModule({
  declarations: [
    TimerV2Component,
    TimerV2ClicksComponent,
    TimerV2ConfigComponent,
    TimerV2LogsComponent
  ],
  imports: [
    CommonModule,
    Route4RoutingModule
  ],
  providers: [TimerV2Service]
})
export class Route4Module { }
