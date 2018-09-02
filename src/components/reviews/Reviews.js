import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const relatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    
    const reviewList = relatedReviews.map(review => {
      return <Review key={review.id} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    )
  }
}

export default Reviews