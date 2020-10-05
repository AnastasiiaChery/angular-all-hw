import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: []
})
export class PostComponent implements OnInit {

@Input()
post:any
constructor(){
    
}

  ngOnInit(): void {
  }

}