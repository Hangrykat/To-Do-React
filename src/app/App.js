import React from 'react';
import logo from './logo.svg';
import './src/app/App.css';

import Header from "./src/components/header/Header"
import Body from "./src/components/body/Body"
import Footer from "./src/components/footer/Footer"

function App() {
  return (
    <div>
      <h1>Hi</h1>
      <Header />
      <Body />
      <Footer />
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
