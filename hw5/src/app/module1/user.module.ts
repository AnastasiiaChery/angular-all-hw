import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AllUsersComponent } from './component/all-user/all-user.component';

import { UserService } from './service/user.service';
import { UserComponent } from './component/user/user.component';


const routes: Routes = [
   {
        path: '', component: AllUsersComponent, children: [
      {path: ':id', component: UserComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AllUsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AllUsersComponent
  ],
  providers: [UserService]
})
export class UserModule {
}