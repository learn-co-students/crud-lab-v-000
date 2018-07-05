import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
  	const filterReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId )
  	const reviews = filterReviews.map((r, index) => {
  		return <Review key={index} review={r} store={this.props.store} />
  	})

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
