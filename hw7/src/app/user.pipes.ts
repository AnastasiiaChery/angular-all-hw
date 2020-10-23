  
import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'adder'
})
export class AdderPipe implements PipeTransform {

  transform(value: any, text1: string, text2: string, text3: string, text4: string, ...args: string[]): string {
    const res = text1 +  `${value.name}` + text2 +  text3 + `${value.id}` + text4 + `${value.email}`;
    return res;
  }


  }






