import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers/counter.reducer';
import { ApplicationStarted } from './actions/app.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End Web 200 With Angular!!';

  constructor(store: Store<State>) {
    store.dispatch(new ApplicationStarted());
  }
}
