import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// route config
import routes from 'routes';

const DefaultAside = lazy(() => import('./DefaultAside'));
const DefaultHeader = lazy(() => import('./DefaultHeader'));
const DefaultFooter = lazy(() => import('./DefaultFooter'));

function DefaultLayout() {
  return (
    <div className="app">
      <header>
        <Suspense fallback={<div />}>
          <DefaultHeader />
        </Suspense>
      </header>

      <aside>
        <Suspense fallback={<div />}>
          <DefaultAside />
        </Suspense>
      </aside>

      <main>
        <div className="container">
          <Suspense fallback={<div />}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    component={route.component}
                  />
                ) : null;
              })}
              <Redirect from="/" to="/home" />
            </Switch>
          </Suspense>
        </div>
      </main>

      <footer>
        <Suspense fallback={<div />}>
          <DefaultFooter />
        </Suspense>
      </footer>
    </div>
  );
}

export default DefaultLayout;
