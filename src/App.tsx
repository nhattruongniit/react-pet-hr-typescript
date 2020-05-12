import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

// themes
import theme from 'themes';

// auth route
import AuthRoute from 'containers/AuthRoute';

// containers
const DefaultLayout = lazy(() => import('containers/DefaultLayout'));
const Login = lazy(() => import('features/Login'));


const isAuth = true;

function App() {
  // 0: light, 1: dark
  const type = 0;

  return (
    <MuiThemeProvider theme={theme(type)}>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <AuthRoute path="/" isAuth={isAuth} component={DefaultLayout} />
        </Switch>
      </Suspense>
    </MuiThemeProvider>
  );
}

export default App;
