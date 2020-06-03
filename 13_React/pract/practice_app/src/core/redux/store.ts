import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { imagesReducer, ImagesStoreState } from './images';

export type Store = {
  imagesReducer: ImagesStoreState;
}

const reducers = combineReducers<Store>({ imagesReducer });

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
