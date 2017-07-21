import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// jqwidgets
import { jqxBarGaugeComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge';
import { jqxSortableComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxsortable';
import { jqxSliderComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxslider';
import { jqxCheckBoxComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxcheckbox';
import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';

import { AppComponent } from './app.component';
import { RbgSliderComponent } from './rbg-slider/rbg-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    jqxBarGaugeComponent,
    jqxSortableComponent,
    jqxSliderComponent,
    jqxCheckBoxComponent,
    jqxButtonComponent,
    RbgSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
