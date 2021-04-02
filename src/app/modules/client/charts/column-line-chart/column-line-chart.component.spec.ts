import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnLineChartComponent } from './column-line-chart.component';

describe('ColumnLineChartComponent', () => {
  let component: ColumnLineChartComponent;
  let fixture: ComponentFixture<ColumnLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
