import { AppActionTypes } from './types';

// toggle sidebar
export const setSidebar = (isSidebar: boolean) => ({
  type: AppActionTypes.SET_SIDEBAR,
  payload: { isSidebar },
});

// change dark mode
export const setDarkMode = (mode: string) => ({
  type: AppActionTypes.SET_DARK_MODE,
  payload: { mode },
});

export const setLoading = (isLoading: boolean) => ({
  type: AppActionTypes.SET_LOADING,
  payload: { isLoading },
});
