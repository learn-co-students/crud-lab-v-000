import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { store, restaurantId } = this.props

    const restaurantReviews = store.getState().reviews.filter(review => (
      review.restaurantId === restaurantId
    )).map(review => {
      return <Review review={review} key={review.id} store={this.props.store}/>
    })

    return (
      <ul>
        {restaurantReviews}
      </ul>
    );
  }
};

export default Reviews;
