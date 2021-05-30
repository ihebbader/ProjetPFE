import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Nombre des workflow créer",
          data: [0, 0, 0, 1, 1, 0, 1, 0, 2]
        },
        {
          name: "Nombres des comptes crées",
          data: [1, 0, 1, 0, 0, 0, 0, 0, 0]
        },
        {
          name: "Nombres des workflows terminer",
          data: [0, 0, 0, 0, 1, 0, 1, 0, 0]
        }
      ],
      chart: {
        type: "bar",
        height: 300
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "90%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "Workflow Statistiques"
        }
      },
      fill: {
        type: "fill",
        colors: ["#837D9A", "#A098BF", "#B9ADE3"],
      },
      // tooltip: {
      //   y: {
      //     formatter: function (val) {
      //       return "$ " + val + " thousands";
      //     }
      //   }
      // }
    };
  }

  ngOnInit(): void {
  }

}
