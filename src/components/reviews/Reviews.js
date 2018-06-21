import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { store, restaurantId } = this.props;
    const restaurantReviews = store.getState().reviews.filter((review) => review.restaurantId === restaurantId)
    const reviews = restaurantReviews.map((review, index) => {
      return <Review key={index} store={store} review={review} />
    })
    return (
      <div>
        <ul>
          {reviews}
        </ul>
      </div>

    );
  }
};

export default Reviews;
