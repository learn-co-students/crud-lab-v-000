import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const requiredReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const listReviews = requiredReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {listReviews}
        </ul>
      </div>
    );
  }

};

export default Reviews;