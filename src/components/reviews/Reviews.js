import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews, restaurantId, deleteReview } = this.props;

    const restaurantReviews = reviews.filter(review => {
      return review.id === restaurantId;
    });
    
    return (
      <ul>
      {restaurantReviews.map(review => {
        return <Review review={review} key={review.id}
        deleteReview={deleteReview} />
      })}
      </ul>
    );
  }
};

export default Reviews;
