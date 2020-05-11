import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => {
    return this.props.reviews.map(review => {
      if (this.props.restaurantId === review.restaurantId) {
        return <Review update={this.props.updateReview} delete={this.props.deleteReview} key={review.id} review={review}/>
        }
      })
  }

  render() {
    return (
      <ul>
        Reviews
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
