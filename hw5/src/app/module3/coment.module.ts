import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AllCommentComponent } from './component/all-coment/all-coment.component';
import { CommentComponent } from './component/coment/coment.component';
import { CommentService } from './service/coment.service';

const routes: Routes = [
   {
        path: '', component: AllCommentComponent, children: [
      {path: ':id', component: CommentComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AllCommentComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AllCommentComponent
  ],
  providers: [CommentService]
})
export class CommentModule {
}