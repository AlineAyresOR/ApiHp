import { HomeComponent } from './../home/home.component';
import { CharactersHousesComponent } from './../characters-houses/characters-houses.component';
import { AllCharactersComponent } from './../all-characters/all-characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'all-characters',component:AllCharactersComponent},
  {path:'house-characters',component:CharactersHousesComponent},
  {path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
