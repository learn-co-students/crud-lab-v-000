import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { reviews, restaurantId, deleteReview } = this.props;

    const restaurantsReviews = reviews.filter(review => review.restaurantId ===   restaurantId);
    
    const reviewList = restaurantsReviews.map((review, index) => {
       return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }
};

export default Reviews;