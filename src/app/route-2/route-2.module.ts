import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route2RoutingModule } from './route-2-routing.module';
import { ECommerceComponent } from './e-commerce/e-commerce.component';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    ECommerceComponent
  ],
  imports: [
    CommonModule,
    Route2RoutingModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class Route2Module { }
