import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// auth route
import AuthRoute from 'containers/AuthRoute';

// containers
const DefaultLayout = lazy(() => import('containers/DefaultLayout'));
const Login = lazy(() => import('features/Login'));

const isAuth = false;

function App() {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <AuthRoute path="/" isAuth={isAuth} component={DefaultLayout} />
      </Switch>
    </Suspense>
  );
}

export default App;
