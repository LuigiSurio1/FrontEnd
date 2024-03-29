import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { users } from 'src/assets/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: User[] = users

  constructor() { }

  get all(){
    return this.users
  }

  getById(id:number){
    return this.users.find(user => user.id == id)
  }
}


