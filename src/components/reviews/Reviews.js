import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

    const reviewCards = associatedReviews.map(review => {
      return <Review key={review.id} deleteReview={this.props.deleteReview} review={review}/>
    })
    return (
      <ul>
        {reviewCards}
      </ul>
    );
  }
};

export default Reviews;