import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, deleteReview, restaurantId} = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);

    const list = associatedReviews.map((review, index) => {
      return(
        <Review key={index} review={review} deleteReview={deleteReview} />
      )
    })
    return (
      <ul>
        {list}
      </ul>
    );
  }
};

export default Reviews;
