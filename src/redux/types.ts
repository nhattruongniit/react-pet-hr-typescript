export type IAppState = {
  isSidebar: boolean;
  mode: string;
  isLoading: false
};

export type IAppAction = {
  type: string;
  payload: IAppState;
};

export enum AppActionTypes {
  // toggle side bar
  SET_SIDEBAR = 'APP/SET_SIDEBAR',
  // dark mode
  SET_DARK_MODE = 'APP/SET_DARK_MODE',
  SET_LOADING = 'APP/SET_LOADING'
}
