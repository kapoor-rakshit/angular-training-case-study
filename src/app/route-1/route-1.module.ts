import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route1RoutingModule } from './route-1-routing.module';
import { FloatingTextComponent } from './floating-text/floating-text.component';


@NgModule({
  declarations: [
    FloatingTextComponent
  ],
  imports: [
    CommonModule,
    Route1RoutingModule
  ]
})
export class Route1Module { }
