
import { HomeComponent } from './../home/home.component';
import { AllCharactersComponent } from './../all-characters/all-characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/about/about.component';

const routes: Routes = [
  {path:'all-characters',component:AllCharactersComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
