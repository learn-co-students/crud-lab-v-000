import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { store, restaurantId } = this.props;
    const assocReviews = store.getState().reviews.filter(review => {
      return review.restaurantId === restaurantId
    });
    const reviews = assocReviews.map((review, index) => {
      return <Review 
      key={index}
      store={store}
      review={review}
      />
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
