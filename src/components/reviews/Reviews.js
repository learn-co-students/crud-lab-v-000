import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        <h4>Reviews:</h4>
        {this.props.reviews.map(review =>
          <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
        )}
      </ul>
    );
  }
};

export default Reviews;