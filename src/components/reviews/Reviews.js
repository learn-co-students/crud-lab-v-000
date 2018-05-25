import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { store, restaurantId } = this.props;
    const childReviews = store.getState().reviews.filter(review => review.restaurantId === restaurantId);
    const reviews = childReviews.map((review, index) => {
    	return <Review store={store} key={index} review={review} />
    })

    return (
      <ul>
        { reviews }
      </ul>
    );
  }
};

export default Reviews;