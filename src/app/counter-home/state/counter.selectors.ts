import { ICounterState } from './counter.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getCounterstate = createFeatureSelector<ICounterState>('counter');

export const getCounter = createSelector(
  getCounterstate,
  (state) => state.counter
);

export const getName = createSelector(getCounterstate, (state) => state.name);
