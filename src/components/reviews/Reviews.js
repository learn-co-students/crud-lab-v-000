import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

      const reviewsFiltered = this.props.store.getState().reviews.filter(review=> {
        return review.restaurantId === this.props.restaurantId}
      )

      const reviews = reviewsFiltered.map(review => {
        return <Review review={review} store={this.props.store} />
      })

      return (
        <ul>
        { reviews }
        </ul>
      )
  }
};

export default Reviews;
