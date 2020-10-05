import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/all-users/all-user.components';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';


const routes: Routes =[
  {path: 'all-users', component: AllUsersComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    
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
