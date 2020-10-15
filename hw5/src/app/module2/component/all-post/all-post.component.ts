import { Component, OnInit } from '@angular/core';
import { Post } from '../../interface/post.interface';
import { PostService } from '../../service/post.service';


@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: []
})
export class AllPostsComponent implements OnInit {


    posts: Post[];

    constructor(private postService: PostService) {
    }
  
    

    ngOnInit(): void {
        this.postService.getAllPost().subscribe(value => this.posts=value)
       
    }
  

}