import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WStaticsComponent } from './w-statics.component';

describe('WStaticsComponent', () => {
  let component: WStaticsComponent;
  let fixture: ComponentFixture<WStaticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WStaticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
