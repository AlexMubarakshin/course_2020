import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

import Card from '../../elements/card';
import { PicsumImage } from '../../../core/model/Picsum';

import { loadImages, loadMoreImages, LoadImagesActionFunc, LoadMoreImagesFunc } from '../../../core/redux/images';
import { Store } from '../../../core/redux/store';

type HomeContainerProps = {
  loadImages: LoadImagesActionFunc;
  loadMoreImages: LoadMoreImagesFunc;

  images: PicsumImage[];
  page: number;
  isFetching: boolean;
  isMoreFetching: boolean;
};


class HomeContainer extends React.Component<HomeContainerProps> {

  componentDidMount(): void {
    window.addEventListener('scroll', this.handleScroll);

    this.props.loadImages();
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (): void => {
    const { isFetching, loadMoreImages } = this.props;
    const isBottomOfPage = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;

    if (!isBottomOfPage || isFetching) return;

    loadMoreImages();
  }

  render(): React.ReactElement {
    const { images, isFetching, isMoreFetching } = this.props;
    return (
      <main className="app__main">
        {
          images.map((image) => (
            <Card
              key={image.id}
              src={image.download_url}
              id={image.id}
            />
          ))
        }

        {
          (isFetching || isMoreFetching) && (
            <h4>Loading...</h4>
          )
        }
      </main>
    );
  }
}

const mapStateToProps = (state: Store): any => ({
  images: state.imagesReducer.images,
  isFetching: state.imagesReducer.isFetching,
  isMoreFetching: state.imagesReducer.isMoreFetching,
  page: state.imagesReducer.page,
});

const mapDispatchToProps = {
  loadImages,
  loadMoreImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
