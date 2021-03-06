function Header(props) {
  return (
    <header>
      <input type="text" placeholder="Search..." onChange={props.onChange} />
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <h4>
        <a href="https://github.com/AlexMubarakshin" target="_blank">
          Alex Mubarakshin
        </a>
      </h4>
    </footer>
  );
}

function CardItem(props) {
  return (
    <div className="list__item">
      <img
        className="list__item_image"
        src={props.image}
        alt="meidtaion_image" />
      <h3 className="list__item_title">{props.author}</h3>
    </div>
  );
}

class App extends React.Component {

  constructor(props) {
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

  handleInputChange(e) {
    const inputValue = e.target.value;

    this.setState({
      filter: inputValue
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

const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);

