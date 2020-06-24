import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import { DataStoreProvider } from '../../../store/provider';

const App: React.FC = () => {
  return (
    <DataStoreProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </DataStoreProvider>
  );
};

export default App;
