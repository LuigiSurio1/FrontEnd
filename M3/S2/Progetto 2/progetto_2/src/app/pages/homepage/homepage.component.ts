import { Todo } from './../../interfaces/todo';
import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  todos:Todo[] = []

  constructor(private todoSvc: TodoService){}

  ngOnInit(){
    this.todos = this.todoSvc.getAllTodos()
  }
}
