import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(review => <li key="review.id"><Review review={review} deleteReview={this.props.deleteReview}/></li>)}
      </ul>
    );
  }
};

export default Reviews;