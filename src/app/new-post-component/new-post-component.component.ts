import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.scss']
})
export class NewPostComponentComponent implements OnInit {

  postForm: FormGroup;

  constructor(private postService: PostService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmitForm() {
    console.warn(this.postForm.value);
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['title'],
      formValue['content'],
      0,
      this.postService.getDate(Date.now())
    );
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }
}
