import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { MapComponent } from './components/map/map.component';
import { FieldsComponent } from './components/fields/fields.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "tooltip", component: TooltipComponent },
  { path: "map", component: MapComponent },
  { path: "fields", component: FieldsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
