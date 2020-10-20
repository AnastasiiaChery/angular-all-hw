import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';
import { Post } from './interface/user.interface';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any= {id:0};
  post: any;
  chose: any = [{id:0}];
  title = 'hw6';
  

constructor(private userService: UserService){}
async searchUser(form: NgForm): Promise<void> {
  console.log(form);
  this.user = await this.userService.allUsers(form.controls.id.value);
console.log(this.user)
this.post = await this.userService.getPostByUserId(form.controls.id.value);
console.log(this.post)

}

async searchPost(form: NgForm): Promise<void>  {
  
 this.chose = await this.userService.getPostByPostId(+Object.values(form.value));


    console.log(this.chose)
}


}