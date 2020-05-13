// types
import { AppActionTypes, IAppState, IAppAction } from './types';

const initialState: IAppState = {
  isSidebar: false,
  mode: 'light',
};

const reducers = (state = initialState, { type, payload }: IAppAction) => {
  switch (type) {
    case AppActionTypes.SET_SIDEBAR:
      return {
        ...state,
        isSidebar: payload.isSidebar,
      };
    case AppActionTypes.SET_DARK_MODE:
      return {
        ...state,
        mode: payload.mode,
      };
    default:
      return state;
  }
};

export default reducers;
