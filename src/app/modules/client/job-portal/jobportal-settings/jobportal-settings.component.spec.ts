import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobportalSettingsComponent } from './jobportal-settings.component';

describe('JobportalSettingsComponent', () => {
  let component: JobportalSettingsComponent;
  let fixture: ComponentFixture<JobportalSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobportalSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobportalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
