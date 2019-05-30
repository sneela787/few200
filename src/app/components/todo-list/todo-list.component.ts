import { Component } from '@angular/core';
import { TodoListItem } from './models';
import { TodoDataService } from './todo-data.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  items: TodoListItem[];

  constructor(private service: TodoDataService) {
    this.items = service.getTodoList();
  }

  markComplete(item: TodoListItem) {
    item.completed = true;
  }

  add(what: string) {
    this.items.unshift({ description: what, completed: false });
  }

  clearCompleted() {
    this.items = this.items.filter(item => item.completed === false);
  }
}
