import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
  	const reviews = this.props.store.getState().reviews

  	const filteredReviews = reviews.filter(review =>
  		 review.restaurantId === this.props.restaurantId
  	)
    
    const listReviews = filteredReviews.map((review, index) => {
      return < Review key={index} review={review} store={this.props.store} />
    })

    return (
      <ul>
        {listReviews}
      </ul>
    );
  }
};

export default Reviews;