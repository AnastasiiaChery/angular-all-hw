import { Component, OnInit } from '@angular/core';
import { Comment } from '../../interface/coment.interface';
import { CommentService } from '../../service/coment.service';



@Component({
  selector: 'app-all-coment',
  templateUrl: './all-coment.component.html',
  styleUrls: []
})
export class AllCommentComponent implements OnInit {


    comments: Comment[];

    constructor(private commentService: CommentService) {
    }
  
    

    ngOnInit(): void {
        this.commentService.getAllComment().subscribe(value => this.comments=value)
       
    }
  

}