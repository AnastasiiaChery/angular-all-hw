import {Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ ]
})
export class AllUsersComponent implements OnInit {

  xxx: any[];

  constructor(private userService: UserService) {

    this.userService.allUsers().subscribe(users => {
      console.log( users)
      this.xxx = users;
    })
  }

  ngOnInit(): void {
  }

}