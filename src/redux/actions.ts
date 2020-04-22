import { AppActionTypes } from './types';

export const setSidebar = (showSidebar: boolean) => ({
  type: AppActionTypes.SET_SIDEBAR_REQUEST,
  payload: { showSidebar },
});

export const setSidebarSuccess = (showSidebar: boolean) => ({
  type: AppActionTypes.SET_SIDEBAR_SUCCESS,
  payload: { showSidebar },
});
