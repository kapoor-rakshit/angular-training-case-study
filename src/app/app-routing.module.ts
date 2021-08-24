import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", redirectTo: "/"},
  {path: "floating-text", loadChildren: () => import('./route-1/route-1.module').then(m => m.Route1Module)},
  {path: "e-commerce", loadChildren: () => import('./route-2/route-2.module').then(m => m.Route2Module)},
  {path: "timer-app", loadChildren: () => import('./route-3/route-3.module').then(m => m.Route3Module)},
  {path: "timer-app-v2", loadChildren: () => import('./route-4/route-4.module').then(m => m.Route4Module)},
  {path: "students-marks", loadChildren: () => import('./route-5/route-5.module').then(m => m.Route5Module)},
  {path: "dynamic-div", loadChildren: () => import('./route-6/route-6.module').then(m => m.Route6Module)},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
