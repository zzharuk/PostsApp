import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostslistComponent } from './postslist/postslist.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: "",
    component: PostslistComponent
  },
  {
    path: "posts/:id",
    component: PostdetailComponent
  },
  {
    path: "**",
    component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
