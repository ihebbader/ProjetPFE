import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobportalDashboardComponent } from './jobportal-dashboard.component';

describe('JobportalDashboardComponent', () => {
  let component: JobportalDashboardComponent;
  let fixture: ComponentFixture<JobportalDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobportalDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobportalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
