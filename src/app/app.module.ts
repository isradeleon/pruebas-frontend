import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { MapComponent } from './components/map/map.component';
import { FieldsComponent } from './components/fields/fields.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { PointerComponent } from './single-components/pointer/pointer.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    MapComponent,
    FieldsComponent,
    HomeComponent,
    PointerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
