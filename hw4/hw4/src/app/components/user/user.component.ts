import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {
  xxx: any[];

  constructor(private userService: UserService) {

    this.userService.getAllUsers().subscribe(users => {
      this.xxx = users;
    })
  }

  ngOnInit(): void {
  }

}