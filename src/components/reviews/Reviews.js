import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId);

    const renderReviews = restaurantReviews.map((review, idx) => {
      return (
      <Review
       key={idx}
       review={review}
       deleteReview={deleteReview}
       />
     )
   })

    return (
      <div>
        <ul>
          {renderReviews}
        </ul>
      </div>
    );
  }
};

export default Reviews;
