export interface TodoListItem {
  description: string;
  completed: boolean;
}

export interface TodoSummary {
  total: number;
  pending: number;
  completed: number;
}
