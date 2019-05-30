import { Component, OnInit, Input } from '@angular/core';
import { TodoListItem } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: TodoListItem[];

  constructor() { }

  ngOnInit() {
  }

  markComplete(item: TodoListItem) {

  }

  clearCompleted() {

  }
}
