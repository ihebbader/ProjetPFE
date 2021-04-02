import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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
  selector: 'app-pr-taskboard',
  templateUrl: './pr-taskboard.component.html',
  styleUrls: ['./pr-taskboard.component.scss']
})
export class PrTaskboardComponent implements OnInit {
  todo = [
    { title: "Dashbaord", time: "Start: 5 Aug", completetime: "Complete: 15 Aug ", text: "Lorem Ipsum is simply dummy text of the printing and type setting industry." },
    { title: "New project", time: "Start: 6 Aug", completetime: "Complete: 28 Aug ", text: "It is a long established fact that a reader will be distracted." },
    { title: "Feed Details", time: "Start: 5 Aug", completetime: "Complete: 15 Aug ", text: "here are many variations of passages of Lorem Ipsum available,but the majority have suffered." },
  ];

  done = [
    { title: "New Code Update", time: "", completetime: "", text: "Lorem Ipsum is simply dummy text of the printing and type setting industry." },
    { title: "Dashbaord", time: "Start: 5 Aug", completetime: "Complete: 15 Aug ", text: "Lorem Ipsum is simply dummy text of the printing and type setting industry." },
    { title: "Dashbaord", time: "", completetime: "", text: "Lorem Ipsum is simply dummy text of the printing and type setting industry." },
  ];
  completed = [
    { title: "Job title", time: "Start: 5 Aug", completetime: "Complete: 15 Aug ", text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." },
    { title: "Event Done", time: "Start: 6 Aug", completetime: "Complete: 28 Aug ", text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical." },
    { title: "New Code Update", time: "Start: 5 Aug", completetime: "Complete: 15 Aug ", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  ];

  drop(event: CdkDragDrop<string[]>) {
    debugger
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  dpgridTab: boolean;
  dplistTab: boolean = true;
  isCollapsed = false;
  isCollapsed1 = false;
  isCollapsed2 = false;
  cardremove3: boolean = true;
  cardremove2: boolean = true;
  cardremove1: boolean = true;
  isFull1: boolean;
  isFull2: boolean;
  isFull3: boolean;
  modalRef: BsModalRef;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private modalService: BsModalService) {

    this.chartOptions = {
      series: [70],
      chart: {
        height: 150,
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

  CardRemoveTrans(number) {

    if (number == 1) {
      this.cardremove1 = false;
    }
    else if (number == 2) {
      this.cardremove2 = false;
    }
    else if (number == 3) {
      this.cardremove3 = false;
    }
  }
  onTab(number) {
    this.dplistTab = false;
    this.dpgridTab = false;
    if (number == '1') {
      this.dplistTab = true;
    }
    else if (number == '2') {
      this.dpgridTab = true;
    }

  }
  fullScreenSection(number) {
    if (number == 1) {
      if (this.isFull1) {
        this.isFull1 = false;
      }
      else {
        this.isFull1 = true;
      }
    }
    if (number == 2) {
      if (this.isFull2) {
        this.isFull2 = false;
      }
      else {
        this.isFull2 = true;
      }
    }
    if (number == 3) {
      if (this.isFull3) {
        this.isFull3 = false;
      }
      else {
        this.isFull3 = true;
      }
    }
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
