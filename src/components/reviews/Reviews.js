import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(e => e.restaurantId === this.props.restaurantId).map((review, i) => {
      return <Review key={i} review={review} store={this.props.store} />
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
