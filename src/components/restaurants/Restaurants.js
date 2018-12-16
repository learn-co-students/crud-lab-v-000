import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const {restaurants, restaurant, deleteRestaurant } = this.props;
    const restaurants_list = restaurants.map(restaurant => {
      return (
        <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            deleteRestaurant={deleteRestaurant}
        />
      )
    });
    return(
      <ul>
        {restaurants_list}
      </ul>
    );
  }
};

export default Restaurants;
