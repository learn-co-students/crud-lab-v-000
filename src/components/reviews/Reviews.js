import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId).map(review => {
     return <Review review={review} />
    })

    return (
      <ul>{reviews}</ul>
    );
  }
};

export default Reviews;
