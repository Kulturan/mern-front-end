import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

const AuthRoute = {
  key: 'auth',
  path: ['/login', '/register'],
};
const MainRoute = {
  key: 'main',
  path: [
    '/',
    '/keranjang',
    '/favorit',
    '/pentasku',
    '/akun',
    '/pengaturan',
    '/pentas/:id',
  ],
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={AuthRoute.path} key={AuthRoute.key}>
          <AuthRoutes />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={MainRoute.path} key={MainRoute.key}>
          <MainRoutes />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
