import { Component, Input } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-first-todo',
  templateUrl: './first-todo.component.html',
  styleUrl: './first-todo.component.scss'
})
export class FirstTodoComponent {
  @Input() todo!: Todo
  user?:User

  constructor(private userSvc:UserService){}

  ngOnInit(){
    this.user = this.userSvc.getUserById(this.todo.id)
  }
}




