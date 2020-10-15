import {Component, Input, OnInit} from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { User } from '../../interface/user.interface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {


  @Input()
  user: User;

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
  }

  choose(user: User): void {
    
    this.dataTransferService.setValue(user);
    console.log(this.dataTransferService.getUser());
  }
}