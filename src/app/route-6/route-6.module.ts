import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route6RoutingModule } from './route-6-routing.module';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';

import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    DynamicDivComponent
  ],
  imports: [
    CommonModule,
    Route6RoutingModule,
    MatButtonModule
  ]
})
export class Route6Module { }
