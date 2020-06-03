import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './rootReducers';
import rootSagas from './rootSagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducers, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSagas),
  };
};

const store = configureStore();

export { store };
