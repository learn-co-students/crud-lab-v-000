import React from 'react';
import Review from './Review';

const Reviews = ({ store, restaurantId }) => {
  const associatedReviews = store
    .getState()
    .reviews.filter(review => review.restaurantId === restaurantId);
  const reviews = associatedReviews.map(review => (
    <Review store={store} key={review.id} review={review} />
  ));
  return (
    <div>
      <ul>{reviews}</ul>
    </div>
  );
};

export default Reviews;
