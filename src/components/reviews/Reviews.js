import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  // <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
  render() {

    const rs = this.props.store.getState().reviews.filter(review => {
      return review.restaurantId === this.props.restaurantId
    });

    const reviews = rs.map((review, i) => {
      return <Review key={i} store={this.props.store} review={review} />;
    });

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
