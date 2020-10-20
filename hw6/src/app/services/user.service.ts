import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Post, Posts, User } from '../interface/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  async allUsers(id: number): Promise<User[]> {
    return await this.http.get<User[]>(`http://jsonplaceholder.typicode.com/users/${id}`).toPromise();


  }
  async getPostByUserId(userId: number): Promise<Posts[]>{
    return await this.http.get<Posts[]>(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`).toPromise();
  }
  async  getPostByPostId(id: number):  Promise<Post[]>{
    return this.http.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?id=${id}`).toPromise();
  }

  

}