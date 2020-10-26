  
import {Pipe, PipeTransform} from '@angular/core';
import { User } from './user.interface';


@Pipe({
  name: 'adder'
})
export class AdderPipe implements PipeTransform {

  transform(value: User[], ...args: string[]):
    any {
    let newUser = '';
    value.forEach(user => {
      newUser += 
      ` <p>Hello dear ${user.name} ,welcome on our website.</p>
      <p>Your id:  ${user.id} </p>
      <p>Your email: ${user.email}</p>
       <hr>`
    })

    return newUser
  }

  }






