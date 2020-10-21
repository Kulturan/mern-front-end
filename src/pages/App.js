import React from 'react';
import {Routes} from '../config'
import './App.css';
import Navbar from './component/Navbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
      palette: {
        primary: {
          main: green[700],
          contrastText: '#fff',
        },
        secondary: {
          main: purple[500],
        },
      },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
