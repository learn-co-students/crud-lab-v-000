import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => {
    return this.props.reviews.map(r => {
      return <Review review={r} />
    })
  }

  render() {
    return (
      <ul>
        Reviews
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;