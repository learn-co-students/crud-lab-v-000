import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { store, restaurantId } = this.props;

    const filteredReviews = store.getState().reviews.filter(review =>
      review.restaurantId === restaurantId);

    const reviews = filteredReviews.map((review, index) => {
      return <Review key={index} review={review} store={this.props.store} />
    })
    return (
      <div>
        <ul>
          {reviews}
        </ul>
      </div>
    );
  }
};

export default Reviews;
