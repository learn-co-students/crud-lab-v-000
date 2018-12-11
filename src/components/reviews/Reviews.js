import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {


  render() {

  	const restReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

  	const restItems = restReviews.map(review => {
  		return <Review review={review} deleteReview={this.props.deleteReview} key={this.props.restaurantId}/>
  	})

    return (
      <ul>
        {restItems}
      </ul>
    );
  }
};

export default Reviews;
