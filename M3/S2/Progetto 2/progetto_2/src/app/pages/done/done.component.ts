import { Component } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss'
})
export class DoneComponent {

  todos:Todo[] = []

  constructor(private todoSvc: TodoService){}

  ngOnInit(){
    this.todos = this.todoSvc.getCheckedTodos(true)
  }
}
