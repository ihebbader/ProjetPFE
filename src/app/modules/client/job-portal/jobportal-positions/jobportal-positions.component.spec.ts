import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobportalPositionsComponent } from './jobportal-positions.component';

describe('JobportalPositionsComponent', () => {
  let component: JobportalPositionsComponent;
  let fixture: ComponentFixture<JobportalPositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobportalPositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobportalPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
