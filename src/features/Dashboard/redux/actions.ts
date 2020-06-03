import { IDashboardTypes, IDashboardState } from './types';

export const fetchTodoRequest = () => ({
  type: IDashboardTypes.FETCH_TODO_REQUEST,
});

export const fetchTodoSuccess = ({ todos }: IDashboardState) => {
  return {
    type: IDashboardTypes.FETCH_TODO_SUCCESS,
    payload: { todos },
  };
};

export const fetchTodoError = () => ({
  type: IDashboardTypes.FETCH_TODO_ERROR,
});
