import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTodoComponent } from './first-todo.component';

describe('FirstTodoComponent', () => {
  let component: FirstTodoComponent;
  let fixture: ComponentFixture<FirstTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
