import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {
  postItem;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
        this.postItem = fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(r => r.json())
      .then((post) => {
        this.postItem = post;
      })
    } );
    
  }

  ngOnInit() {
  }

}
