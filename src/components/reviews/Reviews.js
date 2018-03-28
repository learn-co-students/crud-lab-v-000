import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    let {store, restaurantId} = this.props
    let associatedReviews = store.getState().reviews.filter(review => review.restaurantId === restaurantId)
    let reviews = associatedReviews.map((review, index) => {
      return <Review store={this.props.store} key={index} review={review} />
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;