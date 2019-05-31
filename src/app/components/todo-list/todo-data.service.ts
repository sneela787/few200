import { TodoListItem, TodoSummary } from './models';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export class TodoDataService {

  private data: TodoListItem[] = [
    { description: 'Fix Front Door', completed: false },
    { description: 'Change bathroom lightbulbs', completed: false },
    { description: 'Kill Thistles', completed: true }
  ];

  private todoListSubject = new BehaviorSubject<TodoListItem[]>(this.data);

  getTodoList(): Observable<TodoListItem[]> {
    return this.todoListSubject.asObservable();
  }

  add(what: string) {
    this.data = [{ description: what, completed: false }, ...this.data];
    this.todoListSubject.next(this.data);
  }

  getSummary() {
    return this.todoListSubject.pipe(
      map(list => {
        return {
          total: list.length,
          pending: list.filter(x => !x.completed).length,
          completed: list.filter(x => x.completed).length
        } as TodoSummary;
      })
    );
  }
}
