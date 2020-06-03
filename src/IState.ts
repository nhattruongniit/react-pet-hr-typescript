import { IAppState } from 'redux/types';

import { IDashboardState } from 'features/Dashboard/redux/types';

type IState = {
  app: IAppState;
  dashboard: IDashboardState
};

export default IState;
