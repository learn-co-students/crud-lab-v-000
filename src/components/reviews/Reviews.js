import React, { Component } from 'react';
import Review from './Review'

class Reviews extends Component {
  render() {

    const restaurantReviews = this.props.store.getState().reviews? this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurant.id) : [];
    const reviews = restaurantReviews.map((restaurantReview, index) => {
      return <Review review={restaurantReview} key={index} store={this.props.store} />
    });

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
