import * as React from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../config';
import { PicsumImage } from '../../../core/model/Picsum';

type Params = {
  id: string;
}

const ImageDetailsContainer: React.FC = () => {
  const { id } = useParams<Params>();
  const [image, setImage] = React.useState<Partial<PicsumImage>>({});

  React.useEffect(() => {
    (async (): Promise<void> => {
      const response = await fetch(`${API_URL}/id/${id}/info`);
      const responseImage = await response.json();

      setImage(responseImage);
    })();
  }, []);

  return (
    <div>
      {
        image ?
          (
            <>
              <img src={image.download_url} style={{ maxWidth: '100%' }} />
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

export default ImageDetailsContainer;
