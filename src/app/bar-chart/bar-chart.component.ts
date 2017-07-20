import { Component, OnInit, ViewChild } from '@angular/core';
import { UIChart } from 'primeng/components/chart/chart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  data: any;
  // need this !!! for dynamic chart data
  @ViewChild('myBarChart') chart: UIChart;

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: []
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: []
        }
      ]
    }
  }

  ngOnInit() {
    this.updateGraph();
  }

  updateGraph() {
    const val1 = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)
    ];
    const val2 = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)
    ];
    console.log(val1)
    console.log(val2)
    this.data.datasets[0].data = val1;
    this.data.datasets[1].data = val2;

    // need this !!! for dynamic chart data
    this.chart.refresh()
  }
}
