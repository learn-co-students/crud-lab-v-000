import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { store, restaurantId } = this.props;
    const restaurantReviews = store.getState().reviews.filter(review => review.restaurantId === restaurantId);
    const reviewText = restaurantReviews.map((review, index) => {
      return <Review store={store} key={index} review={review} />
    })
    return (
      <ul>
        {reviewText}
      </ul>
    );
  }
};

export default Reviews;
