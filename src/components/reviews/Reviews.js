import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
  	const associated = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return (
      <ul>
        { associated && associated.map(review =>
        	<Review key={review.id} review={review} restaurantId={review.restaurantId} deleteReview={this.props.deleteReview}/>
        )}
      </ul>
    );
  }
};

export default Reviews;