import React from 'react';

import './styles.css';

import Card from '../../elements/card';
import { PicsumImage } from '../../../core/model/Picsum';
import { API_URL } from '../../../config';

const IMAGE_LIMIT = 15;

type HomeProps = {};

type HomeState = {
  images: PicsumImage[];
  page: number;

  isFetching: boolean;
  isListEnded: boolean;
}

class Home extends React.Component<HomeProps, HomeState> {

  state: HomeState = {
    images: [],
    page: 1,
    isFetching: false,
    isListEnded: false,
  }

  componentDidMount(): void {
    window.addEventListener('scroll', this.handleScroll);

    this.loadData();
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (): void => {
    const isBottomOfPage = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;

    if (!isBottomOfPage || this.state.isFetching || this.state.isListEnded) return;

    this.setState((prevState) => ({
      page: prevState.page + 1
    }), this.loadData);
  }

  loadData = (): void => {
    this.setState({
      isFetching: true,
    }, async () => {
      try {
        const response = await fetch(`${API_URL}/v2/list?page=${this.state.page}&limit=${IMAGE_LIMIT}`);
        const values = await response.json();

        const isListEnded = values.length < IMAGE_LIMIT;

        this.setState((prevState) => ({
          images: prevState.images.concat(values),
          isFetching: false,
          isListEnded,
        }));
      } catch (err) {
        console.error(err);

        this.setState({
          isFetching: false,
        });
      }
    });

  }

  render(): React.ReactElement {
    return (
      <main className="app__main">
        {
          this.state.images.map((image) => (
            <Card
              key={image.id}
              src={image.download_url}
              id={image.id}
            />
          ))
        }

        {
          this.state.isFetching && (
            <h4>Loading...</h4>
          )
        }
      </main>
    );
  }
}

export default Home;
