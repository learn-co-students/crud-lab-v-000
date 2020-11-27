import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return (
      <ul>
        {reviews.map((review, index) => {
        return <li><Review key={index} review={review} deleteReview={this.props.deleteReview}/></li>})}
      </ul>
    );
  }
};

export default Reviews;