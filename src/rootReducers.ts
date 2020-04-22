import { combineReducers } from 'redux';

import appReducer from 'redux/reducers';

export default combineReducers({
  app: appReducer,
});
