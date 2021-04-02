import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLinesComponent } from './icon-lines.component';

describe('IconLinesComponent', () => {
  let component: IconLinesComponent;
  let fixture: ComponentFixture<IconLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
