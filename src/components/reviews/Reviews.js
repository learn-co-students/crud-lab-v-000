import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
      const reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
      return (
        <ul>
          {reviews.map((review) => {
            return < Review store={this.props.store} review={review} key={review.id} />
          })}
        </ul>
      )
    }
};

export default Reviews;
