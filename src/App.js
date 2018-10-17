import React, { Component } from 'react';
import RestaurantsContainer from './containers/RestaurantsContainer';

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

//Take note of the structure of this app - containers can end up anywhere
// in an app, even nested way down the component tree. This set up can feel a bit
// counterintuitive initially since we could have a presentational component has a container
// component as a child, but the benefit is that none of the non-container components have
// any code related to Redux! They're just firing props!
