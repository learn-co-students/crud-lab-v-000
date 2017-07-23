import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaraunt_reviews = this.props.store.getState().reviews
      .filter(item => item.restaurantId === this.props.restaurantId)
      .map(review => <Review review={review} store={this.props.store} />);
    return (
      <ul>
        {restaraunt_reviews}
      </ul>
    );
  }
};

export default Reviews;