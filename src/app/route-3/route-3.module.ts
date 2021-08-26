import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route-3-routing.module';
import { TimerComponent } from './timer/timer.component';
import { TimerConfigComponent } from './timer-config/timer-config.component';
import { TimerLogsComponent } from './timer-logs/timer-logs.component';
import { TimerClicksComponent } from './timer-clicks/timer-clicks.component';
import { TimerParentComponent } from './timer-parent/timer-parent.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimerComponent,
    TimerConfigComponent,
    TimerLogsComponent,
    TimerClicksComponent,
    TimerParentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Route3RoutingModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class Route3Module { }
