import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
      {this.props.reviews.map(review => {
        return <Review review={review} key={review.id}
        deleteReview={this.props.deleteReview} />
      })}
      </ul>
    );
  }
};

export default Reviews;
