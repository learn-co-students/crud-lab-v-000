import React, { Component } from 'react';
import RestaurantsContainer from './containers/RestaurantsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Restaurant App</h1>
        </header>
        <RestaurantsContainer />
      </div>
    );
  }
};

export default App
