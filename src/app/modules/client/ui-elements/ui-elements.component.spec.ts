import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIELEMENTSComponent } from './ui-elements.component';

describe('UIELEMENTSComponent', () => {
  let component: UIELEMENTSComponent;
  let fixture: ComponentFixture<UIELEMENTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIELEMENTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIELEMENTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
