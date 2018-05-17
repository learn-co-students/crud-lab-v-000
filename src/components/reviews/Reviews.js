import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { store, restaurantId } = this.props
    const filteredReviews = store.getState().reviews.filter(review => {
      return review.restaurantId === restaurantId
    })
    const reviews = filteredReviews.map((review, index) => {
      return <Review store={store} key={index} review={review} />
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
