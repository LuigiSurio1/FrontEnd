import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: number, prefisso: string): string {
    return `${prefisso}_${value}`;
  }

}
