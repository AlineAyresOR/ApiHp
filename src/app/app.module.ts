import { CharactersHousesComponent } from './../characters-houses/characters-houses.component';
import { AllCharactersComponent } from './../all-characters/all-characters.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './../home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from 'src/navbar/navbar.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
     NavbarComponent,
     AllCharactersComponent,
     CharactersHousesComponent,


   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
