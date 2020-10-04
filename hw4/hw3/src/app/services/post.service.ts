import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { IPost } from './post.interface';

@Injectable({
    providedIn: "root"
  })
  export class PostService{
    constructor(private http: HttpClient){}
  
    getPostByUserId(userId:number): Observable<IPost[]>{
        return this.http.get<IPost[]>(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      }
    
  }

