import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AllUsersComponent } from './components/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/post.component';
import { NewComponent } from './services/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent,
      children: [
        {path: 'posts/:id', component: UserComponent},


      ] }
      
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
