import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

const Restaurant = props => {
  return (
    <div>
      <li>
        {props.restaurant.text}
        <button onClick={() => props.deleteRestaurant(props.restaurant.id)}> Delete </button>
        <ReviewsContainer restaurant={props.restaurant} />
      </li>
    </div>
  );
};

export default Restaurant;
