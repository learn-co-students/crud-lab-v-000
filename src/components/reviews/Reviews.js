import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
  	const wantedReviews = this.props.store.getState().reviews.filter((review)=> review.restaurantId === this.props.restaurantId )
  	const reviewList = wantedReviews.map((review)=> {
  		return <Review store={this.props.store} review={review}/>
  	})
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;