import { Component } from '@angular/core';
import { jqxBarGaugeComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge';
import { jqxSortableComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxsortable';
import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  values: number[] = [102, 115, 130, 137];
}
