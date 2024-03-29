import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'todo'
})
export class TodoPipe implements PipeTransform {

  transform({ firstName, lastName }: User): string {
    return `${firstName} ${lastName}`;
  }
  }

