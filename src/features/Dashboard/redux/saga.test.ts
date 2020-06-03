import { testSaga } from 'redux-saga-test-plan';
import { call, put } from 'redux-saga/effects';

// api
import * as api from '../api';

// redux
import { IDashboardTypes } from './types';
import dashboardSaga, { fetchTodoSaga } from './saga';
import { fetchTodoError } from './actions';

describe('DASHBOARD SAGA', () => {
  describe('FETCH TODO FLOW', () => {
    const gen = fetchTodoSaga();

    it('SHOULD YIELD FETCH REQUEST', () => {
      testSaga(dashboardSaga).next().takeEvery(IDashboardTypes.FETCH_TODO_REQUEST, fetchTodoSaga).finish().isDone();
    });

    it('SHOULD YIELD FETCH SUCCESS', () => {
      expect(gen.next().value).toEqual(call(api.fetchTodo));
      expect(gen.next().value).toEqual(
        put({
          type: IDashboardTypes.FETCH_TODO_SUCCESS,
          payload: {
            todos: undefined,
          },
        }),
      );
    });

    it('SHOULD YIELD FETCH ERROR', () => {
      expect(gen.throw('error').value).toEqual(put(fetchTodoError()));
      // testSaga(fetchTodoSaga).next().throw(error).put(fetchTodoError()).finish().isDone(); // way 2
    });
  });
});
