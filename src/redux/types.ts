export type IAppState = {
  isSidebar: boolean;
  mode: string;
};

export type IAppAction = {
  type: string;
  payload: {
    isSidebar: boolean;
    mode: string;
  };
};

export enum AppActionTypes {
  // toggle side bar
  SET_SIDEBAR = 'APP/SET_SIDEBAR',
  // dark mode
  SET_DARK_MODE = 'APP/SET_DARK_MODE',
}
