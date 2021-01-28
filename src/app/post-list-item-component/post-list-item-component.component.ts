import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';
import { title } from 'process';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLikes: number;
  @Input() currentDate: string;
  @Input() postIndex: number;

  //currentDate = new Date();

  //postTitle = title;
  //postContent = content;

  //title = "Mon premier post";
  //content = "Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. ";

  constructor(private postService: PostService) { }

  onUpLikes(){
    //this.postLikes++;
    this.postService.upLikes(this.postIndex);
  }

  onDownLikes(){
    //this.postLikes--;
    this.postService.downLikes(this.postIndex);
  }

  ngOnInit(): void {
  }

  removePost(){
    console.log("post supprimé  !");
  }

}
