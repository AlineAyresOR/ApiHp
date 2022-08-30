

import { AllCharactersComponent } from './../all-characters/all-characters.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './../home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from '../navbar/navbar.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AboutComponent } from '../about/about.component';







@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
     NavbarComponent,
     HomeComponent,
   AllCharactersComponent,


   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,

  ],
  providers: [ HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
