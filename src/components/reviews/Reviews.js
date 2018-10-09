import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, restaurantId} = this.props
    // debugger;
    const childReviews = reviews.filter(review => review.restaurantId === restaurantId)

    return (
      <ul>
        {childReviews.map((review, index) => <Review key={index} review={review} />)}
      </ul>
    );
  }
};

export default Reviews;