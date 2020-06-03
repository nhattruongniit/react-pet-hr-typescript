import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

// components
import Dashboard from './Dashboard';

// actions
import { fetchTodoRequest } from './redux/actions';
import { IDashboardTypes } from './redux/types';

const mockStore = configureStore([]);

const initialState = {
  todos: [
    {
      id: 1,
      title: 'abc',
    },
  ],
  error: false,
};

describe('DASHBOARD COMPONENT', () => {
  let store: any = null;
  let wrapper: any = null;

  beforeEach(() => {
    store = mockStore({
      dashboard: initialState,
    });

    wrapper = renderer.create(
      <Provider store={store}>
        <Dashboard />
      </Provider>,
    );
  });

  it('SHOULD SNAPSHOT RENDER WITH CONNECTED REDUX STORE', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('SHOULD DISPATCH ACTION REQUEST FETCHING TODO AFTER RENDER COMPONENT', () => {
    expect(fetchTodoRequest()).toEqual({ type: IDashboardTypes.FETCH_TODO_REQUEST });
  });
});
