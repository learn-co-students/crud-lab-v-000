import React, { Component } from 'react';
import Review from './Review';
import ReviewInput from './ReviewInput'

class Reviews extends Component {
  filterReviews = () => this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

  renderReviews = () => this.filterReviews().map(review =>
    <Review deleteReview={() => this.props.deleteReview(review.id)} key={review.id} review={review}/>)

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
