import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerParentComponent } from './timer-parent/timer-parent.component';

const routes: Routes = [
  {path: "", component: TimerParentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route3RoutingModule { }
