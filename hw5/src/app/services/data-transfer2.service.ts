import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import { Post } from '../module2/interface/post.interface';


@Injectable({
  providedIn: 'root'
})
export class DataTransferService1 {

  private data: BehaviorSubject<Post> = new BehaviorSubject<Post>({id: 1000, title: 'bla', body: 'bla-bla'});

  constructor() {
  }

  setValue(obj: Post): void {
    this.data.next(obj);
  }

  getPost(): Post {
    return this.data.getValue();
  }


}