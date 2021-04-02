import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WOtherComponent } from './w-other.component';

describe('WOtherComponent', () => {
  let component: WOtherComponent;
  let fixture: ComponentFixture<WOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
