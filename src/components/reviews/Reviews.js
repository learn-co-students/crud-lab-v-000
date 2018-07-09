import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  makeReviewItems() {
    const reviewsObjects =  this.props.store.getState().reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId;
    });
    const reviewElements = reviewsObjects.map((reviewObject, index) => {
      return <Review store={this.props.store} review={reviewObject} key={index} />
    });
    return reviewElements;
  }

  render() {
    return (
      <ul>
        {this.makeReviewItems()}
      </ul>
    );
  }
};

export default Reviews;