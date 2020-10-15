import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { User } from '../module1/interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private data: BehaviorSubject<User> = new BehaviorSubject<User>({id: 1000, name: 'vasya', email: 'asd@asd.com'});

  constructor() {
  }

  setValue(obj: User): void {
    this.data.next(obj);
  }

  getUser(): User {
    return this.data.getValue();
  }


}