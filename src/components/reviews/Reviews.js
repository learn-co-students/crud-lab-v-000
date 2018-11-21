import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    debugger
    return (
      <ul>
        {this.props.reviews && this.props.reviews.map((review, index) => <Review key={index} review={review} deleteReview={this.props.deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;
