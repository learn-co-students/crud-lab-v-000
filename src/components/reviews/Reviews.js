import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    debugger
    const relativeReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);

    const renderReviews = relativeReviews.map((review, index) => <Review key={index} review={review} deleteReview={this.props.deleteReview} />)


    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;