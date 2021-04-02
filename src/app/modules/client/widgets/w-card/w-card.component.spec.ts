import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WCardComponent } from './w-card.component';

describe('WCardComponent', () => {
  let component: WCardComponent;
  let fixture: ComponentFixture<WCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
