import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicradarChartComponent } from './basicradar-chart.component';

describe('BasicradarChartComponent', () => {
  let component: BasicradarChartComponent;
  let fixture: ComponentFixture<BasicradarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicradarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicradarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
