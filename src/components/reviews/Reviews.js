import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaurantId = this.props.restaurantId
    const reviews = this.props.store.getState().reviews
      .filter(review => review.restaurantId === restaurantId)
      .map((review, index) => {
        return <Review key={index} review={review} restaurantId={this.props.restaurantId} store={this.props.store} />
      });

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
