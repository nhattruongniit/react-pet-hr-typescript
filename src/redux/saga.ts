import { put, takeLatest, all, fork } from 'redux-saga/effects';

// types
import { AppActionTypes } from './types';

// actions
import { setSidebar, setSidebarSuccess } from './actions';

/* watch setSidebar */
const toggleSidebar = function* (action: ReturnType<typeof setSidebar>) {
  yield put(setSidebarSuccess(action.payload.showSidebar));
};

const watchSetSidebar = function* () {
  yield takeLatest(AppActionTypes.SET_SIDEBAR_REQUEST, toggleSidebar);
};

const appSaga = function* () {
  yield all([fork(watchSetSidebar)]);
};

export default appSaga;
