import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import './styles.css';

import theme from '../../theme';
import Header from '../../elements/header';

import HomeContainer from '../home';

import NotFoundContainer from '../not-found';
import LoginContainer from '../login';
import RegisterContainer from '../register';

import initStore from '../../../core/redux/store';
import PrivateRoute from '../../elements/router/private-router';

const configuratedStore = initStore();

type AppProps = {};

const AppContainer: React.FC<AppProps> = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <Provider store={configuratedStore.store}>
      <ReactReduxFirebaseProvider {...configuratedStore.reactReduxFirebaseProps}>
        <PersistGate loading={null} persistor={configuratedStore.persistor}>
          <BrowserRouter>
            <div className="app">
              <Header />
              <Switch>
                <Route exact path='/' component={HomeContainer} />
                <Route exact path='/login' component={LoginContainer} />
                <Route exact path='/register' component={RegisterContainer} />
                <PrivateRoute exact path='/profile'>
                  <h1> Profile</h1>
                </PrivateRoute>

                <Route component={NotFoundContainer} />
              </Switch>

            </div>
          </BrowserRouter>
        </PersistGate>
      </ReactReduxFirebaseProvider>
    </Provider >
  </ThemeProvider>

);

export default AppContainer;
