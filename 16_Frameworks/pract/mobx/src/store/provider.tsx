import React from 'react';

import { useLocalStore } from 'mobx-react';

import { createStore, Store } from '.';

const StoreContext = React.createContext(null);

export const DataStoreProvider = ({ children }: any) => {
  const store = useLocalStore(createStore);
  return <StoreContext.Provider value={store}> {children} </StoreContext.Provider>;
};

export const useDataStore = (): Store => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
