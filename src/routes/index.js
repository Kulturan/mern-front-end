import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Register, Bookings } from '../pages';
import { ResponsiveDrawer, Footer } from '../components';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
}));

const Routes = () => {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/pesanan'>
          <ResponsiveDrawer />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Bookings />
            <Footer />
          </main>
        </Route>
        <Route path='/'>
          <ResponsiveDrawer />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Home />
            <Footer />
          </main>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
