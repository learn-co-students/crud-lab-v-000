import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, deleteReview} = this.props;
    return (
      <ul>
        {reviews.map(review => <Review key={review.id}
          review={review}
          deleteReview={deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;
