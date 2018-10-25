import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  currentReviews = () => {
    return this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId)
  }

  reviewz = () => {
    return this.currentReviews().map((r, idx) =>
      <Review review={ r } key={ idx } deleteReview={ this.props.deleteReview }/>
    )
  }

  render() {
      return (
        <ul>
          { this.reviewz() }
        </ul>
      );
    }
};

export default Reviews;
