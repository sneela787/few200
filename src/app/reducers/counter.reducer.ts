import { Action } from '@ngrx/store';

export interface State {
  current: number;
}

const initialState: State = {
  current: 10
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
