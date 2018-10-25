import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  reviewz = () => {
    return this.props.reviews.map((r, idx) =>
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
