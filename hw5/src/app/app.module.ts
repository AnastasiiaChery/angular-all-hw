  
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {RouterModule, Routes} from '@angular/router';



const routes: Routes = [
  {path: 'users',  loadChildren: () => import('./module1/user.module').then(m => m.UserModule)
  },
  {path: 'posts',  loadChildren: () => import('./module2/post.module').then(m => m.PostModule)
  },
  {path: 'comments',  loadChildren: () => import('./module3/coment.module').then(m => m.CommentModule)
}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}