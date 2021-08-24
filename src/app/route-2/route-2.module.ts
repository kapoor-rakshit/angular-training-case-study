import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route2RoutingModule } from './route-2-routing.module';
import { ECommerceComponent } from './e-commerce/e-commerce.component';


@NgModule({
  declarations: [
    ECommerceComponent
  ],
  imports: [
    CommonModule,
    Route2RoutingModule
  ]
})
export class Route2Module { }
