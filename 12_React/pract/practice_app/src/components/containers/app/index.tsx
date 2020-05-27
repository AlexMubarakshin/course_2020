import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles.css';

import Header from '../../elements/header';
import Footer from '../../elements/footer';

import Home from '../home';
import ImageDetailsContainer from '../image-details';
import NotFound from '../not-found';

type AppProps = {};

const App: React.FC<AppProps> = () => (
  <div className="app">
    <Header />

    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/image/:id' component={ImageDetailsContainer} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>

    <Footer />
  </div>
);

export default App;
