import {
  increment,
  decrement,
  reset,
  customIncrement,
  changeName,
} from './counter.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';

export const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 5,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(changeName, (state, action) => {
    return {
      ...state,
      name: action.value,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
