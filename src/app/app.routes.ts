import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostsComponent } from './add-posts/add-posts.component';

export const routes: Routes = [
    {
        path: "",
        component: AppComponent,
        children: [
          {
            path: "",
            redirectTo: "posts",
            pathMatch: 'full'
          },
          {
            path: "posts", component: PostsComponent,
          },
          {
            path: "addpost", component: AddPostsComponent,
          },
        ]
      },
];
