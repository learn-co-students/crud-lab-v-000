import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    console.log('ReviewsProps:', this.props)
    const { reviews, restaurantId, deleteReview } = this.props;

    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId)
    console.log('associated:', associatedReviews, reviews)
    const reviewList = associatedReviews.map((review, index) => {
      return <Review
        key={ index }
        review={ review }
        deleteReview={ deleteReview } />
    })
    console.log('aaaa:', reviewList)

    return (
      <ul>
        { reviewList }
      </ul >
    );
  }
};

export default Reviews;