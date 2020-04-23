import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// material core
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// themes
import { lightTheme } from 'themes';

// stores
import { store } from 'stores';

// service worker
import * as serviceWorker from './serviceWorker';
// scss
import './scss/index.scss';

// containers
import App from './App';

const theme = createMuiTheme({
  ...lightTheme,
  typography: {
    fontFamily: [
      'Helvetica Regular, Helvetica, Arial, Verdana, Tahoma, sans-serif',
    ].join(','),
    h1: {
      fontStyle: 'italic',
      fontFamily: 'Snell Roundhand Bold',
      fontWeight: 'bold',
      fontSize: '2rem',
    },
    h6: {
      fontSize: '0.9rem',
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
