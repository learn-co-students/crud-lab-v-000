import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    
    const { reviews, restaurantId, deleteReview, updateReview } = this.props
    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const reviewsList = restaurantReviews.map(review => 
      <Review 
        key={review.id} 
        review={review} 
        deleteReview={deleteReview}
        updateReview={updateReview}
      />
    )
    
    return (
      <ul>
        {restaurantReviews.length > 0 &&
          <h4>Reviews</h4>
        }
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;