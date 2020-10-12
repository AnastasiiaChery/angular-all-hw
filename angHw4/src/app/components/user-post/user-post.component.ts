
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
   
    post;
   
   constructor(private router: Router ){
    console.log( this.router.getCurrentNavigation().extras.state)
    this.post= this.router.getCurrentNavigation().extras.state.xxx
      

   }


    ngOnInit(): void {
       
    }

 
 }



