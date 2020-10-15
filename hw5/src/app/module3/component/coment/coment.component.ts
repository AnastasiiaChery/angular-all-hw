import {Component, Input, OnInit} from '@angular/core';
import { DataTransferService3 } from 'src/app/services/data-transfer3.service';


import { Comment } from '../../interface/coment.interface';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: []
})
export class CommentComponent implements OnInit {


  @Input()
  comment: Comment;

  constructor(private dataTransferService: DataTransferService3) {
  }

  ngOnInit(): void {
  }

  choose(comment: Comment): void {
    
    this.dataTransferService.setValue(comment);
    console.log(this.dataTransferService.getComment());
  }
}