import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route5RoutingModule } from './route-5-routing.module';
import { StudentMarksComponent } from './student-marks/student-marks.component';


@NgModule({
  declarations: [
    StudentMarksComponent
  ],
  imports: [
    CommonModule,
    Route5RoutingModule
  ]
})
export class Route5Module { }
