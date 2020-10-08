import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShipsComponent } from './ships/ships.component';
import { ShipMakerComponent } from './ship-maker/ship-maker.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Ships', component: ShipsComponent},
  {path: 'ShipMaker', component: ShipMakerComponent},
  {path: 'About', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
