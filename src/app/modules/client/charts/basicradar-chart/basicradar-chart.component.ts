import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-basicradar-chart',
  templateUrl: './basicradar-chart.component.html',
  styleUrls: ['./basicradar-chart.component.scss']
})
export class BasicradarChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [70],
      chart: {
        height: 250,
        type: "radialBar",
      },

      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      labels: ["REVENUE"]
    };
  }
  ngOnInit(): void {
  }

}
