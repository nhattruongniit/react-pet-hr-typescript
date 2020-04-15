import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// containers
const DefaultLayout = lazy(() => import('containers/DefaultLayout'));
const Login = lazy(() => import('modules/Login/containers/Login'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
