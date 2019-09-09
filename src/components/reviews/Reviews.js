import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    console.log('in Reviews - this.props.reviews', this.props.reviews)

    return (
      <ul>
        {this.props.reviews.map((review) => (
          <Review key={review.reviewId} review={review} />
        )
        )}
      </ul>
    );
  }
};

export default Reviews;