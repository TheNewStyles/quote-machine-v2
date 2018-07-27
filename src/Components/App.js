import React, { Component } from 'react';

import '../Styles/App.css';

import QuoteText from '../Components/QuoteText'
import { Author } from './Author';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div id="quote-box">
              <QuoteText />
              <Author />
              <button id="new-quote">

              </button>
              <div id="tweet">

              </div>
          </div>
      </div>
    );
  }
}

export default App;
