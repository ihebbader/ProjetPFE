import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrReportComponent } from './hr-report.component';

describe('HrReportComponent', () => {
  let component: HrReportComponent;
  let fixture: ComponentFixture<HrReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
