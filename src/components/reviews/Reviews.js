import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { store, restaurantId } = this.props;
    const associatedReviews = store.getState().reviews.filter(review => review.restaurantId === restaurantId);
    const reviews = associatedReviews.map((review, index) => {
      return <Review review={review} store={store} key={index} />
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;