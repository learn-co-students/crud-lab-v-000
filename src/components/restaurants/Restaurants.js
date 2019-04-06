import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    const {restaurants, deleteRestaurant} = this.props;
    const restaurauntList = restaurants.map(restaurant => {
      return(
        <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant} />
      )
    });
    return(
      <ul>
        {restaurauntList}
      </ul>
    );
  }
};

export default Restaurants;
