import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AllRoutes } from '../routes';
import { LOGIN_ROUTE } from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Switch>
      {AllRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
