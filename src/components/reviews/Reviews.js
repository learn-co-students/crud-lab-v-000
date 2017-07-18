import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const Reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId).map((review, index) => <Review key={index} store={this.props.store} review={review} /> )
    return (
      <ul>
        {Reviews}
      </ul>
    );
  }
};

export default Reviews;
