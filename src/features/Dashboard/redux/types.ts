export type ITodo = {
  id: number;
  title: string;
};

export type IDashboardState = {
  todos: ITodo[];
  error?: boolean;
};

export type IDashboardAction = {
  type: string;
  payload: IDashboardState;
};

export enum IDashboardTypes {
  FETCH_TODO_REQUEST = 'APP/FETCH_TODO_REQUEST',
  FETCH_TODO_SUCCESS = 'APP/FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'APP/FETCH_TODO_ERROR',
}
