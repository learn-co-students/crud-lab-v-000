import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const resReviews = this.props.store.getState().reviews.filter(r => r.restaurantId ===this.props.restaurantId)
    const restaurantReviews = resReviews.map((r, index) => {
      return <Review review={r} key={index} store={this.props.store}  />
    })

    return (
      <ul>
        {restaurantReviews}
      </ul>
    );
  }
};

export default Reviews;