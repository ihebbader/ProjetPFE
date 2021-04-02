import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrActivitiesComponent } from './hr-activities.component';

describe('HrActivitiesComponent', () => {
  let component: HrActivitiesComponent;
  let fixture: ComponentFixture<HrActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
