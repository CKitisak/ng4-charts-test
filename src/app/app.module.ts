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
import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';

import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';


// import { jqxScrollBarComponent} from 'jqwidgets-framework/jqwidgets-ts/angular_jqxscrollbar';
// import { jqxMenuComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxmenu';
// import { jqxListBoxComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxlistbox';
// import { jqxDropDownListComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxdropdownlist';
// import { jqxGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxgrid';


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
    jqxChartComponent,
    // jqxScrollBarComponent,
    // jqxMenuComponent,
    // jqxListBoxComponent,
    // jqxDropDownListComponent,
    // jqxGridComponent,
    RbgSliderComponent,

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
