import { combineReducers } from 'redux';

import appReducer from 'redux/reducers';
import dashboardReducer from 'features/Dashboard/redux/reducers';

export default combineReducers({
  app: appReducer,
  dashboard: dashboardReducer
});
