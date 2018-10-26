import React from 'react';
import Restaurant from './Restaurant';

const Restaurants = props => {
  
  const restaurants = props.restaurants.map(restaurant =>
    <Restaurant
      key={restaurant.id}
      id={restaurant.id}
      text={restaurant.text}
      deleteRestaurant={props.deleteRestaurant}
      addReview={props.addReview}
      deleteReview={props.deleteReview}
      reviews={props.reviews}
    />)

  return (
    <ul>
      {restaurants}
    </ul>
  );
};


export default Restaurants;
