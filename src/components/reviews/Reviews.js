import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
  	const restaurantReviews = this.props.store.getState().reviews.filter(review => {
  		return review.restaurantId === this.props.restaurantId;
  	})

  	const reviewList = restaurantReviews.map((review, index) => {
  		return <Review review={review} store={this.props.store} key={this.props.index} />
  	})

    return (
      <ul>
      	{ reviewList }
      </ul>
    );
  }
};

export default Reviews;