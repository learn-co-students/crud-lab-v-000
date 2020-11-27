import React, { Component } from 'react';
import Restaurant from './Restaurant';


class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map((restaurant, index) => {
        return <li><Restaurant key={index} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/></li>})}
      </ul>
    );
  }
};

export default Restaurants;