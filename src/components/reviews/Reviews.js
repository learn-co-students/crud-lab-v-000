import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const relatedReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const displayReviews = relatedReviews.map((review, index) => {
      return <Review
        store={this.props.store}
        key={index}
        review={review}
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
