import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrHolidaysComponent } from './hr-holidays.component';

describe('HrHolidaysComponent', () => {
  let component: HrHolidaysComponent;
  let fixture: ComponentFixture<HrHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
