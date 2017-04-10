import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    let reviews = this.props.store.getState().reviews.filter(review => this.props.restaurantId === review.restaurantId).map((review, index) => (
      <Review
        restaurantId={this.props.restaurantId} store={this.props.store}
        review={review}
        key={index}
      />
    )
  );

    return (
      <ul>
        { reviews }
      </ul>
    );
  }
};

export default Reviews;
