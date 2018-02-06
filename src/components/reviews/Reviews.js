import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const store = this.props.store;
    const restaurantId = this.props.restaurantId;
    const reviews = this.props.store.getState().reviews.map((review, index) => {
      if (review.restaurantId === restaurantId) {
        return <Review store={store} review={review} />
      }
    });

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
