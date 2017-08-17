import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  render() {
    
    const corresp_reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId); 
	const reviews = corresp_reviews.map((review, index) => {
		return <Review  review={review} key={index} store={this.props.store} /> 
	})
  
    return (
  	
      <ul>
        {reviews}
      </ul>
    );
  }
}

export default Reviews;