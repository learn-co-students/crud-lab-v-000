import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const restaurantreviews = reviews.filter(review => review.restaurantId === restaurantId)
    const reviewList = restaurantreviews.map(review => {
      return (
        <Review 
          key={review.id} 
          review={review}
          deleteReview={deleteReview}
        />
      )
    })

    return (
      <ul>
        { reviewList }
      </ul>
    );
  }
};

export default Reviews;