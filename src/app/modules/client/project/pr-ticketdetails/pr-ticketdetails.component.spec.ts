import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrTicketdetailsComponent } from './pr-ticketdetails.component';

describe('PrTicketdetailsComponent', () => {
  let component: PrTicketdetailsComponent;
  let fixture: ComponentFixture<PrTicketdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrTicketdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrTicketdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
