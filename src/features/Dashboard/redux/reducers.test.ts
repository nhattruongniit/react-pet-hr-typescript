import reducers from './reducers';
import { IDashboardTypes, IDashboardState, IDashboardAction } from './types';

const initialState: IDashboardState = {
  todos: [],
  error: false,
};

describe('DASHBOARD REDUCER', () => {
  describe('FETCH TODO FLOW', () => {
    const todos = [
      {
        id: 1,
        title: 'truong',
      },
    ];
    it('SHOULD RETURN INITIAL STATE', () => {
      const fakeAction: IDashboardAction = {
        type: 'DEFAULT_STATE',
        payload: initialState,
      };

      expect(reducers(initialState, fakeAction)).toEqual(initialState);
    });

    it('SHOULD HANDLE FETCHING TODO REQUEST', () => {
      const fakeAction: IDashboardAction = {
        type: IDashboardTypes.FETCH_TODO_REQUEST,
        payload: initialState,
      };

      expect(reducers(initialState, fakeAction)).toEqual(initialState);
    });

    it('SHOULD HANDLE FETCHING TODO SUCCESS', () => {
      const fakeAction = {
        type: IDashboardTypes.FETCH_TODO_SUCCESS,
        payload: {
          ...initialState,
          todos,
        },
      };
      const expectState = {
        error: false,
        todos,
      };

      expect(reducers(initialState, fakeAction)).toEqual(expectState);
    });

    it('SHOULD HANDLE FETCHING TODO ERROR', () => {
      const fakeAction = {
        type: IDashboardTypes.FETCH_TODO_ERROR,
        payload: {
          ...initialState,
          error: true,
        },
      };
      expect(reducers(initialState, fakeAction).error).toEqual(true);
    });
  });
});
