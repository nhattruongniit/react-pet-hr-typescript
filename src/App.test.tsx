import React from 'react';
// import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import App from './App';
// import { createShallow } from '@material-ui/core/test-utils';
import renderer from 'react-test-renderer';
// import toJson from 'enzyme-to-json';

// const shallow = createShallow();
const mockStore = configureStore([]);
jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      i18n: {
        changeLanguage: () => {},
      },
      t: (text: string) => text,
    };
  },
}));

jest.mock('@material-ui/core', () => {
  const materialUI = jest.requireActual('@material-ui/core');
  return {
    ...materialUI,
    Menu: jest.fn(({ children, open }) => (open ? children : null)),
  };
});

jest.mock('@material-ui/core/Snackbar', () => ({
  __esModule: true,
  default: ({ children }: any) => <>{children}</>,
}));

jest.mock('localforage', () => ({
  config: () => true,
  createInstance: () => ({ config: () => true }),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('APP COMPONENT', () => {
  let store: any = null;
  let wrapper: any = null;

  beforeEach(() => {
    // const mocked = require('react-i18next/dist/commonjs');
    // module.exports = mocked;
    process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID = '';

    spyOn(ReactGA, 'initialize');
    store = mockStore({
      app: { isLoading: false },
      setting: { lang: 'en' },
    });
    wrapper = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('SHOULD MATCHED SNAPSHOT', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
