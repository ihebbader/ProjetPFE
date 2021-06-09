import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupeperVisorIHMComponent } from './supeper-visor-ihm.component';

describe('SupeperVisorIHMComponent', () => {
  let component: SupeperVisorIHMComponent;
  let fixture: ComponentFixture<SupeperVisorIHMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupeperVisorIHMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupeperVisorIHMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
