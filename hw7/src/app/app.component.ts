  
import {Component, OnInit} from '@angular/core'

import { User } from './user.interface';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 users: any[];

  constructor(private userService: UserService) {

    this.userService.allUsers().subscribe(value => {
      this.users = value;
      console.log(this.users)
    })
  }

  ngOnInit(): void {
  }

}
