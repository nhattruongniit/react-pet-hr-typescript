// types
import { IDashboardTypes, IDashboardState, IDashboardAction } from './types';

export const initialState: IDashboardState = {
  todos: [],
  error: false,
};

const reducers = (state = initialState, { type, payload }: IDashboardAction) => {
  switch (type) {
    case IDashboardTypes.FETCH_TODO_REQUEST:
      return {
        ...state,
      };
    case IDashboardTypes.FETCH_TODO_SUCCESS:
      return {
        ...state,
        todos: payload.todos,
      };
    case IDashboardTypes.FETCH_TODO_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducers;
