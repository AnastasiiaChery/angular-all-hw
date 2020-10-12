  
import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-user.component.html',
  styleUrls: []
})
export class AllUsersComponent implements OnInit {
  users: any[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => {
      this.users = value;
      console.log(this.users);
    });

  }

}