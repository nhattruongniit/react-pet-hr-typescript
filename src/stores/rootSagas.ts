import { all } from 'redux-saga/effects';

import dashboardSaga from 'features/Dashboard/redux/saga';

export default function* rootSaga() {
  yield all([
    dashboardSaga()
  ])
}