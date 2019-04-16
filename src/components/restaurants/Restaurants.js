import React from 'react';
import Restaurant from './Restaurant'

const Restaurants = props => {

  const restaurants = props.restaurants.map(restaurant => <Restaurant deleteRestaurant={props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} />)

  return(
    <ul>
      {restaurants}
    </ul>
  );
};

export default Restaurants;
