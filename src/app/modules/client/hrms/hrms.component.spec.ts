import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRMSComponent } from './hrms.component';

describe('HRMSComponent', () => {
  let component: HRMSComponent;
  let fixture: ComponentFixture<HRMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
