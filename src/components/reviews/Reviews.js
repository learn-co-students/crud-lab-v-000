import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    if (this.props.store.getState().reviews){ //filters reviews
      const filteredReviews = this.props.store.getState().reviews.filter(review => {
        return review.restaurantId === this.props.restaurantId
      })
      const reviewList = filteredReviews.map((review, index) => {
        return <Review review={review} key={index} restaurantId={review.restaurantId} store={this.props.store} />
      });
      return(
        <ul>
          {reviewList}
        </ul>
      );
    }else {
      return(
        <ul>
        </ul>
      )
    }
  }
};

export default Reviews;