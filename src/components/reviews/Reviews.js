import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const store = this.props.store;
    const restaurantId = this.props.restaurantId;
    const associatedReviews = store.getState().reviews.filter(review => review.restaurantId === restaurantId);
    const reviews = associatedReviews.map((review, index) => {
      return <Review store={store} key={index} review={review} />
    });

    return (
      <ul>
        <p>{reviews}</p>
      </ul>
    );
  }
};

export default Reviews;