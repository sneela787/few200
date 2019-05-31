import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectCurrentCount, selectAtTheStart, selectCountingBy, atTheZero } from 'src/app/reducers';
import { Observable } from 'rxjs';
import * as counterActions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  atTheStart$: Observable<boolean>;
  by$: Observable<number>;
  atZero$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCurrentCount);
    this.atTheStart$ = this.store.select(selectAtTheStart);
    this.by$ = this.store.select(selectCountingBy);
    this.atZero$ = this.store.select(atTheZero);
  }

  increment() {
    this.store.dispatch(new counterActions.CountIncremented());
  }

  decrement() {
    this.store.dispatch(new counterActions.CountDecremented());
  }

  reset() {
    this.store.dispatch(new counterActions.CountReset());
  }

  setCountBy(what: number) {
    this.store.dispatch(new counterActions.CountBySet(what));
  }
}
