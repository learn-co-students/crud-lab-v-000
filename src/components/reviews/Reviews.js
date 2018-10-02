import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
  	const { reviews, restaurantId, deleteReview } = this.props
  	const matchedReviews = reviews.filter(review => review.restaurantId === restaurantId)
  	const renderReviews = matchedReviews.map(review => {
  		return <Review key={review.id} review={review} deleteReview={deleteReview} />
  	})
    debugger
    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};


export default Reviews