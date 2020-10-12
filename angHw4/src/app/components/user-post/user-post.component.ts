import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/services/post.interface';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: []
})
export class UserPostComponent implements OnInit {
    post: IPost[];

    constructor( private userService: UserService, 
      private activatedRoute: ActivatedRoute) {
  console.log(this.activatedRoute.params.subscribe((param) =>{
    console.log(param.id);
    this.userService.getPostById(param.id).subscribe( value => this.post = value)
    console.log(this.post)
  }))
     
    }

    ngOnInit(): void {
       
    }

 
 }
