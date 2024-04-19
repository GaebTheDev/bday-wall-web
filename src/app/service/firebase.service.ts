import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore = inject(Firestore);
  bdayPostCollection = collection(this.firestore, 'bdayPost');

  getAllPost(): Observable<Post[]> {
    return collectionData(this.bdayPostCollection,
      { idField: 'id' }) as Observable<Post[]>;
  }

  addPost(post: Post): Observable<string> {
    const promise = addDoc(this.bdayPostCollection, post).then(res => res.id);
    return from(promise);
  }

}
