import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    const filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    return filteredReviews.map(review => <Review deleteReview={this.props.deleteReview} key={review.id} review={review} />)
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