import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const reviews = this.props.store.getState().reviews.map((review, index) => {
        return <Review review={review} store={this.props.store} />
      });

    const filteredReviews = reviews.filter(review => review.props.review.restaurantId === this.props.restaurantId)

    return (
      <ul>
        {filteredReviews}

      </ul>
    );
  }
};

export default Reviews;
