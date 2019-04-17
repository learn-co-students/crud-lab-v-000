import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    const restaurantReviews = reviews.filter(review => review.restaurantId === this.props.restaurantId);
    const displayReviews = restaurantReviews.map((review, index)=><li key={index}><Review review={review} deleteReview={this.props.deleteReview}/></li>)
    return (
      <ul>
        {displayReviews}
      </ul>
    );
  }
};

export default Reviews;