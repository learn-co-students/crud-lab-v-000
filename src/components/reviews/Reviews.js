import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
  	const { reviews, restaurantId, deleteReview } = this.props;
  	const ownReviews = reviews.filter(review => review.restaurantId === restaurantId);
  	const renderReviews = ownReviews.map((review, index) => {
  		return <Review key={index} review={review} deleteReview={deleteReview} />}) 

    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;