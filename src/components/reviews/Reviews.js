import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviewList = this.props.store.getState().reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId;
    });

    const reviews = reviewList.map((review, index) => (
      <Review key={index} review={review} store={this.props.store} />
    ))

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
