import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }

  renderReviews = () => {
    const revs = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    return revs.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />);
  }
};

export default Reviews;
