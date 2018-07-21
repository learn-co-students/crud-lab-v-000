import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {
  render() {

    let restaurants = this.props.store.getState().restaurants.map(restaurant => <Restaurant restaurant={restaurant} store={this.props.store}/> )

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;