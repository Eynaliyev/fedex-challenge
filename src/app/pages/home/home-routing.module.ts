import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
