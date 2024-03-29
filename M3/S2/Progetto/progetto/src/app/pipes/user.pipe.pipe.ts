import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPipe'
})
export class UserPipePipe implements PipeTransform {

  transform(value: number, prefisso: string): string {
    return `${prefisso}_${value}`;
  }

}
