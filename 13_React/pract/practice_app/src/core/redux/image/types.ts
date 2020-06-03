import { PicsumImage } from '../../model/Picsum';
import { Dispatch, AnyAction } from 'redux';

export type ImageStoreState = {
  image?: PicsumImage;
  isFetching?: boolean;
}

export type LoadImageFunc = (id: number) => (dispatch: Dispatch<AnyAction>) => Promise<void>;
