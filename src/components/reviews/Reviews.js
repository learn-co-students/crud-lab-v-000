import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);

    return (
      <div>
        <ul>
          {associatedReviews.map((review, index) => {
            return <Review key={index} review={review} deleteReview={deleteReview} />
          })}
        </ul>
      </div>
    );
  }
};

export default Reviews;