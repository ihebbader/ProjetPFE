import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

import { series } from "./series-data";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};
@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        type: "area",
        offsetX: 0,
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      // title: {
      //   text: "Fundamental Analysis of Stocks",
      //   align: "left"
      // },
      // subtitle: {
      //   text: "Price Movements",
      //   align: "left"
      // },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: false
      },

      legend: {
        horizontalAlign: "left"
      }
    };

  }

  ngOnInit(): void {
  }

}
