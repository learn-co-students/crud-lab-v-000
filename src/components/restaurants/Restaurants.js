import React, { Component } from 'react';
import Restaurant from './restaurants'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant key={restuarant.id} {...restuarant} deleteRestaurant={props.deleteRestaurant}/>) }
      </ul>
    );
  }
};

export default Restaurants;
