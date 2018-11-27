import React, { Component } from 'react';
import Review from './Review';

const Reviews = props => {
  const restaurantReviews = props.reviews.filter(review => review.restaurantId === props.restaurantId)
  const reviews = restaurantReviews.map((review, index) => <Review key={index} review={review} deleteReview={props.deleteReview}/>)

  return (
    <ul>
      {reviews}
    </ul>
  );
};

export default Reviews;
