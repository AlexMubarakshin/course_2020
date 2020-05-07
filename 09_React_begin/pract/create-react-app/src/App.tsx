import React from 'react';

import Header from './components/elements/Header';
import Footer from './components/elements/Footer';
import CardItem from './components/shared/CardItem';

type AppProps = {}

class App extends React.Component<AppProps> {

  constructor(props: AppProps) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {
    items: [
      {
        "image": "https://images.unsplash.com/photo-1588711811793-3ea0b7ef9fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        "author": "John O'Grady"
      },
      {
        "image": "https://images.unsplash.com/photo-1588673931505-d609754f0b5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        "author": "Peter de Montfort"
      },
      {
        "image": "https://images.unsplash.com/photo-1588616447674-184d7dad1b36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        "author": "Björk Guðmundsdóttir"
      },
      {
        "image": "https://images.unsplash.com/photo-1588603044210-d3364eab3e6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        "author": "Milan Vojnovič"
      }
    ],
    filter: ''
  }

  handleInputChange({ target: { value } }: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      filter: value
    });
  }

  render() {
    return (
      <div>
        <Header onChange={this.handleInputChange} />

        <main>
          <div className="list">
            {
              this.state.items
                .filter((el) => {
                  return el.author.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1;
                })
                .map((item, index) => (
                  <CardItem
                    key={index}
                    image={item.image}
                    author={item.author}
                  />
                ))
            }
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

export default App;
