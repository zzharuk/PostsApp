import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.scss']
})
export class PostslistComponent implements OnInit {
  postsArr;
  postQueryOffset=0;

  constructor(
    private route: ActivatedRoute,
    private PostsService: PostsService
    ) {
    
    this.PostsService.getPosts({limit:10, start:this.postQueryOffset}).then((post) => {
      this.postQueryOffset+=10;
      this.postsArr = post;
    })
  }
  
  loadMorePosts(){
    this.PostsService.getPosts({limit:10, start:this.postQueryOffset}).then((posts) => {
      this.postQueryOffset+=10;
      posts.forEach( (p) => {
        this.postsArr.push(p);
      })
    })
  }

  ngOnInit() {
    console.log(this.postsArr);
  }

}
