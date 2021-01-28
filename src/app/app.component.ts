import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


}


/*class Post {

  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(title, content, like ) {
      this.title = title;
      this.content = content;
      this.loveIts = like;
      this.created_at = this.generateDate();
  }

  generateDate(){
    const date = new Date('December 17, 1995 03:24:10');
    return date;
  }

}*/

