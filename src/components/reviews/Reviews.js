import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
  
    return (
      <ul>
        Reviews
        {this.props.state.reviews.map(review => <Review key={review.id} review={review.text} />)}
      </ul>
    );
  }
};

export default Reviews;
