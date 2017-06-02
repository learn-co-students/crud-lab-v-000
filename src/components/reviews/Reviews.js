import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaurantReviews = this.props.store.getState().reviews.filter(
      review => review.restaurantId === this.props.restaurantId
    )
    const reviews = restaurantReviews.map((e, i) => {
      return <Review key={i} store={this.props.store} review={e} />
    });

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
