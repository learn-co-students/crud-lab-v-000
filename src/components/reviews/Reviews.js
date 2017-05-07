import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.store.getState().reviews
          .filter(review => review.restaurantId === this.props.restaurantId)
          .map(review => <Review store={this.props.store} key={review.id} review={review} />)
        }
      </ul>
    );
  }
};

export default Reviews;
