import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../../core/redux/store';

import './styles.css';

import Header from '../../elements/header';
import Footer from '../../elements/footer';

import HomeContainer from '../home';
import ImageDetailsContainer from '../image-details';
import NotFoundContainer from '../not-found';

type AppProps = {};

const AppContainer: React.FC<AppProps> = () => (
  <Provider store={store}>
    <div className="app">
      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route path='/image/:id' component={ImageDetailsContainer} />

          <Route component={NotFoundContainer} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  </Provider>
);

export default AppContainer;
