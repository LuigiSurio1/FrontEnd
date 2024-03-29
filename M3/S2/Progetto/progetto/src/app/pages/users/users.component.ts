import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { TodoServiceService } from '../../services/todo.service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
users!: User[]
constructor(private todoSrv: TodoServiceService) { }

ngOnInit(): void {
  this.users = this.todoSrv.mapByUser()

}
}
