import { createStore, applyMiddleware, compose, combineReducers, Store, $CombinedState, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {
  firebaseReducer,
  FirebaseReducer,
  ReactReduxFirebaseProviderProps
} from 'react-redux-firebase';

import { PersistPartial } from 'redux-persist/es/persistReducer';
import Config from '../../config';

export type AppStore = {
  firebase: FirebaseReducer.Reducer;
  firestore: any;
}

type InitStoreResult = {
  store: Store<{
    readonly [$CombinedState]?: undefined;
  } & AppStore & PersistPartial, AnyAction>;
  persistor: Persistor;
  reactReduxFirebaseProps: ReactReduxFirebaseProviderProps;
}

function initStore(): InitStoreResult {

  const reactReduxFireebaseConfig = {
    userProfile: 'users'
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  };

  firebase.initializeApp(Config.firestore);
  firebase.firestore();

  const persistConfig = {
    key: 'root',
    storage,
  };

  const reducers = combineReducers<AppStore>({
    firebase: firebaseReducer,
    firestore: firestoreReducer
  });

  const persistedReducer = persistReducer(persistConfig, reducers);

  // Активируем redux расширение для Chrome
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Создаем хранилище
  const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

  const persistor = persistStore(store);

  const reactReduxFirebaseProps: ReactReduxFirebaseProviderProps = {
    firebase,
    config: reactReduxFireebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  };

  return { store, persistor, reactReduxFirebaseProps };
}

export default initStore;
