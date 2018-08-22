import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId )

    const reviewsList = reviews.map((review, index) => <Review key={index} review={review} restaurantId={this.props.restaurantId} deleteReview={this.props.deleteReview} />)
    return (
      <ul>
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;
