import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

// route config
import { routes, routesWithoutFooter } from 'routes';

// features
const DefaultAside = lazy(() => import('./DefaultAside'));
const DefaultHeader = lazy(() => import('./DefaultHeader'));
const DefaultFooter = lazy(() => import('./DefaultFooter'));

function DefaultLayout() {
  const location = useLocation();
  const [withoutFooter, setWithoutFooter] = useState<Boolean>(true);

  useEffect(() => {
    const withoutFooter = routesWithoutFooter.some((route) => route.pathname === location.pathname);
    setWithoutFooter(withoutFooter);
  }, [location.pathname]);

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

      {withoutFooter ? null : (
        <footer>
          <Suspense fallback={<div />}>
            <DefaultFooter />
          </Suspense>
        </footer>
      )}
    </div>
  );
}

export default DefaultLayout;
