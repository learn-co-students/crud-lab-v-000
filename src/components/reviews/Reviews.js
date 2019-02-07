import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);

    return (
      <ul>
        {associatedReviews.map(review => <Review key={review.id} deleteReview={deleteReview} restaurantId={restaurantId} review={review} />)}
      </ul>
    );
  }
};

export default Reviews;
