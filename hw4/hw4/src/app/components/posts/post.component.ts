  
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './post.component.html',
  styleUrls: []
})
export class PostComponent implements OnInit {


  @Input()
  user: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}