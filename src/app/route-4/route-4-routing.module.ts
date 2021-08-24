import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerV2Component } from './timer-v2/timer-v2.component';

const routes: Routes = [
  {path: "", component: TimerV2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route4RoutingModule { }
