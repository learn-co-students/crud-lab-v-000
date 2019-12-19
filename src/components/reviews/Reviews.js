import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  filteredReviews = () => this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

  render() {
    return (
      <ul>
        {this.filteredReviews().map((review,id) => <Review review={review} key={id} deleteReview={this.props.deleteReview} />)}
      </ul>
    );
  }
};

export default Reviews;