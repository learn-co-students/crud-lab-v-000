import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.filter(
      (review) => review.restaurantId === this.props.restaurantId)
    return (
      <ul>
        {reviews.map((review) => <Review key={review.id} delete={this.props.delete} review={review}/>)}
      </ul>
    );
  }
};

export default Reviews;