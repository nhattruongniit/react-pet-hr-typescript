import { fetchTodoRequest, fetchTodoSuccess, fetchTodoError } from './actions';
import { IDashboardTypes } from './types';

const state = {
  todos: [
    {
      id: 1,
      title: 'truong',
    },
  ],
};

describe('DASHBOARD ACTIONS', () => {
  describe('FETCH TODO FLOW', () => {
    it('SHOULD CREATE ACTION REQUEST', () => {
      const expectedAction = {
        type: IDashboardTypes.FETCH_TODO_REQUEST,
      };
      expect(fetchTodoRequest()).toEqual(expectedAction);
    });

    it('SHOULD CREATE ACTION SUCCESS', () => {
      const expectedAction = {
        type: IDashboardTypes.FETCH_TODO_SUCCESS,
        payload: state,
      };
      expect(fetchTodoSuccess(state)).toEqual(expectedAction);
    });

    it('SHOULD CREATE ACTION ERROR', () => {
      const expectedAction = {
        type: IDashboardTypes.FETCH_TODO_ERROR,
      };
      expect(fetchTodoError()).toEqual(expectedAction);
    });
  });
});
