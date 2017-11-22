import React, { Component } from 'react';
import RestaurantInput from './components/restaurants/RestaurantInput';
import Restaurants from './components/restaurants/Restaurants';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Restaurant input form, referenced from App component: </h3>
        <RestaurantInput store={this.props.store} /><br />

        <h3>Restaurants display area, referenced from App component: </h3>
        <Restaurants store={this.props.store}/>
      </div>
    );
  }
};
