import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {store, restaurantId} = this.props
    const filteredReviews = store.getState().reviews.filter(function(el) {
      return el.restaurantId === restaurantId})

    const reviews = filteredReviews.map(function(review) {
      return <Review store={store} review={review} />
    })

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
