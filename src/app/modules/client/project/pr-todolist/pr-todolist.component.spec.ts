import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrTodolistComponent } from './pr-todolist.component';

describe('PrTodolistComponent', () => {
  let component: PrTodolistComponent;
  let fixture: ComponentFixture<PrTodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrTodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
