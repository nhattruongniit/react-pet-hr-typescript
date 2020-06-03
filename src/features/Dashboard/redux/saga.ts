import { call, put, takeEvery } from 'redux-saga/effects';

// types
import { IDashboardTypes } from './types';

// api
import * as api from '../api';
import { fetchTodoSuccess, fetchTodoError } from './actions';

export const fetchTodoSaga = function* () {
  try {
    const todos = yield call(api.fetchTodo);
    yield put(fetchTodoSuccess({ todos }));
  } catch (err) {
    yield put(fetchTodoError());
  }
};

const dashboardSaga = function* () {
  yield takeEvery(IDashboardTypes.FETCH_TODO_REQUEST, fetchTodoSaga);
};

export default dashboardSaga;
