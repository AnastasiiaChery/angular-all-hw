import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { PostComponent } from './component/post/post.component';
import { AllPostsComponent } from './component/all-post/all-post.component';
import { PostService } from './service/post.service';
;


const routes: Routes = [
   {
        path: '', component: AllPostsComponent, children: [
      {path: ':id', component: PostComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AllPostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AllPostsComponent
  ],
  providers: [PostService]
})
export class PostModule {
}