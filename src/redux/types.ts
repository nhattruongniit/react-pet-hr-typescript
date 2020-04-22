export type IAppState = {
  showSidebar: boolean;
};

export type IAppAction = {
  type: string;
  payload: {
    showSidebar: boolean;
  };
};

export enum AppActionTypes {
  SET_SIDEBAR_REQUEST = 'APP/SET_SIDEBAR_REQUEST',
  SET_SIDEBAR_SUCCESS = 'APP/SET_SIDEBAR_SUCCESS',
}
