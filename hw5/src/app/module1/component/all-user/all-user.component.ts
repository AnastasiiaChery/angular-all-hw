import {Component, OnInit} from '@angular/core';

import { User } from '../../interface/user.interface';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: []
})
export class AllUsersComponent implements OnInit {


    users: User[];

    constructor(private userService: UserService) {
    }
  
    

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe(value => this.users=value)
       
    }
  

}