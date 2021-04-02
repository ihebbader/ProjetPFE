import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-report',
  templateUrl: './hr-report.component.html',
  styleUrls: ['./hr-report.component.scss']
})
export class HrReportComponent implements OnInit {
  invoiceTab: boolean = true;
  paymentTab: boolean;
  expencesTab: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  onTab(number) {
    this.invoiceTab = false;
    this.paymentTab = false;
    this.expencesTab = false;
    if (number == '1') {
      this.invoiceTab = true;
    }
    else if (number == '2') {
      this.paymentTab = true;
    }
    else if (number == '3') {
      this.expencesTab = true;
    }
  }

}
