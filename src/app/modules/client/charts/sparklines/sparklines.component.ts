import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: string[];
  labels: string[] | number[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

const sparkLineData = [
  47,
  45,
  54,
  38,
  56,
  24,
  65,
  31,
  37,
  39,
  62,
  51,
  35,
  41,
  35,
  27,
  93,
  53,
  61,
  27,
  54,
  43,
  19,
  46
];
@Component({
  selector: 'app-sparklines',
  templateUrl: './sparklines.component.html',
  styleUrls: ['./sparklines.component.scss']
})
export class SparklinesComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartAreaSparkline3Options: Partial<ChartOptions>;
  public commonAreaSparlineOptions: Partial<ChartOptions> = {
    chart: {
      type: "area",
      height: 160,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: "straight"
    },
    fill: {
      type: ['solid', 'gradient'],
      colors: ["#D0E3EE", "#ffffff"],
      opacity: 0.3
    },
    yaxis: {
      min: 0
    }
  };
  constructor() {

    this.chartAreaSparkline3Options = {
      series: [
        {
          name: "chart-big-sparkline",
          data: this.randomizeArray(sparkLineData)
        }
      ],
      title: {
        text: "$135,965",
        offsetX: 0,
        style: {
          fontSize: "24px"
        }
      },
      subtitle: {
        text: "Profits",
        offsetX: 0,
        style: {
          fontSize: "14px"
        }
      }
    };

  }

  ngOnInit(): void {
  }

  public randomizeArray(arg): number[] {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
