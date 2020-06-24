import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import { stores } from '../../../store';

import Home from '../Home';

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
