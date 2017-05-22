import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const tiedReviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId);
    const reviews = tiedReviews.map((review, index) => {
        return <Review review={review} id={index} store={this.props.store} />
      });

    return(
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
