import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filteredReviews = this.props.reviews.filter(review => 
      review.restaurantId === this.props.restaurantId
    )

    const reviewMap = filteredReviews.map(review => {
      return (
        <Review 
          key={review.id} restaurantId={this.props.restaurantId} 
          review={review} deleteReview={this.props.deleteReview} 
        />
      )
    })

    return (
      <ul>
        {reviewMap}
      </ul>
    );
  }
};

export default Reviews;
