import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingListItem } from './models';
import { State, selectAllShoppingItems } from './reducers';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  stuff$: Observable<ShoppingListItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.stuff$ = this.store.select(selectAllShoppingItems);
  }

}
