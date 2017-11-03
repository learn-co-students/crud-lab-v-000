import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {store, restaurantId } = this.props
    const restaurantReviews = store.getState().reviews.filter(review => review.restaurantId === restaurantId)
      const reviews = restaurantReviews.map((restaurantReview, index) => {
         return <Review review={restaurantReview} key={index} store={this.props.store} />
      })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
