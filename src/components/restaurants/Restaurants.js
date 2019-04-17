import React, { Component } from 'react';
import Restaurant from './Restaurant';
class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurants.map((shop, index)=> <li key={index}><Restaurant restaurant={shop} deleteRestaurant={this.props.deleteRestaurant}/></li>)
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;