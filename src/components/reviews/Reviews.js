import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
  const assocRev = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    return (
      <ul>
        Reviews
       {assocRev.map(review => <Review key={review.id} review={review} delete={this.props.delete} /> )}
      </ul>
    );
  }
};

export default Reviews;
