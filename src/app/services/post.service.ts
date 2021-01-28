import { Subject } from "rxjs";
import { Post } from "../models/post.model";

export class PostService {

    private posts: Post[] = [
        {
            title: 'Mon premier post',
            content: 'Aenean lacinia bibendum nulla sed consectetur.',
            likes: 4,
            currentDate: this.getDate("2019-01-16")
        },
        {
            title: 'Mon deuxième post',
            content: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
            likes: 5,
            currentDate: this.getDate("2019-03-16")
        },
        {
            title: 'Mon troisieme post',
            content: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            likes: 6,
            currentDate: this.getDate("2019-09-16")
        },
        {
            title: 'Mon Quatrieme post',
            content: 'Risus eget urna mollis ornare venenatis dapibus.',
            likes: 7,
            currentDate: this.getDate("2019-06-16")
        }
    ];

    postSubject = new Subject<Post[]>();

    emitPost(){
        this.postSubject.next(this.posts.slice());
    }

    getDate(date){
        return new Date(date);  
    }

    addPost(post: Post){
        this.posts.push(post);
        this.emitPost();
    }

    upLikes(id: number){
        this.posts[id].likes++;
        this.emitPost();
    }

    downLikes(id: number){
        this.posts[id].likes--;
        this.emitPost();
    }


}