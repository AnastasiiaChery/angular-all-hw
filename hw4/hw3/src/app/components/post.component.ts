import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost } from '../services/post.interface';
import { PostService } from '../services/post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {

    post: IPost[];

    constructor( private postService: PostService, 
      private activatedRoute: ActivatedRoute) {
  console.log(this.activatedRoute.params.subscribe((param:Params) =>{
    console.log(param.id);
    this.postService.getPostByUserId(param.id).subscribe( value => this.post = value)
    console.log(this.post)
  }))
     
    }
    

    ngOnInit(): void {
        
    }

}