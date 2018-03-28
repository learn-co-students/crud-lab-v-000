import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
  	let reviews = this.props.store.getState().reviews.filter((review)=> {
			return review.restaurantId == this.props.restaurantId
  	});

    reviews = reviews.map( review=>  
      <Review restaurantId={review.restaurantId} 
              review={review} 
              store={this.props.store} />
    );

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;