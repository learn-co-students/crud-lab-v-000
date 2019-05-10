import React, { Component } from 'react';
import RestaurantsContainer from './containers/RestaurantsContainer';
import cuid from 'cuid';
export const cuidFn = cuid;

class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantsContainer />
      </div>
    );
  }
};

export default App
