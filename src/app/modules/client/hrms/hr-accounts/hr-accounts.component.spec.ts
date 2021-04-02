import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAccountsComponent } from './hr-accounts.component';

describe('HrAccountsComponent', () => {
  let component: HrAccountsComponent;
  let fixture: ComponentFixture<HrAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
