import { Component, Input } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-first-user',
  templateUrl: './first-user.component.html',
  styleUrl: './first-user.component.scss'
})
export class FirstUserComponent {
  @Input() todo!: Todo
  user?:User

  constructor(private userSvc:UserService){}

  ngOnInit(){
    this.user = this.userSvc.getUserById(this.todo.id)
  }
  }
