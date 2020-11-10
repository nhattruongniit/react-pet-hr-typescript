import { takeLatest } from 'redux-saga/effects';

import { AppActionTypes } from './types';

const loginFlow = function* ({ payload }: any) {
  console.log('loginFlow');
};

export const appSaga = function* () {
  yield takeLatest(AppActionTypes.LOGIN_REQUEST, loginFlow);
};
