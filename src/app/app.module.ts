import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';

import { PostService } from './services/post.service';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const approutes: Routes = [
  {path: 'posts', component:PostListComponentComponent},
  { path: 'posts/:id', component: PostListItemComponentComponent},
  {path: 'new-post', component:NewPostComponentComponent},
  { path: '', component: PostListComponentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponentComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
