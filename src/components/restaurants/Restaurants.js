import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurantLIs = this.props.store.getState().restaurants
    .sort((a, b) => a.text.toLowerCase() > b.text.toLowerCase())
    .map((restaurant, index) => <Restaurant key={index} restaurant={restaurant} store={this.props.store} />)
    return(
      <ul>
        {restaurantLIs}
      </ul>
    );
  }
};

export default Restaurants;
