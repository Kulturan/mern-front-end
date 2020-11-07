import React from 'react';

import Routes from './routes';

import './App.scss';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    type: 'dark',
    primary: {
      light: '#ff4874',
      main: '#ff3465',
      dark: '#e52e5a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#222b31',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
      color: '#fff',
    },
    h3: {
      fontWeight: 700,
      color: '#fff',
    },
    h4: {
      fontWeight: 700,
      color: '#fff',
    },
    h5: {
      fontWeight: 700,
      fontStyle: 'italic',
      color: '#fff',
    },
    subtitle1: {
      fontSize: '0.8rem',
      color: '#bfbfbf',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      color: '#fff',
    },
    caption: {
      color: '#fff',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
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
