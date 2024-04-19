import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FirebaseService } from '../service/firebase.service';
import { Post } from '../model/post';
@Component({
  selector: 'app-add-posts',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './add-posts.component.html',
  styleUrl: './add-posts.component.css'
})
export class AddPostsComponent {
  constructor(private firebaseService: FirebaseService) { }

  addPost() {
    this.firebaseService.addPost({
      title: "title", message: "message", author: "author",
    })
  }
}
