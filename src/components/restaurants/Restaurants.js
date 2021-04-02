import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  
  render() {
    const restaurant = this.props.restaurants.map(restaurant => {restaurant})
    return(
      <ul>
        <Restaurant restaurant={restaurant}/>
      </ul>
    );
  }
};

export default Restaurants;