import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// stores
import { store } from 'stores';

// context
import { GlobalProvider } from 'context/GlobalContext';

// service worker
import * as serviceWorker from './serviceWorker';

// i18n
import './i18n';

// scss
import './scss/index.scss';

// containers
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
