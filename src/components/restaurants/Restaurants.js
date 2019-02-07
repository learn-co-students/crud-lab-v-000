import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props;

    return(
      <ul>
        {restaurants.map(restaurant => <Restaurant key={restaurant.id} deleteRestaurant={deleteRestaurant} restaurant={restaurant} />)}
      </ul>
    );
  }
};

export default Restaurants;
