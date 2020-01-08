import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, deleteReview, updateReview } = this.props
    return (
      <ul>
        {reviews.map((review, id) => {
          return <Review key={id} review={review} deleteReview={deleteReview} updateReview={updateReview} />
        })}
      </ul>
    );
  }
};

export default Reviews;