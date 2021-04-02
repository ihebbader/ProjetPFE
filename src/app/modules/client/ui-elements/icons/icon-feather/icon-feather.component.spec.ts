import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFeatherComponent } from './icon-feather.component';

describe('IconFeatherComponent', () => {
  let component: IconFeatherComponent;
  let fixture: ComponentFixture<IconFeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconFeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
