import React from 'react';
import Review from './Review';

const Reviews = props => {
  const reviewsToDisplay = props.reviews.filter(review => review.restaurantId === props.restaurantId)
  
  const reviewListItems = reviewsToDisplay.map(
    review => <Review key={review.id} review={review} deleteReview={props.deleteReview}/>
  )

  return(
    <ul>
      {reviewListItems}
    </ul>
  );
};

export default Reviews;