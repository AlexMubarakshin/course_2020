import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AuthStoreState, authReducer } from './auth';
import { imagesReducer, ImagesStoreState } from './images';
import { imageReducer, ImageStoreState } from './image';

export type Store = {
  authReducer: AuthStoreState;
  imagesReducer: ImagesStoreState;
  imageReducer: ImageStoreState;
}

const persistConfig = {
  key: 'root',
  storage,
};

// Пакуем редьюсеры
const reducers = combineReducers<Store>({ imagesReducer, imageReducer, authReducer });
const persistedReducer = persistReducer(persistConfig, reducers);

// Активируем redux расширение для Chrome
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Создаем хранилище
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export default store;
