import React from 'react';

import Routes from './routes';

import './App.scss';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
      palette: {
        type: "dark",
        primary: {
          main: '#ff3465',
          contrastText: '#fff',
        },
        secondary: {
          main: purple[500],
        },
      },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
