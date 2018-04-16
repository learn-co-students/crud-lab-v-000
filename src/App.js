import React, { Component } from 'react';
import RestaurantInput from './components/restaurants/RestaurantInput';
import Restaurants from './components/restaurants/Restaurants';

export class App extends Component {
  render() {
    return (
      <div className="App mt-3">
        <h1
          className="text-primary"
        >Restaurants</h1>
        <RestaurantInput store={this.props.store} />
        <Restaurants store={this.props.store}/>
      </div>
    );
  }
};
