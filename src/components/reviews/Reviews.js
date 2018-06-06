import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaurantReviews = this.props.store.getState().reviews.filter(r =>
      r.restaurantId === this.props.restaurantId
    );
    const reviews = restaurantReviews.map((review, index) =>
      <Review key={index} review={review} store={this.props.store}/>
    )

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
