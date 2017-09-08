import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews
      .filter(review => review.restaurantId === this.props.restaurantId)
      .map((review, index) => {
        return(
          <Review
            restaurantId={this.props.restaurantId}
            key={index}
            review={review}
            store={this.props.store}
          />
        );
    })
    return (
      <ul>
        Reviews
        { reviews }
      </ul>
    );
  }
};

export default Reviews;
