import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { store, restaurantId } = this.props;
    const filteredReviews = store.getState().reviews.filter(r => r.restaurantId === restaurantId);
    const reviews = filteredReviews.map((r,i) => {
      return <Review review={r} key={i} store={store} />
    });
    return(
      <ul>
        { reviews }
      </ul>
    );
  }
};

export default Reviews;
