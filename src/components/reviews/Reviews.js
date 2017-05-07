import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let reviews = this.props.store.getState().reviews
           .filter(review => review.restaurantId === this.props.restaurantId)
           .map(review => <Review store={this.props.store} key={review.id} review={review} />)

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
