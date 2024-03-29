import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../services/todo.service.service';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-corporal',
  templateUrl: './corporal.component.html',
  styleUrl: './corporal.component.scss',
})
export class CorporalComponent implements OnInit{
  todos!: Todo[];
  constructor(private todoSrv: TodoServiceService) {}
  ngOnInit(): void {
    this.todos = this.todoSrv.notCompleted;
  }
}
