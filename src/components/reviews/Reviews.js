import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
  	
  	const restaurantId = this.props.restaurantId
	const restaurantReviews = this.props.reviews.filter(review => review.restaurantId === restaurantId)

	const generateReviews = () => restaurantReviews.map(review => <Review key={review.id} text={review.text} 
		delete={this.props.delete} id={review.id} />)
    return (
      <ul>
        {generateReviews()}
      </ul>
    );
  }
};

export default Reviews;