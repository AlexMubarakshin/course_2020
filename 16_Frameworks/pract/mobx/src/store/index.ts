import FavoriteStore from './FavoriteStore';

export type Store = {
  favorites: FavoriteStore;
};

export const createStore = (): Store => {
  return {
    favorites: new FavoriteStore(),
  };
};
