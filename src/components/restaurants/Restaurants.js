import React, { Component } from 'react';
import Restaurant from './Restaurant'

const Restaurants = (props) => {
  console.log(props.restaurants)
  const restaurants = props.restaurants.map( restaurant => <Restaurant restaurant={restaurant} key={restaurant.id}{...restaurant} deleteRestaurant={props.deleteRestaurant} />)

  return (
    <div>
      {restaurants}
    </div>
  );
}

export default Restaurants;
