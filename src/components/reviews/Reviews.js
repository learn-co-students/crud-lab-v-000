import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const renderReviews = this.props.reviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>)

    return (
      <ul>
        Reviews:
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
