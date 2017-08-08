import React, { Component } from 'react';

import Header from './Header';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Product />
        </div>

      </div>
    );
  }
}

export default App;
