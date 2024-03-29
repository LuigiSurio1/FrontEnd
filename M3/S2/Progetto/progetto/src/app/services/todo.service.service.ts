import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { todos } from "src/assets/todos.json";
import { User } from '../interfaces/user';
import { UserServiceService } from './user.service.service';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  todos: Todo[] = todos;
  constructor(private userSrv: UserServiceService) {
    this.populate();
  }

  get all(): Todo[] {
    return this.todos;
  }
  get completed(): Todo[] {
    return this.todos.filter((todo) => todo.completed);
  }
  get notCompleted(): Todo[] {
    return this.todos.filter((todo) => !todo.completed);
  }
  filterByQuery(query: string) {
    return this.todos.filter((todo) => {
      console.log(todo.user);

      return (
        todo.user?.firstName.toLowerCase().includes(query) ||
        todo.user?.lastName.toLowerCase().includes(query)
      );
    });
  }
  populate() {
    this.todos.forEach((todo) => {
      todo.user = this.userSrv.getById(todo.userId);
    });
  }
  toggleCompletion(id: number) {
    const found = this.todos.find((todo) => todo.id == id);
    if (found) {
      found.completed = !found.completed;
    } else alert('404 not found');
  }
  mapByUser(): User[] {
    return this.userSrv.all.map((user) => {
      user.todos = this.all.filter((todo) => todo.userId == user.id);
      return user;
    });
  }
}
