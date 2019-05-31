import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import * as counterActions from '../actions/counter.actions';

@Injectable()
export class CounterEffects {

  // @Effect({
  //   dispatch: false
  // }) logItAll = this.actions$.pipe(
  //   tap(a => console.log(`Effect got an action of type ${a.type}`))
  // );

  @Effect({ dispatch: false }) saveCountBy$ = this.actions$.pipe(
    ofType(counterActions.SET_COUNT_BY),
    map(a => a as counterActions.CountBySet),
    map(a => a.by.toString()),
    tap(count => localStorage.setItem('count-by', count))
  );

  constructor(private actions$: Actions) { }
}
