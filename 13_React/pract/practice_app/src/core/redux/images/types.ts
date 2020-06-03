import { PicsumImage } from '../../model/Picsum';
import { Dispatch, AnyAction } from 'redux';
import { Store } from '../store';

export type ImagesStoreState = {
  images: PicsumImage[];
  page: number;

  isFetching: boolean;
  isMoreFetching: boolean;
}

export type LoadImagesActionFunc = () => (dispatch: Dispatch<AnyAction>, getState: () => Store) => Promise<void>
export type LoadMoreImagesFunc = () => (dispatch: Dispatch<AnyAction>, getState: () => Store) => Promise<void>