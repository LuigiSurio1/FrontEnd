import { Component, Input } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoServiceService } from '../../services/todo.service.service';

@Component({
  selector: 'app-one-todo',
  templateUrl: './one-todo.component.html',
  styleUrl: './one-todo.component.scss'
})
export class OneTodoComponent {
  @Input() todo!: Todo
  constructor(private todoSrv: TodoServiceService) {}
  toggleTask(id: number) {
    this.todoSrv.toggleCompletion(id)
}
}
