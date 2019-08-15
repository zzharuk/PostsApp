import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postslist-item',
  templateUrl: './postslist-item.component.html',
  styleUrls: ['./postslist-item.component.scss']
})
export class PostslistItemComponent implements OnInit {
  @Input() postItem;
  constructor() { }

  ngOnInit() {
  }

}
