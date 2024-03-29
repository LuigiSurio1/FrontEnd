import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'todoPipe'
})
export class TodoPipePipe implements PipeTransform {

  transform({firstName, lastName}: User): string {
    return `${firstName} ${lastName}`;
  }

}
