import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const relevantReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);

    const renderReviews = relevantReviews.map((review) => {
      return <Review review={review} delete={this.props.delete} />
    })
    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
