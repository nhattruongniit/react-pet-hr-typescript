import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// material core
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// themes
import { lightTheme } from 'themes';

// stores
import { store } from 'stores';

// containers
const DefaultLayout = lazy(() => import('containers/DefaultLayout'));
const Login = lazy(() => import('features/Login'));
const Register = lazy(() => import('features/Register'));

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

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Suspense fallback={<div />}>
            <Switch>
              <Route exact path="/login" name="Login Page" component={Login} />
              <Route
                exact
                path="/register"
                name="Register Page"
                component={Register}
              />
              <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
