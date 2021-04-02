import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialbarChartComponent } from './radialbar-chart.component';

describe('RadialbarChartComponent', () => {
  let component: RadialbarChartComponent;
  let fixture: ComponentFixture<RadialbarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadialbarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialbarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
