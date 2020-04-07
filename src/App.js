import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';
import Header from './components/Header/index';
import { theme } from './config/muiTheme';
import './App.css';

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
}
