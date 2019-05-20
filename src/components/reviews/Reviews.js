import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews;
    const associatedReviews = reviews.filter(review => review.restaurantId === this.props.restaurantId);

    const reviewsList = associatedReviews.map(review=>
    <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>)
    return (
      <ul>
        Reviews
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;
