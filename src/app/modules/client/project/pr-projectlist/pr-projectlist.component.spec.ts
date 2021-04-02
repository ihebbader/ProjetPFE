import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrProjectlistComponent } from './pr-projectlist.component';

describe('PrProjectlistComponent', () => {
  let component: PrProjectlistComponent;
  let fixture: ComponentFixture<PrProjectlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrProjectlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrProjectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
