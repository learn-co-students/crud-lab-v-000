import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId)
    const renderReviews = reviews.map(r =>
      <Review
        key={r.id}
        review={r}
        deleteReview={this.props.deleteReview}/>)
    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
