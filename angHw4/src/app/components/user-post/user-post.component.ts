import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-post.component.html',
  styleUrls: []
})
export class UserPostComponent implements OnInit {

  post;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute, private userService: UserService) {
      this.activatedRoute.queryParams.subscribe((param) => {
      console.log(+Object.values(param));
      this.userService.getPostById(+Object.values(param)).subscribe( value => this.post = value)
    console.log(this.post)
    });
  
  }
  


  ngOnInit(): void {
  }

}