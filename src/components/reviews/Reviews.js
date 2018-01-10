import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const formattedReviews = reviews.map((review, index) => {return <Review store={this.props.store} review={review} key={index} />})
    return (
      <ul>
        {formattedReviews}
      </ul>
    );
  }
};

export default Reviews;
