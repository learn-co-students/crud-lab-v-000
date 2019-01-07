import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // filter review array to select only reviews associated with restaurantId
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    const reviewList = associatedReviews.map(review =>
      <li><Review review={review} delete={this.props.delete}/></li>
    )
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
