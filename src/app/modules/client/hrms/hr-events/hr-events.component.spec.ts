import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrEventsComponent } from './hr-events.component';

describe('HrEventsComponent', () => {
  let component: HrEventsComponent;
  let fixture: ComponentFixture<HrEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
