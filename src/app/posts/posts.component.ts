import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FirebaseService } from '../service/firebase.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  constructor(private firebaseService: FirebaseService){
    firebaseService.getAllPost().subscribe(
      res => {this.posts = res},
      err => {console.log(err)}
    )
  };

  posts: Post[] = [];
}
