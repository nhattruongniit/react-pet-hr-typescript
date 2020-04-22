import { all, fork } from 'redux-saga/effects';

import appSaga from 'redux/saga';

export default function* rootSaga() {
  yield all([fork(appSaga)]);
}
