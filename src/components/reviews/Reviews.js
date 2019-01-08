import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews, restaurantId, deleteReview } = this.props
    const relatedReviews = reviews.filter(review => review.restaurantId === restaurantId)

    const reviewList = relatedReviews.map((review, id) => {
      return <Review key={id} review={review} deleteReview={deleteReview} />
    })
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;