import React, { Component } from 'react';
import Restaurant from './Restaurant';
import ReviewInput from '../reviews/ReviewInput'

class Restaurants extends Component {
  makeRestaurantItems() {
    return this.props.store.getState().restaurants.map((restaurant, index) => 
      <Restaurant store={this.props.store} key={index} restaurant={restaurant} />
    )
  }

  render() {
    return(
      <ul>
        {this.makeRestaurantItems()}
      </ul>
    );
  }
};

export default Restaurants;