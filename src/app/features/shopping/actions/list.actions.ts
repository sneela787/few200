import { Action } from '@ngrx/store';

export const ADD_ITEM = '[shopping] add item';
export class ItemAdded implements Action {
  readonly type = ADD_ITEM;
  constructor() { }
}

export type All = ItemAdded;
