import React, { Component } from 'react';

import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
      const { restaurants, deleteRestaurant, updateRestaurant } = this.props;

    return (
      <ul>
        {restaurants.map(restaurant => {
          return <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant} updateRestaurant={updateRestaurant} />
        })}
      </ul>
    );
  }
};

export default Restaurants;