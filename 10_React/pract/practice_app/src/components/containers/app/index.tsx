import React from 'react';
import logo from './logo.svg';

import './styles.css';

import Header from '../../elements/header';
import Footer from '../../elements/footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default App;
