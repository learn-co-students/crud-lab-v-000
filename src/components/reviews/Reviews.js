import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filter_reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId);
    const reviews = filter_reviews.map((review, index) => {
      return <Review store={this.props.store} key={index} review={review} />
    });

    return (
      <ul>
        <p>{reviews}</p>
      </ul>
    );
  }
};

export default Reviews;