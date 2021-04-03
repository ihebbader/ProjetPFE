import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChagePasswordComponent } from './chage-password.component';

describe('ChagePasswordComponent', () => {
  let component: ChagePasswordComponent;
  let fixture: ComponentFixture<ChagePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChagePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChagePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
