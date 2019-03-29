import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = (reviews) => {
    return reviews.map((review) => <Review deleteReview={this.props.deleteReview} key={review.id} review={review} />)
  }

  render() {
    console.log(this.props.reviews);
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id);

    return (
      <ul>
        {this.renderReviews(reviews)}
      </ul>
    );
  }
};

export default Reviews;
