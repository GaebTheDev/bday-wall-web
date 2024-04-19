import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FirebaseService } from '../service/firebase.service';
import { Post } from '../model/post';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ButtonModule, CardModule, DialogModule, InputTextModule, FormsModule, InputTextareaModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  constructor(private firebaseService: FirebaseService) {
    firebaseService.getAllPost().subscribe(
      res => { this.posts = res },
      err => { console.log(err) }
    )
  };

  posts: Post[] = [];
  addPostVisible: boolean = false;
  title: String = '';
  author: String = '';
  message: String = '';

  showAddPost() {
    this.addPostVisible = !this.addPostVisible;
    console.log(this.addPostVisible);
  }

  addPost() {
    this.firebaseService.addPost({
      title: this.title.toString(), message: this.message.toString(), author: this.author.toString(),
    })
    this.addPostVisible = !this.addPostVisible;
  }

  deletePost(id: string) {
    this.firebaseService.deletePost(id);
  }
}
