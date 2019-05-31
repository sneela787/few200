import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';

export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};


export const selectCounter = (state: State) => state.counter;
export const selectCurrentCount = (state: State) => state.counter.current;
export const selectCountingBy = (state: State) => state.counter.by;
export const selectAtTheStart = createSelector(selectCurrentCount, selectCountingBy, (c, b) => c - b < 0);
export const atTheZero = createSelector(selectCurrentCount, c => c === 0);
