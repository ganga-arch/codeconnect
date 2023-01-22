
import { createReducer, on } from '@ngrx/store';
import { initialState } from './products.state';
import { addPost } from './posts.actions';




const _postsReducer = createReducer(initialState,on(addPost,(state:any,action:any)=>{
    let post = {...action.post};
    post.id = (state.posts.length+1).toString();
    return {
        ...state,
        posts:[...state.post,post]
    }
}))

export function postsReducer(state:any,action:any) {
    return _postsReducer(state,action)
}