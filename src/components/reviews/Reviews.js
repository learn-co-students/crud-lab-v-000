import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviewsList = this.props.reviews.map(
      review => {if (review.restaurantId === this.props.restaurantId) {
        return <Review 
        key={review.id} 
        review={review} 
        delete={this.props.deleteReview}
        />
      }})
    return (
      <ul>
        Reviews
        {reviewsList}
      </ul>
    );
  }
};

export default Reviews;