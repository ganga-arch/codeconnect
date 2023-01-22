import { createAction, props } from '@ngrx/store';
import { posts } from './products.state';

export const ADD_POSTS_ACTION = '[POSTS PAGE] add post';

export const addPost = createAction(ADD_POSTS_ACTION, props<{ post: posts }>);
