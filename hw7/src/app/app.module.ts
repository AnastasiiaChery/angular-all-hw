import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdderPipe } from './user.pipes';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    AdderPipe,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
