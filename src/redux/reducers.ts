// types
import { AppActionTypes, IAppState, IAppAction } from './types';

const initialState: IAppState = {
  showSidebar: false,
};

const reducers = (state = initialState, { type, payload }: IAppAction) => {
  switch (type) {
    case AppActionTypes.SET_SIDEBAR_REQUEST:
      return {
        ...state,
        showSidebar: payload.showSidebar,
      };
    default:
      return state;
  }
};

export default reducers;
