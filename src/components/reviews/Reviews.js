import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  filterReviews = () => {
    const state = this.props.store.getState();
    if (state.reviews) {
      return state.reviews.filter(review => 
        review.restaurantId === this.props.restaurantId
      )
    }
    return [];
  }

  render() {
    const reviews = this.filterReviews().map((review, index) => {
      return <Review key={index} review={review} store={this.props.store} />
    })

    return(
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;