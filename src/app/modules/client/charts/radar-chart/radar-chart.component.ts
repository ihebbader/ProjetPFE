import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  colors: string[];
};
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20]
        }
      ],
      chart: {
        height: 250,
        type: "radar"
      },
      colors: ["#5A5278"],
      // title: {
      //   text: "Basic Radar Chart"
      // },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"]
      }
    };
  }

  ngOnInit(): void {
  }

}
