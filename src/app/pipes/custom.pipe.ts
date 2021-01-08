import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(args[0]=="test"){
    return "test"+value;   // passing arugements
  }
   return "hello"+value;
}
}
