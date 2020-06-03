import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '../../../core/redux/store';

import './styles.css';

import Header from '../../elements/header';
import Footer from '../../elements/footer';

import HomeContainer from '../home';
import ImageDetailsContainer from '../image-details';
import NotFoundContainer from '../not-found';
import LoginContainer from '../login';

type AppProps = {};

const AppContainer: React.FC<AppProps> = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <div className="app">
            <Header />
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/image/:id' component={ImageDetailsContainer} />

            {/* <Route component={NotFoundContainer} /> */}

            <Footer />
          </div>
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider >
);

export default AppContainer;
