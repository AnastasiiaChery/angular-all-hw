import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {

@Input()
user:any
constructor(){
    
}

  ngOnInit(): void {
  }

}