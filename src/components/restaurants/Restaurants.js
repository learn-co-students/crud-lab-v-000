import React from 'react';

import ReviewsContainer from '../../containers/ReviewsContainer'

const Restaurants = ({ restaurants }) => {
  const restaurantcard = restaurants.map(restaurant =>
      <ReviewsContainer restaurant = {restaurant} />)

    return(
      <ul>
        {restaurantcard}
      </ul>
    );
};

export default Restaurants;
