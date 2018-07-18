import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const relatedReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const displayReviews = relatedReviews.map((review, index) => {
      return <Review
      review={review}
      key={index}
      store={this.props.store}
      />
    })
    return (
      <ul>
        {displayReviews}
      </ul>
    );
  }
};

export default Reviews;

