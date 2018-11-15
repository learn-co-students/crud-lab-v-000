import React, { Component } from 'react';
import Review from './Review';

const Reviews = props => {
  const restaurantReviews = props.reviews.filter(review => review.restaurantId === props.restaurantID)
  const renderReviews = restaurantReviews.map((review, index) => <Review key={index} review={review} deleteReview={props.deleteReview}/>)

    return (
      <ul>
        {renderReviews}
      </ul>
    );
};

export default Reviews;
