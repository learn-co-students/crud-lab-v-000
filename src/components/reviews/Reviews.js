import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaurant = this.props.restaurantId;
    const filteredReviews = this.props.store.getState().reviews.filter(r => r.restaurantId === this.props.restaurantId);
    const reviews = filteredReviews.map((r,i) => {
      return <Review review={r} key={i} store={this.props.store} />
    });
    return(
      <ul>
        { reviews }
      </ul>
    );
  }
};

export default Reviews;
