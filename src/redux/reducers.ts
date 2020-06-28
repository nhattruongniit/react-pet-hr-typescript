// types
import { AppActionTypes, IAppState, IAppAction } from './types';

const initialState: IAppState = {
  isSidebar: false,
  mode: 'light',
  isLoading: false
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
    case AppActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading,
      };
    default:
      return state;
  }
};

export default reducers;
