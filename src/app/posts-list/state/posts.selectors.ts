import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { IPosts } from './products.state';

const getPostsState = createFeatureSelector<IPosts>('posts');

export const getPostsList = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostsBtId = createSelector(
  getPostsState,
  (state: any, action:any ) => {
    return state.posts.find((post: any) => post.id === action.id);
  }
);
