  
import {Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: []
})
export class AllUsersComponent implements OnInit {
users:any[];

constructor(private userService: UserService){

}
    ngOnInit(): void {
        this.userService.getAllUsers().subscribe(value => this.users=value)
       
    }
  

}