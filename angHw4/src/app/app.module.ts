import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/all-users/all-user.components';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { UserPostComponent } from './components/user-post/user-post.component';


const routes: Routes =[
  {path: 'all-users', component: AllUsersComponent, children: [
    {path: 'details/:id', component: UserPostComponent}

  ]}
  

];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    UserPostComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
