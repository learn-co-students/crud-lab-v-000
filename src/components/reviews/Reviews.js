import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReview = review => {
    if (review.restaurantId === this.props.restaurantId) {
      return (
        <Review key={review.id} review={review} restaurantId={review.restaurantId} updateReview={this.props.updateReview} deleteReview={this.props.deleteReview} />
      );
    };
  };

  render() {
    return (
      <ul>
        Reviews
        {this.props.reviews.map(review => this.renderReview(review))}
      </ul>
    );
  }
  
};

export default Reviews;