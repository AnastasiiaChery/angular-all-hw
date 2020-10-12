import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {


  @Input()
  user: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.user);
  }

  ngOnInit(): void {
  }

  showUser(user: any): void {
    console.log(this.user);
    this.router.navigate(['details', this.user.id], {state: {xxx: user}, relativeTo: this.activatedRoute});

  }
}