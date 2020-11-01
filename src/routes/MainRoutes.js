import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Bookings, Favorite, MyShows, Account, Settings } from '../pages';

import { ResponsiveDrawer, Footer } from '../components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}));

const routeItems = [
  {
    key: 'pesanan',
    path: '/pesanan',
    component: <Bookings />,
  },
  {
    key: 'favorit',
    path: '/favorit',
    component: <Favorite />,
  },
  {
    key: 'pentasku',
    path: '/pentasku',
    component: <MyShows />,
  },
  {
    key: 'akun',
    path: '/akun',
    component: <Account />,
  },
  {
    key: 'pengaturan',
    path: '/pengaturan',
    component: <Settings />,
  },
  {
    key: 'home',
    path: '/',
    component: <Home />,
  },
];

const LayoutMain: React.FC<{}> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ResponsiveDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default function MainRoutes() {
  return (
    <React.Fragment>
      <LayoutMain>
        <Switch>
          {routeItems.map((routeItem) => (
            <Route path={routeItem.path} key={routeItem.key}>
              {routeItem.component}
            </Route>
          ))}
        </Switch>
      </LayoutMain>
    </React.Fragment>
  );
}
