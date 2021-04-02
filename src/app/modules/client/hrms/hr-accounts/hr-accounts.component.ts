import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-accounts',
  templateUrl: './hr-accounts.component.html',
  styleUrls: ['./hr-accounts.component.scss']
})
export class HrAccountsComponent implements OnInit {
  expencesTab: boolean;
  paymentTab: boolean;
  invoiceTab: boolean = true;

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
