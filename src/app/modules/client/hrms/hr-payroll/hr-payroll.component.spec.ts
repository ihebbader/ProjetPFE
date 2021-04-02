import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPayrollComponent } from './hr-payroll.component';

describe('HrPayrollComponent', () => {
  let component: HrPayrollComponent;
  let fixture: ComponentFixture<HrPayrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrPayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
