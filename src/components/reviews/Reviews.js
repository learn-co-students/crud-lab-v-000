import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviewFetch = this.props.store.getState().reviews.filter((review) => review.restaurantId === this.props.restaurantId)

    const reviews = reviewFetch.map((review, index) => {
      return <Review review={review} key={index} id={review.id} store={this.props.store} restaurantId={this.props.restaurantId} />
    });

    return(
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
