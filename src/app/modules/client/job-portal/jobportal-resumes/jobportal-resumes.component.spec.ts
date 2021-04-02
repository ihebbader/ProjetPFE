import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobportalResumesComponent } from './jobportal-resumes.component';

describe('JobportalResumesComponent', () => {
  let component: JobportalResumesComponent;
  let fixture: ComponentFixture<JobportalResumesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobportalResumesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobportalResumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
