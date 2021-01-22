import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCu'
})
export class FirstCuPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + " Merci";
    // how to put the first caracter in upercase
  }

}
