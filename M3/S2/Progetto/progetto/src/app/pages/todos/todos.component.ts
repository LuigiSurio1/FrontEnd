import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TodoServiceService } from '../../services/todo.service.service';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnChanges {
  todos!: Todo[]
  @Input() query!: string


  constructor(private todoSrv: TodoServiceService) { }



  ngOnChanges(changes: SimpleChanges): void {
    this.todos = this.todoSrv.filterByQuery(this.query?.toLowerCase() || "")

  }

}
