import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ChartModule } from 'primeng/primeng';
import { NgGridModule } from 'angular2-grid';

import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    DoughnutChartComponent,
    WidgetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    NgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
