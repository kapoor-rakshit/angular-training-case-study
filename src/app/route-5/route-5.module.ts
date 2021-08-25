import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route5RoutingModule } from './route-5-routing.module';
import { StudentMarksComponent } from './student-marks/student-marks.component';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { StudentMarksService } from './student-marks.service';

@NgModule({
  declarations: [
    StudentMarksComponent
  ],
  imports: [
    CommonModule,
    Route5RoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule
  ],
  providers:[StudentMarksService]
})
export class Route5Module { }
