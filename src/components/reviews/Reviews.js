import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);

    const showReviews = associatedReviews.map((review, index) => {
      return <Review index={index} review={review} deleteReview={this.props.deleteReview} />
    })

    return (
      <ul>
        {showReviews}
      </ul>
    );
  }
};

export default Reviews;