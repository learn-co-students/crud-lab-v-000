import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const restaurantReviews = this.props.store.getState().reviews.filter(review => (
      review.restaurantId === this.props.restaurantId
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
