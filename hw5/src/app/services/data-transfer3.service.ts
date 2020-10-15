import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import { Comment } from '../module3/interface/coment.interface';


@Injectable({
  providedIn: 'root'
})
export class DataTransferService3 {

  private data: BehaviorSubject<Comment> = new BehaviorSubject<Comment>({id: 1, name: 'bla', email: 'bla@bla.com'});

  constructor() {
  }

  setValue(obj: Comment): void {
    this.data.next(obj);
  }

  getComment(): Comment {
    return this.data.getValue();
  }


}