  
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://jsonplaceholder.typicode.com/users');
  }

  getPOstById(id: number): Observable<any> {
    return this.http.get<any[]>(`http://jsonplaceholder.typicode.com/posts/${id}`);
  }
}