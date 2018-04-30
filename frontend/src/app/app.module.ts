import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpModule } from '@angular/http'

import { ValidateService } from './services/validate.service'
import { AuthService } from './services/auth.service'




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpModule

  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
