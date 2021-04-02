import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinbarchartComponent } from './minbarchart.component';

describe('MinbarchartComponent', () => {
  let component: MinbarchartComponent;
  let fixture: ComponentFixture<MinbarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinbarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
