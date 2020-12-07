import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    return this.props.restaurantReviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} restaurantId={review.restaurantId}/>)
  }

  render() {

    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;
