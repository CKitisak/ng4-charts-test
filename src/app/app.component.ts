import { Component } from '@angular/core';
import { jqxBarGaugeComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbargauge';
import { jqxSortableComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxsortable';
import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';
import { jqxChartComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxchart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  values: number[] = [102, 115, 130, 137];

  sampleData: any[] = [
    { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25, Goal: 40 },
    { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Goal: 50 },
    { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25, Goal: 60 },
    { Day: 'Thursday', Running: 20, Swimming: 20, Cycling: 25, Goal: 40 },
    { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25, Goal: 50 },
    { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Goal: 60 },
    { Day: 'Sunday', Running: 20, Swimming: 40, Cycling: 0, Goal: 90 }
  ];

  padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

  titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

  xAxis: any = {
    dataField: 'Day',
    unitInterval: 1,
    tickMarks: {
      visible: true,
      interval: 1,
      color: '#CACACA'
    },
    gridLines: {
      visible: false,
      interval: 1,
      color: '#CACACA'
    },
    labels: {
      angle: -45,
      rotationPoint: 'topright',
      offset: { x: 0, y: -25 }
    }
  };

  valueAxis: any = {
    minValue: 0,
    maxValue: 100,
    unitInterval: 10,
    title: { text: 'Time in minutes' },
    tickMarks: { color: '#CACACA' },
    gridLines: { color: '#CACACA' }
  };

  legendLayout: any = { left: 520, top: 170, width: 300, height: 200, flow: 'vertical' };

  seriesGroups: any[] = [
    {
      type: 'splinearea',
      series: [
        {
          greyScale: false,
          dataField: 'Goal',
          displayText: 'Personal Goal',
          opacity: 0.7
        }
      ]
    },
    {
      type: 'stackedcolumn',
      columnsGapPercent: 50,
      seriesGapPercent: 5,
      series: [
        {
          greyScale: true,
          dataField: 'Running',
          displayText: 'Running',
        },
        {
          greyScale: true,
          dataField: 'Swimming',
          displayText: 'Swimming'
        },
        {
          greyScale: false,
          dataField: 'Cycling',
          displayText: 'Cycling'
        }
      ]
    }
  ];
}
