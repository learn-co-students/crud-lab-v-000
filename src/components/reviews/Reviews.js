import React from 'react';
import Review from './Review';

const Reviews = props => {
  const reviews = props.reviews.filter(review =>
    props.restaurantId === review.foreignId
  ).map(review =>
    <Review
      key={review.id}
      foreignKey={props.restaurantId}
      id={review.id}
      text={review.text}
      deleteReview={props.deleteReview}
    />
  )
    return (
      <ul>
        {reviews}
      </ul>
    );
};

export default Reviews;
