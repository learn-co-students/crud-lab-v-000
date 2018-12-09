import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurant, deleteReview } = this.props;
    return (
      <ul>
        { reviews.map(review => (
          <Review
            key={review.id}
            review={review}
            restaurantId={restaurant.id}
            deleteReview={deleteReview}
          />
        )) }
      </ul>
    );
  }
}

export default Reviews;
