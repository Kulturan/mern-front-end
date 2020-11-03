import React from 'react';

import Routes from './routes';

import './App.scss';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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
      main: '#222b31',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff3465',
      contrastText: '#fff',
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

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
