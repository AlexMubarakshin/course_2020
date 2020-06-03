import * as React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { PicsumImage } from '../../../core/model/Picsum';
import { Store } from '../../../core/redux/store';
import { loadImage, LoadImageFunc } from '../../../core/redux/image';

type Params = {
  id: string;
}

type ImageDetailsStateToProps = {
  image?: PicsumImage;
  isFetching?: boolean;
}

type ImageDetailsDispatchToProps = {
  loadImage?: LoadImageFunc;
}

type ImageDetailsContainerProps = ImageDetailsDispatchToProps & ImageDetailsStateToProps;

const ImageDetailsContainer: React.FC<ImageDetailsContainerProps> = ({ image, isFetching, loadImage }: ImageDetailsContainerProps) => {
  const { id } = useParams<Params>();

  React.useEffect(() => {
    loadImage && loadImage(+id);
  }, [id, loadImage]);

  return (
    <div>
      {
        !isFetching && image ?
          (
            <>
              <img src={image.download_url} style={{ maxWidth: '100%' }} alt={image.author} />
              <h1>{image.author}</h1>
              <p>height: <strong>{image.height}</strong></p>
              <p>width: <strong>{image.width}</strong></p>
            </>
          )
          :
          (
            <p>Loading...</p>
          )
      }

    </div>
  );
};

const mapStateToProps = (state: Store): ImageDetailsStateToProps => ({
  image: state.imageReducer.image,
  isFetching: state.imageReducer.isFetching,
});

const mapDispatchToProps: ImageDetailsDispatchToProps = {
  loadImage,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ImageDetailsContainer);
