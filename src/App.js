import React, { Component } from 'react';
import RestaurantInput from './components/restaurants/RestaurantInput';
import Restaurants from './components/restaurants/Restaurants';
import Reviews from './components/reviews/Reviews';
import ReviewInput from './components/reviews/ReviewInput';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput store={this.props.store} />
        <Restaurants store={this.props.store}/>
      </div>
    );
  }
};
