import React, { Component } from 'react';
import RestaurantsContainer from './containers/RestaurantsContainer';
import ReviewsContainer from './containers/ReviewsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantsContainer />
        <ReviewsContainer />
      </div>
    );
  }
};

export default App
