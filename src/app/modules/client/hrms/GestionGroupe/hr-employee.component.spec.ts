import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrEmployeeComponent } from './hr-employee.component';

describe('HrEmployeeComponent', () => {
  let component: HrEmployeeComponent;
  let fixture: ComponentFixture<HrEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
