import {Component, Input, OnInit} from '@angular/core';

import { DataTransferService1 } from 'src/app/services/data-transfer2.service';
import { Post } from '../../interface/post.interface';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: []
})
export class PostComponent implements OnInit {


  @Input()
  post: Post;

  constructor(private dataTransferService: DataTransferService1) {
  }

  ngOnInit(): void {
  }

  choose(post: Post): void {
    
    this.dataTransferService.setValue(post);
    console.log(this.dataTransferService.getPost());
  }
}