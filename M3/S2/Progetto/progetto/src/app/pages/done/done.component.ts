import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../services/todo.service.service';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss',
})
export class DoneComponent implements OnInit{
  todos!: Todo[];
  constructor(private todoSrv: TodoServiceService) {}

  ngOnInit(): void {
    this.todos = this.todoSrv.completed;
  }
}
