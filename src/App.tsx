import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

// context
import { useGlobalContext } from 'context/GlobalContext';

// themes
import theme from 'themes';

// types
import IState from 'IState';

// auth route
import AuthRoute from 'containers/AuthRoute';

// containers
const DefaultLayout = lazy(() => import('containers/DefaultLayout'));
const Login = lazy(() => import('features/Login'));

// redux
const mapStateToProps = (state: IState) => {
  const {
    app: { mode },
  } = state;
  return {
    mode,
  };
};
const connector = connect(mapStateToProps, null);
type PropsFromRedux = ConnectedProps<typeof connector>;

const isAuth = true;

const App = ({ mode }: PropsFromRedux) => {
  // 0: light, 1: dark
  const type = mode === 'light' ? 0 : 1;
  const { lang } = useGlobalContext();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <MuiThemeProvider theme={theme(type)}>
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<div />}>
          <Switch>
            {/* <Route exact path="/login" render={() => isAuth ? <Redirect to="/" /> : <Login />} /> */}
            <Route exact path="/login" component={Login} />
            <AuthRoute path="/" isAuth={isAuth} component={DefaultLayout} />
          </Switch>
        </Suspense>
      </Router>
    </MuiThemeProvider>
  );
};

export default connector(App);
