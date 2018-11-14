import React, { Component } from 'react';
import Restaurant from './Restaurant'

const Restaurants = props => {
  const renderRestaurant = props.restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={props.deleteRestaurant}/>)
    return(
      <ul>
        {renderRestaurant}
      </ul>
    );
  }


export default (Restaurants)
