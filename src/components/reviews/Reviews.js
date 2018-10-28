import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props
    	const filterReview = reviews.filter(review => review.restaurantId === restaurantId)
    	const renderReviews = filterReview.map(review => {
    		return <Review key={review.id} review={review} deleteReview={deleteReview} />
    	})
    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
