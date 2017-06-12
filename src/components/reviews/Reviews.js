import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
      
      const reviews = this.props.store.getState().reviews.filter ( review => review.restaurant_id == this.props.restaurant.id)
      .map( review => <Review review={review} />)
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;