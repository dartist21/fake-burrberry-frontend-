import React, { Component } from 'react';

import Header from './Header';
import Product from './Product';
import Description from './Description';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Product />
          <Description />
        </div>

      </div>
    );
  }
}

export default App;
