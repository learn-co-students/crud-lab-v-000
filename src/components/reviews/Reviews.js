import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const actualReviews = this.props.store.getState().reviews.filter(
      review => review.restaurantId === this.props.restaurantId
    ).map(
      (review, index) => <Review key={index} review={review} restaurantId={this.props.restaurantId} store={this.props.store} />

    )


    return (
      <ul>
        {actualReviews}
      </ul>
    );
  }
};

export default Reviews;
