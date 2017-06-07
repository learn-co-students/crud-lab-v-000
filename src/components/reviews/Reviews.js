import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    debugger
    const getReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)

    const reviews = getReviews.map((review, index) => {
      return <Review review={review} key={index} store={this.props.store} />
    })

    return (
      <ul>
        {reviews || null}
      </ul>
    );
  }
};

export default Reviews;
