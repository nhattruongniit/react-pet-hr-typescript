import React, { FC } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

type IProps = {
  exact?: boolean;
  path: string;
  isAuth: boolean;
  component: FC<RouteComponentProps>;
};

const AuthRoute = ({
  exact = false,
  path,
  isAuth,
  component: Component,
}: IProps) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { path } }} />
        )
      }
    />
  );
};
export default AuthRoute;
