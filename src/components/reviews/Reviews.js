import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.map((review, index) => {
      if(review.restaurantId === this.props.restaurantId) {
      return <Review store={this.props.store} key={index} review={review} />
      } else {
        return <p>Error</p>
      }
    });
           return (
          <ul>
             {reviews}
          </ul>
        );
  }
};

export default Reviews;
