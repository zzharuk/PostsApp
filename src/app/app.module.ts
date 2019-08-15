import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { PostslistComponent } from './postslist/postslist.component';
import { PostslistItemComponent } from './postslist-item/postslist-item.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    PostdetailComponent,
    PostslistComponent,
    PostslistItemComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
