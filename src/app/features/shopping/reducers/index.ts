export const FEATURE_NAME = 'shoppingFeature';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};


export const selectFeature = createFeatureSelector<State>(FEATURE_NAME);
export const selectListBranch = createSelector(selectFeature, f => f.list);
export const selectAllShoppingItems = fromList.adapter.getSelectors(selectListBranch).selectAll;
