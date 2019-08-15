import { Injectable } from '@angular/core';
import { iPost } from '../models/iPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(params: {start: number, limit: number}): Promise<iPost[]> {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${params.limit}&_start=${params.start}`)
      .then(r => r.json())
      .then(posts => posts.map((post) => {
        return post;
      })
    );
  }

  getPost(id): Promise<iPost> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {
      return post;
    })
  }


}
