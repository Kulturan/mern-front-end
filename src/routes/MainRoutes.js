import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Home,
  Cart,
  Favorite,
  MyShows,
  Account,
  Settings,
  DetailPentas,
} from '../pages';

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
    key: 'keranjang',
    path: '/keranjang',
    component: <Cart />,
    isBackgroundScroll: false,
  },
  {
    key: 'favorit',
    path: '/favorit',
    component: <Favorite />,
    isBackgroundScroll: false,
  },
  {
    key: 'pentasku',
    path: '/pentasku',
    component: <MyShows />,
    isBackgroundScroll: false,
  },
  {
    key: 'akun',
    path: '/akun',
    component: <Account />,
    isBackgroundScroll: false,
  },
  {
    key: 'pengaturan',
    path: '/pengaturan',
    component: <Settings />,
    isBackgroundScroll: false,
  },
  {
    key: 'detailPentas',
    path: '/pentas/:id',
    component: <DetailPentas />,
    isBackgroundScroll: false,
  },
  {
    key: 'home',
    path: '/',
    component: <Home />,
    isBackgroundScroll: true,
  },
];

const LayoutMain: React.FC<{}> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ResponsiveDrawer />
      <main className={classes.content}>
        {props.children}
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default function MainRoutes() {
  const classes = useStyles();

  const scrollHandler = (value) => {
    if (value) {
      return (
        <React.Fragment>
          <div className={classes.toolbar} />
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <LayoutMain>
        <Switch>
          {routeItems.map((routeItem) => (
            <Route path={routeItem.path} key={routeItem.key}>
              {scrollHandler(!routeItem.isBackgroundScroll)}
              {routeItem.component}
            </Route>
          ))}
        </Switch>
      </LayoutMain>
    </React.Fragment>
  );
}
