import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';
import { theme } from './config/muiTheme';
import './App.css';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </div>
  );
}
