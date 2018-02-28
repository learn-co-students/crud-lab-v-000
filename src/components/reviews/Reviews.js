import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(rev => 
      rev.restaurantId === this.props.restaurantId
    ).map((rev, idx) =>
      <Review review={rev} store={this.props.store} key={idx} />
    )
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;