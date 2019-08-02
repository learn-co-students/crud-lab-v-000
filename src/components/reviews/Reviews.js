import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviews;
    let associatedReviews;
    if (this.props.reviews) {
      associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
      reviews = associatedReviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>)
    }
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;