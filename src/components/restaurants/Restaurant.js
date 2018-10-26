import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

const Restaurant = props =>  {
    return (
      <div>
        <li>
          {props.text}
        <button onClick={() => props.deleteRestaurant(props.id)}> X </button>
        </li>
        <ReviewsContainer
          reviews={props.reviews}
          addReview={props.addReview}
          deleteReview={props.deleteReview}
          restaurantId={props.id}
          />
      </div>
    );
};

export default Restaurant;
