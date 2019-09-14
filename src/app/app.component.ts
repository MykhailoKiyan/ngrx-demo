import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';


interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  post$: Observable<Post>;

  text: string; // from input val

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.post$ = this.store.select('post');
  }

  editText(): void {
    const action = new PostActions.EditText(this.text);
    this.store.dispatch(action);
  }

  resetPost(): void {
    const action = new PostActions.Reset();
    this.store.dispatch(action);
  }

  upvote(): void {
    const action = new PostActions.Upvote();
    this.store.dispatch(action);
  }

  downvote(): void {
    const action = new PostActions.Downvote();
    this.store.dispatch(action);
  }
}
