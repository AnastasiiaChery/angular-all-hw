import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw8';
  form: FormGroup;
  selectUserId: FormControl = new FormControl(1, Validators.required);

  users: User[];
  
  userId: any = [{id:0}];
  post: any;
  chose: any = [{id:0}];

  constructor(private userService:UserService) {
    }

  async submitform(form: FormGroup): Promise<void> {
    console.log(form.controls.id.value);
    this.userId = await this.userService.allUsersByID(+Object.values(form.value))
  console.log(this.userId)
  this.post = await this.userService.getPostByUserId(form.controls.id.value);
console.log(this.post)
  }

  async submitpost(form: FormGroup): Promise<void> {
    this.chose = await this.userService.getPostByPostId(+Object.values(form.value));


    console.log(this.chose)
  }

  ngOnInit(): void {
    this.userService.allUsers().subscribe(value => {
      this.users=value;
    })

    this.form = new FormGroup({
      id: this.selectUserId,
    })
  }

}
