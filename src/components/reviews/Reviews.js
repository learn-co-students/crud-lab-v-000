import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, restaurantId, deleteReview} = this.props;
    const relevantReviews = reviews.filter(review => review.restaurantId === restaurantId)
    return (
      <ul>
        {relevantReviews.map(review => <Review key={review.id}
          review={review}
          deleteReview={deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;
