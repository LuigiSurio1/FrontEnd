import { Component } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-not-completed',
  templateUrl: './not-completed.component.html',
  styleUrl: './not-completed.component.scss'
})
export class NotCompletedComponent {

  todos:Todo[] = []

  constructor(private todoSvc: TodoService){}

  ngOnInit(){
    this.todos = this.todoSvc.getCheckedTodos(false)
  }
}

