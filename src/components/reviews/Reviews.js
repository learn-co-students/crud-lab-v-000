import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const {reviews, restaurantId, deleteReview} = this.props
    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const listReviews = restaurantReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })
    return (
      <ul>
        {listReviews}
      </ul>
    );
  }
};

export default Reviews;
