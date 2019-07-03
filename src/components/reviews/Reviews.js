import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  reviewsForRestaurant = () => {
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  }

  renderReviews = () => {
    return this.reviewsForRestaurant().map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />)
  }

  render() {
    return (
      <ul>
      {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
