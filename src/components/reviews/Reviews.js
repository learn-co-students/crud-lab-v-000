import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const singleReview = this.props.store.getState().reviews.filter( review => review.restaurantId === this.props.restaurantId).map( review => <Review id={review.id} review={review} />);

    return (
      <ul>
        {singleReview}
      </ul>
    );
  }
};

export default Reviews;