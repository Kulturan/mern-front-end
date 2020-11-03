import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login, Register } from '../pages';

const routeItems = [
  {
    key: 'register',
    path: '/register',
    component: <Register />,
  },
  {
    key: 'login',
    path: '/login',
    component: <Login />,
  },
];

export default function AuthRoutes() {
  return (
    <React.Fragment>
      <Switch>
        {routeItems.map((routeItem) => (
          <Route exact path={routeItem.path} key={routeItem.key}>
            {routeItem.component}
          </Route>
        ))}
      </Switch>
    </React.Fragment>
  );
}
