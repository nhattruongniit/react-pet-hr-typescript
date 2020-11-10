import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// material core
import CssBaseline from '@material-ui/core/CssBaseline';

// route config
import routes from 'routes';

// container
import ErrorBoundary from 'containers/ErrorBoundary';

// styles
import useStyles from './styles';

// features
const DefaultAside = lazy(() => import('./DefaultAside'));
const DefaultHeader = lazy(() => import('./DefaultHeader'));

const DefaultLayout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ErrorBoundary>
          <Suspense fallback={<div />}>
            <Switch>
              {routes.map((route, idx) => {
                return <Route key={idx} path={route.path} exact={route.exact} name={route.name} component={route.component} />;
              })}
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default DefaultLayout;
