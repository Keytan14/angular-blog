import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  //@Input() posts: object;

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(){
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) =>{
        this.posts = posts;
      }
    );
  this.postService.emitPost();    
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

  addPost(){

  }
  
}
