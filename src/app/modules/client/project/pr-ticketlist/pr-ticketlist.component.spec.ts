import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrTicketlistComponent } from './pr-ticketlist.component';

describe('PrTicketlistComponent', () => {
  let component: PrTicketlistComponent;
  let fixture: ComponentFixture<PrTicketlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrTicketlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrTicketlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
