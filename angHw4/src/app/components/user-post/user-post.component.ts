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
    this.activatedRoute.params.subscribe((param) => {
      console.log(param.id);
      this.userService.getPostById(param.id).subscribe( value => this.post = value)
    console.log(this.post)
    });
   
  }


  ngOnInit(): void {
  }

}