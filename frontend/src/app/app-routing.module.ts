import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';


//import components
import { LandingComponent } from './components/landing/landing.component'
import { HomeComponent } from './components/home/home.component'

//routes setup
const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'home', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
