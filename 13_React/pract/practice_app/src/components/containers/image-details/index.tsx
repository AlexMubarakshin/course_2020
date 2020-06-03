import * as React from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../config';
import { PicsumImage } from '../../../core/model/Picsum';
import { connect } from 'react-redux';

type Params = {
  id: string;
}

type ImageDetailsContainerProps = {};

const ImageDetailsContainer: React.FC<ImageDetailsContainerProps> = () => {
  const { id } = useParams<Params>();
  const [image, setImage] = React.useState<Partial<PicsumImage>>({});

  React.useEffect(() => {
    (async (): Promise<void> => {
      const response = await fetch(`${API_URL}/id/${id}/info`);
      const responseImage = await response.json();

      setImage(responseImage);
    })();
  }, [id]);

  return (
    <div>
      {
        image ?
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

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetailsContainer);
