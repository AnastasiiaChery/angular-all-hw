import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {

    post: any[];

    constructor(private userService: UserService) {
  
      this.userService.allPosts().subscribe(posts => {
          console.log(posts)
         
        this.post = posts;
      })
    }
    

    ngOnInit(): void {
        
    }

}