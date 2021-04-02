import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFlagsComponent } from './icon-flags.component';

describe('IconFlagsComponent', () => {
  let component: IconFlagsComponent;
  let fixture: ComponentFixture<IconFlagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconFlagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
