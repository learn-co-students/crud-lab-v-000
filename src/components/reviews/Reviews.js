import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.map((review, i) => {
      return review.restaurantId === this.props.restaurantId && <Review key={i} review={review} store={this.props.store} />
    })

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
