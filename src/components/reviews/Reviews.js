import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviewList = this.props.reviews.map(review =>
      <li><Review review={review} delete={this.props.delete}/></li>
    )
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
