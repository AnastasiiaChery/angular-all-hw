import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { AllUsersComponent } from './components/all-users/all-user.components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[{
  path: 'all-user', component: AllUsersComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
