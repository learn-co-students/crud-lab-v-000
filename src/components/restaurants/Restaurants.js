import React, { Component } from 'react';
import Restaurant from './restaurant'

const Restaurants = (props) => {
  const restaurants = props.restaurants.map(restaurant => <li> <Restaurant key={restaurant.id} {...restaurant} deleteRestaurant={props.deleteRestaurant}/> </li>);

    return(
      <ul>
        {restaurants}
      </ul>
    );

};

export default Restaurants;