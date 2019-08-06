import React, { Component } from 'react';
import Restaurant from './Restaurant'

const Restaurants = (props) => {
  render() {
    const { restaurants, deleteRestaurant } = this.props;
    const restaurantList = restaurants.map(restaurant => {
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
        {restaurantList}
      </ul>
    );
  
};

export default Restaurants;