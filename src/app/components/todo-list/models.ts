export interface TodoListItem {
  description: string;
  completed: boolean;
}

export interface Summary {
  total: number;
  pending: number;
  completed: number;
}
