import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviewsArr = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviews = reviewsArr.map((review, index) => {
      return <Review review={review} key={index} />
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;