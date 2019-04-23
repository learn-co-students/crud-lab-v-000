import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

  	const filteredReviews = this.props.reviews.filter(review => this.props.restaurantId === review.restaurantId )
    return (

      <ul>
        Reviews
        {filteredReviews.map(review =>
        	<Review review={review} key={review.id} deleteReview={this.props.deleteReview} />
        )}
      </ul>
    );
  }
};

export default Reviews;
