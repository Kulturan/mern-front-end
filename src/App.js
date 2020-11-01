import React from 'react';

import Routes from './routes';

import './App.scss';
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#ff4874',
      main: '#ff3465',
      dark: '#e52e5a',
      contrastText: '#fff',
    },
    secondary: {
      main: purple[500],
    },
  },
  typography: {
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
