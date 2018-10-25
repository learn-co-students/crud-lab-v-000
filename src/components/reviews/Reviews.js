import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => {
    return this.props.reviews.filter(r => {
      return r.restaurantId === this.props.restaurantId
    }).map(r => {
      return <Review deleteReview={this.props.deleteReview} review={r} />
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